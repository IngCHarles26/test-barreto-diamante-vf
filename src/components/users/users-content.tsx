import React from 'react'
import { PageContent, TableApp, TableFooter, TableHeader, TableRow } from '../general'
import { UserTableRow } from './user-table-row';
import { NewUser } from './new-user';
import { headers } from 'next/headers';
import { auth } from '@/lib/auth';

export const UsersContent = async () => {

  const {users} = await auth.api.listUsers({
    query:{
      sortBy: 'lastName'
    },
    headers: await headers()
  })

  const adminList = (process.env.ADMIN_IDS || '').split(",")

  const usersChang = users.filter( user => user.role === 'user' && !adminList?.includes(user.id))
  //@ts-ignore
                          .map( ({name,email,banned,id,lastName}) => ({
                            id,name,email,banned,lastName
                          }))
  
  return (
    <PageContent>
     
      <TableApp>

        <TableHeader>
          <p className='w-[20%]'>Apellidos</p>
          <p className='w-[20%]'>Nombres</p>
          <p className='w-[30%]'>Usuario</p>
          <p className='w-[15%] text-center'>Activo</p>
          <p className='w-[15%] text-center'><span className="hidden md:inline">Clave</span></p>
        </TableHeader>

        {
          usersChang.map((el,ix) => <UserTableRow key={'user_info_row'+ix} {...el}/>)
        }

      </TableApp>

      <NewUser/>
      
    </PageContent>
  )
}
