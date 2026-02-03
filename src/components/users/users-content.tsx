import React from 'react'
import { PageContent, TableApp, TableFooter, TableHeader, TableRow } from '../general'
import { UserTableRow } from './user-table-row';
import { NewUser } from './new-user';
import { DisableUser } from './disabled-user';

const users = [
  {
    name: "Carlos",
    lastName: "Mendoza",
    userName: "carlos_dev",
    active: true
  },
  {
    name: "Ana",
    lastName: "Rodríguez",
    userName: "ana.admin",
    active: true
  },
  {
    name: "Luis",
    lastName: "García",
    userName: "luis_staff",
    active: false
  },
  {
    name: "Elena",
    lastName: "Pérez",
    userName: "elena_view",
    active: true
  },
  {
    name: "Roberto",
    lastName: "Sánchez",
    userName: "robert_s",
    active: true
  },
  {
    name: "Sofía",
    lastName: "López",
    userName: "sofi_muebles",
    active: false
  },
  {
    name: "Miguel",
    lastName: "Torres",
    userName: "mike_t",
    active: true
  },
  {
    name: "Laura",
    lastName: "Vargas",
    userName: "laura_v",
    active: true
  },
  {
    name: "Diego",
    lastName: "Castro",
    userName: "diego_c",
    active: false
  },
  {
    name: "Lucía",
    lastName: "Ramos",
    userName: "lucia.r",
    active: true
  }
];

export const UsersContent = () => {
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
          users.map((el,ix) => <UserTableRow key={'user_info_row'+ix} {...el}/>)
        }

      </TableApp>

      <NewUser/>
      
    </PageContent>
  )
}
