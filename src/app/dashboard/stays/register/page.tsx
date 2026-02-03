import {  PageContent, PageTitle, RoomMap, StayRegisterContent } from "@/components";

export default function RegisterPage() {
  return (
    <div className="h-full w-full flex flex-col">
          
      <PageTitle 
        title="Registro de Estadia"
        subTitle="Administra las estadias de las habitaciones ocupadas actualmente"
      />

      <PageContent>
        <div className="w-full h-full flex flex-col lg:flex-row pb-5 gap-3 md:gap-5 items-center">

          <RoomMap/>

          <StayRegisterContent/>

        </div>
      </PageContent>
      
    </div>
  );
}