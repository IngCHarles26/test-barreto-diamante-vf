import { InputApp } from "@/components";
import { RoomMap } from "@/components/room-map/room-map";
import { FaAd, FaAdjust } from "react-icons/fa";

export default function DashPage() {
  return (
    <div className="w-full h-full bg-white grid grid-cols-2 md:grid-cols-6 gap-3 px-3 items-center">

      <InputApp
        Icon={FaAd}
        label="Texto"
        inputId="prueba-text"
        type="text"
        placeHolder="Ejemplo Texto"
      />

      <InputApp
        Icon={FaAd}
        label="Numero"
        inputId="prueba-number"
        type="number"
        placeHolder="Ejemplo Numero"
      />

      <InputApp
        Icon={FaAdjust }
        label="Fecha Corta"
        inputId="prueba-date"
        type="date"
      />

      <InputApp
        Icon={FaAd}
        label="Fecha larga"
        inputId="prueba-datelocal"
        type="datetime-local"
      />

      <InputApp
        Icon={FaAd}
        label="Select"
        inputId="prueba-select"
        type="select"
        className="col-span-2"
        selectData={['prueba1','prueba3','prueba2',]}
      />
      
    </div>
  );
}
