import { auth, prisma } from "@/lib/server";
import { NextResponse } from "next/server";


const seedUsers = [
  {
    name:'Isela',
    lastName: 'Llerena',
    email: 'IselLlere@gmail.com',
    password: 'IselLlere1@',
  },
  {
    name:'Carlos',
    lastName: 'Condori',
    email: 'cahecova@gmail.com',
    password: 'Car$Con1',
  },
  {
    name:'Julio',
    lastName: 'Condori',
    email: 'julcondo@gmail.com',
    password: 'Ju!C@nd@',
  },
  {
    name:'Katherine',
    lastName: 'Condori',
    email: 'kathe.thuru@gmail.com',
    password: 'K@ther!ne1',
  },
]



export async function GET(request:Request){

  try{
    if( process.env.NODE_ENV === 'production')
      return NextResponse.json({message: 'Ups! This cant works in production' }, {status:400});

    const adminIds = (process.env.ADMIN_IDS || '').split(',')

    console.log(adminIds)

    await prisma.account.deleteMany({where:{
      userId:{notIn: adminIds}
    }})

    await prisma.session.deleteMany({where:{
      userId:{notIn: adminIds}
    }})

    await prisma.user.deleteMany({where:{
      id:{notIn: adminIds}
    }})


    // Para seeds de mas de 20, se debe usar un bucle for
    await Promise.all(
      seedUsers.map( ({lastName,...user}) => auth.api.createUser({
        body:{
          ...user,
          role: 'user',
          data:{
            lastName
          }
        }
      }))
    )


    return NextResponse.json({message: 'Seed created succesfully'})

  }catch(err){

    return NextResponse.json(err,{status:400})

  }
}
