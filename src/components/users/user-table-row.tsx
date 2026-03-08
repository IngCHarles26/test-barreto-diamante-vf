import { TableRow } from '../general'
import { FaCheck } from 'react-icons/fa'
import { IoLockClosed } from 'react-icons/io5'
import { DisableUser } from './disabled-user'
import { MdKey } from 'react-icons/md'
import { ResetPasswordUser } from './reset-password-user'
import { User } from '@/generated/prisma/client'

interface Props{
  user:User
}

export const UserTableRow = ({user}:Props) => {

  const {banned,name,lastName,email,id} = user

  const fullName = name+' '+lastName
  
  return (
    <TableRow>
      <p className='w-[20%] text-lg md:text-2xl'>{name}</p>

      <p className='w-[20%] text-lg md:text-2xl'>{lastName}</p>

      <p className='w-[30%] text-lg md:text-2xl font-code'>{email}</p>

      <DisableUser name={fullName} userId={id} banned={banned} dialogId={'disable-user'+id} />

      <ResetPasswordUser name={fullName} userId={id} dialogId={'edit-password-user'+id}/>

    </TableRow>
  )
}
