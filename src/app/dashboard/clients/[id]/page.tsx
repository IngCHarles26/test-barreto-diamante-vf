import { ClientDetailContent, PageTitle } from "@/components";
import clsx from "clsx";
import { FaBan, FaCheckCircle } from "react-icons/fa";

interface Props {
  params:Promise<{id:number}>,
}

export default async function ClientIdPage({params}:Props) {
  const {id} = await params
  const banned = id%2
  
  return (
    <div className="h-full w-full flex flex-col">
      
      <PageTitle 
        title="Informacion de cliente"
        children={
          <button popoverTarget="confirm-user-ban" 
            className={clsx(
              'py-2 px-3 ml-auto mt-auto rounded-md cursor-pointer hover:opacity-80 text-white gap-2 items-center  hidden md:flex text-2xl',
              banned ? 'bg-primary/20' : 'bg-red-01/20')}
          >
            { banned ? <> <FaCheckCircle/> Desbloquear </>:<> <FaBan/> Betar</>}
          </button>
          }
      />

      <ClientDetailContent id={id}/>
      
    </div>
  );
}