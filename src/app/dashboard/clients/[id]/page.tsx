import { ClientDetailContent, PageTitle } from "@/components";

interface Props {
  params:Promise<{id:number}>,
}

export default async function ClientIdPage({params}:Props) {
  const {id} = await params
  
  return (
    <div className="h-full w-full flex flex-col">
      
      <PageTitle title="Informacion de cliente"/>

      <section className="flex-1 ">
        
        <ClientDetailContent id={id}/>
        
      </section>
      
    </div>
  );
}