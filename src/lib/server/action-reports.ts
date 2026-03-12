'use server'

import { cacheTag, updateTag } from 'next/cache';
import { prisma } from "../prisma"
import { format0, getNow } from "../shared"
import { getUserEmail } from "./action-users"

const tagCachePays = 'all-pay'

export const getCachePays = async (inMonth:number,inYear:number) => {
  'use cache'
  const now = getNow()
  const [nowMonth,nowYear] = [now.getMonth(),now.getFullYear()]
  
  const validateYear = nowYear < inYear 
  const validateMonth = inMonth>11 || inMonth<0 
  const isFutureMonth = nowYear === inYear && inMonth > nowMonth
  if(validateYear || validateMonth || isFutureMonth) return { pays:[],comments:[] }
  cacheTag(tagCachePays+inMonth+inYear)

  const startDate = new Date(inYear,inMonth,1)
  const endDate = new Date(inYear,inMonth+1,1)
  const where = { date :{ gte: startDate, lt: endDate } }
  
  const pays = await prisma.pay.findMany({ where, orderBy:{date:'asc'} })
  const comments = await prisma.dayComment.findMany({ where })
  return { pays,comments }
}



export const getMonthReport = async (inMonth:number,inYear:number) => {

  const {pays,comments} = await getCachePays(inMonth,inYear)

  let total = 0
  if(!pays || pays.length === 0) return {data:[],total}

  const lastMonthDay = (new Date(inYear,inMonth+1,1)).getTime() - 86400000
  const totalDays = (new Date(lastMonthDay)).getDate()
 
  const reportInDays = Array.from({ length:totalDays }, (_,ix) => ({day:+ix+1,total:0,observed:false}))

  for(let pay of pays){
    const {date,mount} = pay
    const dayPay = date.getDate()
    reportInDays[dayPay-1].total += mount
    total += mount
  }
  for(let comment of comments){
    const {date,comment:comm} = comment
    const dayPay = date.getDate()
    if(comm) reportInDays[dayPay-1].observed = true;
  }
  
  const now = getNow()
  const [ dayNow,monthNow,yearNow ] = [ now.getDate(),now.getMonth(),now.getFullYear() ]
  const isCurrentMonth = monthNow === inMonth && yearNow === inYear
  const sliceIndex = isCurrentMonth ? dayNow : totalDays

  return {
    data: reportInDays.slice(0,sliceIndex).map(el => ({...el,month:inMonth,year:inYear})),
    total,
  }
}



type UserObject = Record<string,{total:number, email:string}>
 

export const getDayReport = async (inDay:string,inMonth:number,inYear:string) => {
  const {comments,pays} = await getCachePays(inMonth,+inYear) 
  
  if( pays.length === 0) return {
      pays: [],
      comment: '',
      idComment: 0,
      total: 0,
      totalPerUser: []
    }
  
  const compareDate = `${inYear}-${format0(+inMonth+1)}-${format0(+inDay)}`
  const transformDate = (date:Date) => date.toISOString().slice(0,16).split('T')

  const ans = []
  const users:UserObject = {}
  
  let total = 0
  for(let pay of pays){
    const {date} = pay
    const [dateString, hour] = transformDate(date)
    if( dateString !== compareDate ) continue;

    const { mount,startDayDate, endDayDate,id, userId, ...restPayInfo } = pay

    let email = ''
    const user = users[userId]
    if( user ){
      email = user.email
      user.total += mount 
    }else{
      const userEmail = await getUserEmail(userId)
      users[userId] = {email: userEmail, total: mount}
      email = userEmail
    }
    total += mount
    ans.push({...restPayInfo, hour,mount,email})
  }

  const commentFiltered = comments.filter( comment => transformDate(comment.date)[0] === compareDate )



  const [dayComment,idComment] = commentFiltered.length === 0 
    ? ['', 0] 
    : [commentFiltered[0].comment,commentFiltered[0].id]
  
  return {
    pays: ans,
    comment: dayComment,
    idComment,
    total,
    totalPerUser: Object.values(users)
  }
}



export const updateComment = async (inIdComment:number,inComment:string,inDate:string) => {
  await prisma.dayComment.upsert({
    where: { id: inIdComment || 0},
    update:{ comment: inComment },
    create:{ comment: inComment, date: new Date(inDate)}
  })

  const [year,month] = inDate.split('-')

  updateTag(tagCachePays+String(+month-1)+year)
}