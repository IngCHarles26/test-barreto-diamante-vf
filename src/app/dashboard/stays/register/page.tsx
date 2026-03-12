import { PageContent, PageTitle, RoomMap, StayRegisterContent } from "@/components";
import { ActionGetFloors, getCacheCountries } from "@/lib/server";

export default async function RegisterPage() {

  const floors = await ActionGetFloors()
  const countries = await getCacheCountries()
  // TODO: Hacer la peticiond e las estadias activas

  return (
    <div className="h-full w-full flex flex-col">
          
      <PageTitle 
        title="Registro de Estadia"
        subTitle="Administra las estadias de las habitaciones ocupadas actualmente"
      />

      <PageContent>
        <div className="w-full h-full flex flex-col lg:flex-row pb-5 gap-3">

          <RoomMap floors={floors} />

          <StayRegisterContent countries={countries} />

        </div>
      </PageContent>
      
    </div>
  );
}