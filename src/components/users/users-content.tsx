import React from 'react'
import { PageContent, TableFooter, TableHeader, TableRow } from '../general'
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
    <PageContent maxWRem={50}>
     
      <div className='flex-1'>

        <TableHeader>
          <p className='w-[25%]'>Apellidos</p>
          <p className='w-[25%]'>Nombres</p>
          <p className='w-[20%]'>Usuario</p>
          <p className='w-[15%]'>Activo</p>
          <p className='w-[10%]'><span className="hidden md:inline">Desactivar</span></p>
        </TableHeader>

        {
          users.map((el,ix) => <UserTableRow key={'user_info_row'+ix} {...el}/>)
        }

        <TableFooter/>

      </div>

      <NewUser/>
      <DisableUser banned={false}/>
      
    </PageContent>
  )
}
