import { Room, RoomActive } from "@/generated/prisma/client";
import { auth, prisma } from "@/lib";
import { NextResponse } from "next/server";


const seedUsers = [
  {
    name:'Isela',
    lastName: 'Llerena',
    email: 'IselLlere@gmail.com',
    password: 'IselLlere1@',
  },
  {
    name:'Carlos',
    lastName: 'Condori',
    email: 'cahecova@gmail.com',
    password: 'Car$Con1',
  },
  {
    name:'Julio',
    lastName: 'Condori',
    email: 'julcondo@gmail.com',
    password: 'Ju!C@nd@',
  },
  {
    name:'Katherine',
    lastName: 'Condori',
    email: 'kathe.thuru@gmail.com',
    password: 'K@ther!ne1',
  },
]

// Personal 45             103(ban) 201 202(ban) 208 301 302 308
// Doble 65                104 203 303
// Doble Familiar 75       207 
// Matrimonial 60          101 102 204 205 304(ban) 305 307 
// Matrimonial Simple 50   105 106
// Triple Familiar 100     206 306


const seedRooms:Room[] = [
  // Personal
  { number: 103, type: "Personal", active: false, floor: 1, posW: null, posH: null, price: 45 },
  { number: 201, type: "Personal", active: true, floor: 2, posW: null, posH: null, price: 45 },
  { number: 202, type: "Personal", active: false, floor: 2, posW: null, posH: null, price: 45 },
  { number: 208, type: "Personal", active: true, floor: 2, posW: null, posH: null, price: 45 },
  { number: 301, type: "Personal", active: true, floor: 3, posW: null, posH: null, price: 45 },
  { number: 302, type: "Personal", active: true, floor: 3, posW: null, posH: null, price: 45 },
  { number: 308, type: "Personal", active: true, floor: 3, posW: null, posH: null, price: 45 },

  // Doble
  { number: 104, type: "Doble", active: true, floor: 1, posW: null, posH: null, price: 65 },
  { number: 203, type: "Doble", active: true, floor: 2, posW: null, posH: null, price: 65 },
  { number: 303, type: "Doble", active: true, floor: 3, posW: null, posH: null, price: 65 },

  // Doble Familiar
  { number: 207, type: "Doble_Familiar", active: true, floor: 2, posW: null, posH: null, price: 75 },

  // Matrimonial
  { number: 101, type: "Matrimonial", active: true, floor: 1, posW: null, posH: null, price: 60 },
  { number: 102, type: "Matrimonial", active: true, floor: 1, posW: null, posH: null, price: 60 },
  { number: 204, type: "Matrimonial", active: true, floor: 2, posW: null, posH: null, price: 60 },
  { number: 205, type: "Matrimonial", active: true, floor: 2, posW: null, posH: null, price: 60 },
  { number: 304, type: "Matrimonial", active: false, floor: 3, posW: null, posH: null, price: 60 },
  { number: 305, type: "Matrimonial", active: true, floor: 3, posW: null, posH: null, price: 60 },
  { number: 307, type: "Matrimonial", active: true, floor: 3, posW: null, posH: null, price: 60 },

  // Matrimonial Simple
  { number: 105, type: "Matrimonial_Simple", active: true, floor: 1, posW: null, posH: null, price: 50 },
  { number: 106, type: "Matrimonial_Simple", active: true, floor: 1, posW: null, posH: null, price: 50 },

  // Triple Familiar
  { number: 206, type: "Triple_Familiar", active: true, floor: 2, posW: null, posH: null, price: 100 },
  { number: 306, type: "Triple_Familiar", active: true, floor: 3, posW: null, posH: null, price: 100 }
];


const seedRoomActives=  [
  // --- PISO 1 ---
  { roomNumber: 101, active: true, dateCreated: new Date(), description: "Cama Matrimonial con cabecera de madera" },
  { roomNumber: 101, active: true, dateCreated: new Date(), description: "Televisor Samsung 43 pulgadas con soporte" },
  { roomNumber: 101, active: true, dateCreated: new Date(), description: "Frigobar Miray 90L" },
  
  { roomNumber: 102, active: true, dateCreated: new Date(), description: "Cama Matrimonial con base metálica" },
  { roomNumber: 102, active: true, dateCreated: new Date(), description: "Ropero de cedro de dos cuerpos" },

  { roomNumber: 103, active: false, dateCreated: new Date(), description: "Cama Personal simple con colchón de espuma" },

  { roomNumber: 104, active: true, dateCreated: new Date(), description: "Dos camas individuales de plaza y media" },
  { roomNumber: 104, active: true, dateCreated: new Date(), description: "Mesa de noche de melamina color nogal" },
  { roomNumber: 104, active: true, dateCreated: new Date(), description: "Silla de madera barnizada" },
  { roomNumber: 104, active: true, dateCreated: new Date(), description: "Espejo de pared de cuerpo entero" },

  { roomNumber: 105, active: true, dateCreated: new Date(), description: "Cama Matrimonial Simple con sábanas blancas" },
  { roomNumber: 105, active: true, dateCreated: new Date(), description: "Ventilador de torre silencioso" },

  { roomNumber: 106, active: true, dateCreated: new Date(), description: "Cama Matrimonial Simple" },

  // --- PISO 2 ---
  { roomNumber: 201, active: true, dateCreated: new Date(), description: "Cama Personal con colchón Paraíso" },
  { roomNumber: 201, active: true, dateCreated: new Date(), description: "Escritorio pequeño para laptop" },

  { roomNumber: 202, active: false, dateCreated: new Date(), description: "Cama Personal en proceso de reparación" },

  { roomNumber: 203, active: true, dateCreated: new Date(), description: "Juego de dos camas de plaza y media" },
  { roomNumber: 203, active: true, dateCreated: new Date(), description: "Televisor LG de 32 pulgadas" },

  { roomNumber: 204, active: true, dateCreated: new Date(), description: "Cama Matrimonial King Size con protector" },
  { roomNumber: 204, active: true, dateCreated: new Date(), description: "Sillón individual tapizado en color gris" },
  { roomNumber: 204, active: true, dateCreated: new Date(), description: "Lámpara de pie con luz cálida" },

  { roomNumber: 205, active: true, dateCreated: new Date(), description: "Cama Matrimonial Queen" },
  { roomNumber: 205, active: true, dateCreated: new Date(), description: "Estante metálico para maletas" },

  { roomNumber: 206, active: true, dateCreated: new Date(), description: "Tres camas individuales de una plaza" },
  { roomNumber: 206, active: true, dateCreated: new Date(), description: "Mesa de centro circular de madera" },
  { roomNumber: 206, active: true, dateCreated: new Date(), description: "Cuadro decorativo de paisaje andino" },
  { roomNumber: 206, active: true, dateCreated: new Date(), description: "Aire acondicionado tipo Split" },

  { roomNumber: 207, active: true, dateCreated: new Date(), description: "Dos camas dobles de tamaño familiar" },
  { roomNumber: 207, active: true, dateCreated: new Date(), description: "Caja fuerte digital empotrada" },

  { roomNumber: 208, active: true, dateCreated: new Date(), description: "Cama Personal básica" },

  // --- PISO 3 ---
  { roomNumber: 301, active: true, dateCreated: new Date(), description: "Cama Personal estándar" },
  { roomNumber: 302, active: true, dateCreated: new Date(), description: "Cama Personal estándar" },
  
  { roomNumber: 303, active: true, dateCreated: new Date(), description: "Par de camas dobles" },
  { roomNumber: 303, active: true, dateCreated: new Date(), description: "Teléfono fijo para comunicación interna" },

  { roomNumber: 304, active: false, dateCreated: new Date(), description: "Cama Matrimonial fuera de servicio" },

  { roomNumber: 305, active: true, dateCreated: new Date(), description: "Cama Matrimonial Premium" },
  { roomNumber: 305, active: true, dateCreated: new Date(), description: "Alfombra decorativa de lana" },

  { roomNumber: 306, active: true, dateCreated: new Date(), description: "Tres camas individuales" },
  { roomNumber: 306, active: true, dateCreated: new Date(), description: "Horno microondas pequeño" },

  { roomNumber: 307, active: true, dateCreated: new Date(), description: "Cama Matrimonial con vista exterior" },
  { roomNumber: 307, active: true, dateCreated: new Date(), description: "Hervidor eléctrico de acero inoxidable" },

  { roomNumber: 308, active: true, dateCreated: new Date(), description: "Cama Personal básica" }
];


export async function GET(){

  try{

    if( process.env.NODE_ENV === 'production')
      return NextResponse.json({message: 'Ups! This cant works in production' }, {status:400});

    const adminIds = (process.env.ADMIN_IDS || '').split(',')


    // ! Users Creation 
    
    // Delete all users that not listed in .env file 
    await prisma.account.deleteMany({where:{
      userId:{notIn: adminIds}
    }})
    await prisma.session.deleteMany({where:{
      userId:{notIn: adminIds}
    }})
    await prisma.user.deleteMany({where:{
      id:{notIn: adminIds}
    }})

    await Promise.all( // Para seeds de mas de 20, se debe usar un bucle for
      seedUsers.map( ({lastName,...user}) => auth.api.createUser({
        body:{
          ...user,
          role: 'user',
          data:{
            lastName
          }
        }
      }))
    )

    // ! Rooms Creation

    await prisma.room.deleteMany()
    await prisma.room.createMany({
      data: seedRooms
    })

    // ! Rooms Creation

    await prisma.roomActive.deleteMany()
    await prisma.roomActive.createMany({
      data: seedRoomActives
    })


    

    return NextResponse.json({message: 'Seed created succesfully'})

  }catch(err){

    return NextResponse.json(err,{status:400})

  }
}
