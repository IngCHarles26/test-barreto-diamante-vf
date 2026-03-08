import { FaPlus } from "react-icons/fa";
import { HeaderButton } from "../general";
import { NewActive } from "./new-active";

interface Props{
  rooms:number[]
}

export async function CreateRoomActive({rooms}:Props) {

  return (
    <>
      <HeaderButton 
        target="form-create-active" Icon={FaPlus} textMobile="Nuevo" textDesktop="Activo" 
      />

      <NewActive rooms={rooms}/>
    </>
  );
}