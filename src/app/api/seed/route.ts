import { Client, Room, RoomActive } from "@/generated/prisma/client";
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
  { room: 101, active: true, dateCreated: new Date(), description: "Cama Matrimonial con cabecera de madera" },
  { room: 101, active: true, dateCreated: new Date(), description: "Televisor Samsung 43 pulgadas con soporte" },
  { room: 101, active: true, dateCreated: new Date(), description: "Frigobar Miray 90L" },
  
  { room: 102, active: true, dateCreated: new Date(), description: "Cama Matrimonial con base metálica" },
  { room: 102, active: true, dateCreated: new Date(), description: "Ropero de cedro de dos cuerpos" },

  { room: 103, active: false, dateCreated: new Date(), description: "Cama Personal simple con colchón de espuma" },

  { room: 104, active: true, dateCreated: new Date(), description: "Dos camas individuales de plaza y media" },
  { room: 104, active: true, dateCreated: new Date(), description: "Mesa de noche de melamina color nogal" },
  { room: 104, active: true, dateCreated: new Date(), description: "Silla de madera barnizada" },
  { room: 104, active: true, dateCreated: new Date(), description: "Espejo de pared de cuerpo entero" },

  { room: 105, active: true, dateCreated: new Date(), description: "Cama Matrimonial Simple con sábanas blancas" },
  { room: 105, active: true, dateCreated: new Date(), description: "Ventilador de torre silencioso" },

  { room: 106, active: true, dateCreated: new Date(), description: "Cama Matrimonial Simple" },

  // --- PISO 2 ---
  { room: 201, active: true, dateCreated: new Date(), description: "Cama Personal con colchón Paraíso" },
  { room: 201, active: true, dateCreated: new Date(), description: "Escritorio pequeño para laptop" },

  { room: 202, active: false, dateCreated: new Date(), description: "Cama Personal en proceso de reparación" },

  { room: 203, active: true, dateCreated: new Date(), description: "Juego de dos camas de plaza y media" },
  { room: 203, active: true, dateCreated: new Date(), description: "Televisor LG de 32 pulgadas" },

  { room: 204, active: true, dateCreated: new Date(), description: "Cama Matrimonial King Size con protector" },
  { room: 204, active: true, dateCreated: new Date(), description: "Sillón individual tapizado en color gris" },
  { room: 204, active: true, dateCreated: new Date(), description: "Lámpara de pie con luz cálida" },

  { room: 205, active: true, dateCreated: new Date(), description: "Cama Matrimonial Queen" },
  { room: 205, active: true, dateCreated: new Date(), description: "Estante metálico para maletas" },

  { room: 206, active: true, dateCreated: new Date(), description: "Tres camas individuales de una plaza" },
  { room: 206, active: true, dateCreated: new Date(), description: "Mesa de centro circular de madera" },
  { room: 206, active: true, dateCreated: new Date(), description: "Cuadro decorativo de paisaje andino" },
  { room: 206, active: true, dateCreated: new Date(), description: "Aire acondicionado tipo Split" },

  { room: 207, active: true, dateCreated: new Date(), description: "Dos camas dobles de tamaño familiar" },
  { room: 207, active: true, dateCreated: new Date(), description: "Caja fuerte digital empotrada" },

  { room: 208, active: true, dateCreated: new Date(), description: "Cama Personal básica" },

  // --- PISO 3 ---
  { room: 301, active: true, dateCreated: new Date(), description: "Cama Personal estándar" },
  { room: 302, active: true, dateCreated: new Date(), description: "Cama Personal estándar" },
  
  { room: 303, active: true, dateCreated: new Date(), description: "Par de camas dobles" },
  { room: 303, active: true, dateCreated: new Date(), description: "Teléfono fijo para comunicación interna" },

  { room: 304, active: false, dateCreated: new Date(), description: "Cama Matrimonial fuera de servicio" },

  { room: 305, active: true, dateCreated: new Date(), description: "Cama Matrimonial Premium" },
  { room: 305, active: true, dateCreated: new Date(), description: "Alfombra decorativa de lana" },

  { room: 306, active: true, dateCreated: new Date(), description: "Tres camas individuales" },
  { room: 306, active: true, dateCreated: new Date(), description: "Horno microondas pequeño" },

  { room: 307, active: true, dateCreated: new Date(), description: "Cama Matrimonial con vista exterior" },
  { room: 307, active: true, dateCreated: new Date(), description: "Hervidor eléctrico de acero inoxidable" },

  { room: 308, active: true, dateCreated: new Date(), description: "Cama Personal básica" }
];


const seedCountries = [
  { id: "CL", flag: "🇨🇱", name: "Chile" },
  { id: "US", flag: "🇺🇸", name: "Estados Unidos" },
  { id: "EC", flag: "🇪🇨", name: "Ecuador" },
  { id: "BO", flag: "🇧🇴", name: "Bolivia" },
  { id: "BR", flag: "🇧🇷", name: "Brasil" },
  { id: "CO", flag: "🇨🇴", name: "Colombia" },
  { id: "ES", flag: "🇪🇸", name: "España" },
  { id: "AR", flag: "🇦🇷", name: "Argentina" },
  { id: "MX", flag: "🇲🇽", name: "Mexico" },
  { id: "FR", flag: "🇫🇷", name: "Francia" },
  { id: "DE", flag: "🇩🇪", name: "Alemania" },
  { id: "CA", flag: "🇨🇦", name: "Canada" },
  { id: "PE", flag: "🇵🇪", name: "Peru" },
];

const seedCities = [
  { name: "Amazonas", countryId: "PE" },
  { name: "Arequipa", countryId: "PE" },
  { name: "Ayacucho", countryId: "PE" },
  { name: "Cajamarca", countryId: "PE" },
  { name: "Callao", countryId: "PE" },
  { name: "Cusco", countryId: "PE" },
  { name: "Huancavelica", countryId: "PE" },
  { name: "Ica", countryId: "PE" },
  { name: "La Libertad", countryId: "PE" },
  { name: "Lambayeque", countryId: "PE" },
  { name: "Lima", countryId: "PE" },
  { name: "Loreto", countryId: "PE" },
  { name: "Madre de Dios", countryId: "PE" },
  { name: "Moquegua", countryId: "PE" },
  { name: "Pasco", countryId: "PE" },
  { name: "Piura", countryId: "PE" },
  { name: "Puno", countryId: "PE" },
  { name: "Tacna", countryId: "PE" },
  { name: "Tumbes", countryId: "PE" },
  { name: "Ucayali", countryId: "PE" },

  { name: "Arica", countryId: "CL" },
  { name: "Iquique", countryId: "CL" },
  { name: "Santiago", countryId: "CL" },

  { name: "Guayaquil", countryId: "EC" },
  { name: "Quito", countryId: "EC" },

  { name: "Copacabana", countryId: "BO" },
  { name: "La Paz", countryId: "BO" },
  { name: "Santa Cruz", countryId: "BO" },

  { name: "Leticia", countryId: "CO" }
];

const seedClients: Omit<Client, 'id'>[] = [
  { typeDocument: "DNI", numberDocument: "71799919", firstName: "carlos", lastName: "condori", countryId: "PE", stars: 4.5, totalStays: 2, lastStay: new Date("2026-01-10"), address: "Psj Federico Barreto 370", phone: "936664619", comments: "", born: new Date("1995-10-26"), banned: true, banReason: "Se meo en la cama y la almohada" },
  { typeDocument: "DNI", numberDocument: "60708011", firstName: "mateo", lastName: "quispe", countryId: "PE", stars: 4.5, totalStays: 2, lastStay: new Date("2026-01-10"), address: "Calle Loreto 456", phone: "987654321", comments: "Viaja con sus padres", born: new Date("2012-05-20"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "55443322", firstName: "valentina", lastName: "soto", countryId: "CL", stars: 0.0, totalStays: 1, lastStay: new Date("2025-11-15"), address: null, phone: null, comments: null, born: new Date("2015-08-12"), banned: false, banReason: null },
  { typeDocument: "Pasaporte", numberDocument: "G99887766", firstName: "liam", lastName: "miller", countryId: "US", stars: 3.2, totalStays: 1, lastStay: new Date("2026-02-05"), address: null, phone: null, comments: "Requiere cuna", born: new Date("2024-01-30"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "11224455", firstName: "thiago", lastName: "messi", countryId: "AR", stars: 5.0, totalStays: 4, lastStay: new Date("2026-03-01"), address: "Rosario 10", phone: "1122334455", comments: null, born: new Date("2012-11-02"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "33442211", firstName: "sofia", lastName: "loren", countryId: "ES", stars: 4.8, totalStays: 2, lastStay: new Date("2025-12-20"), address: "Madrid Central", phone: "611223344", comments: null, born: new Date("2010-04-15"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "77889900", firstName: "lucas", lastName: "neto", countryId: "BR", stars: 2.5, totalStays: 1, lastStay: new Date("2026-01-20"), address: null, phone: null, comments: "Fan de los videojuegos", born: new Date("2014-07-22"), banned: false, banReason: null },
  { typeDocument: "Pasaporte", numberDocument: "H12345678", firstName: "chloe", lastName: "dupont", countryId: "FR", stars: 0.0, totalStays: 0, lastStay: null, address: null, phone: null, comments: null, born: new Date("2021-09-10"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "44556611", firstName: "isabella", lastName: "castillo", countryId: "CO", stars: 3.9, totalStays: 2, lastStay: new Date("2025-10-30"), address: "Bogotá", phone: "310998877", comments: null, born: new Date("2011-12-05"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "99001188", firstName: "sebastian", lastName: "vettel", countryId: "DE", stars: 4.2, totalStays: 3, lastStay: new Date("2026-02-14"), address: null, phone: null, comments: "Menor acompañado", born: new Date("2009-03-14"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "22331144", firstName: "martina", lastName: "stoessel", countryId: "AR", stars: 5.0, totalStays: 5, lastStay: new Date("2026-03-05"), address: null, phone: null, comments: "VIP Junior", born: new Date("2013-05-21"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "88771122", firstName: "joaquin", lastName: "sabina", countryId: "ES", stars: 1.5, totalStays: 1, lastStay: new Date("2025-08-10"), address: null, phone: null, comments: null, born: new Date("2016-10-12"), banned: false, banReason: null },
  { typeDocument: "Pasaporte", numberDocument: "K77665544", firstName: "oliver", lastName: "twist", countryId: "CA", stars: 0.0, totalStays: 1, lastStay: new Date("2026-01-05"), address: null, phone: null, comments: "Pidió más comida", born: new Date("2017-02-18"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "33119988", firstName: "antonella", lastName: "roccuzzo", countryId: "AR", stars: 4.7, totalStays: 2, lastStay: new Date("2026-02-28"), address: null, phone: "1199887766", comments: null, born: new Date("2010-06-25"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "44992233", firstName: "gabriel", lastName: "garcia", countryId: "MX", stars: 3.1, totalStays: 1, lastStay: new Date("2025-11-11"), address: null, phone: null, comments: null, born: new Date("2014-03-06"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "55110022", firstName: "florencia", lastName: "bermudez", countryId: "EC", stars: 2.8, totalStays: 1, lastStay: new Date("2026-01-15"), address: "Guayaquil", phone: null, comments: null, born: new Date("2012-08-30"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "10204050", firstName: "benjamin", lastName: "vicuña", countryId: "CL", stars: 3.5, totalStays: 3, lastStay: new Date("2026-02-20"), address: null, phone: null, comments: "Hijo de cliente frecuente", born: new Date("2011-01-12"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "90807060", firstName: "luna", lastName: "bella", countryId: "BO", stars: 4.0, totalStays: 1, lastStay: new Date("2025-09-05"), address: null, phone: "72233445", comments: null, born: new Date("2018-11-20"), banned: false, banReason: null },
  { typeDocument: "Pasaporte", numberDocument: "L33445566", firstName: "noah", lastName: "schnapp", countryId: "US", stars: 4.3, totalStays: 2, lastStay: new Date("2026-03-01"), address: null, phone: null, comments: null, born: new Date("2009-10-03"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "77661100", firstName: "macaulay", lastName: "culkin", countryId: "US", stars: 1.0, totalStays: 1, lastStay: new Date("2025-12-24"), address: "Chicago", phone: null, comments: "Se quedó solo en casa", born: new Date("2015-08-26"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "12332144", firstName: "pablito", lastName: "ruiz", countryId: "PE", stars: 3.4, totalStays: 2, lastStay: new Date("2026-02-15"), address: "Arequipa", phone: "955443322", comments: "Acompañante menor", born: new Date("2013-12-12"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "10203040", firstName: "juan", lastName: "perez", countryId: "PE", stars: 5.0, totalStays: 3, lastStay: new Date("2025-12-20"), address: "Av. Ejercito 123", phone: "958473625", comments: "Cliente frecuente", born: new Date("1985-05-15"), banned: false, banReason: null },
  { typeDocument: "Pasaporte", numberDocument: "A98765432", firstName: "john", lastName: "smith", countryId: "US", stars: 0.0, totalStays: 1, lastStay: new Date("2026-01-15"), address: null, phone: null, comments: null, born: new Date("1992-08-22"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "20304050", firstName: "maria", lastName: "garcia", countryId: "ES", stars: 4.2, totalStays: 2, lastStay: new Date("2025-11-10"), address: "Calle Mayor 45", phone: "600123456", comments: null, born: new Date("1978-03-10"), banned: false, banReason: null },
  { typeDocument: "Carnet_Extranjeria", numberDocument: "001234567", firstName: "hans", lastName: "muller", countryId: "DE", stars: 0.0, totalStays: 0, lastStay: null, address: null, phone: null, comments: "Solicitó habitación en piso alto", born: new Date("1988-11-30"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "30405060", firstName: "carlos", lastName: "rodriguez", countryId: "AR", stars: 2.5, totalStays: 5, lastStay: new Date("2026-02-01"), address: "Av. Corrientes 800", phone: "114567890", comments: null, born: new Date("1975-07-04"), banned: true, banReason: "Daños en mobiliario" },
  { typeDocument: "DNI", numberDocument: "40506070", firstName: "lucia", lastName: "fernandez", countryId: "CL", stars: 3.8, totalStays: 2, lastStay: new Date("2025-09-12"), address: null, phone: "912345678", comments: null, born: new Date("1995-12-12"), banned: false, banReason: null },
  { typeDocument: "Pasaporte", numberDocument: "F55443322", firstName: "pierre", lastName: "dubois", countryId: "FR", stars: 0.0, totalStays: 1, lastStay: new Date("2026-03-01"), address: null, phone: null, comments: "Habla poco español", born: new Date("1982-01-25"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "50607080", firstName: "ana", lastName: "silva", countryId: "BR", stars: 4.9, totalStays: 4, lastStay: new Date("2025-12-30"), address: "Rua Augusta 100", phone: null, comments: null, born: new Date("1990-04-18"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "60708090", firstName: "luis", lastName: "torres", countryId: "MX", stars: 1.2, totalStays: 1, lastStay: new Date("2026-01-20"), address: null, phone: "551234567", comments: null, born: new Date("1980-09-30"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "70809010", firstName: "elena", lastName: "mendoza", countryId: "CO", stars: 3.5, totalStays: 2, lastStay: new Date("2025-10-15"), address: "Carrera 7 40", phone: null, comments: "Alergia a las plumas", born: new Date("1987-06-14"), banned: false, banReason: null },
  { typeDocument: "Pasaporte", numberDocument: "C11223344", firstName: "robert", lastName: "wilson", countryId: "CA", stars: 0.0, totalStays: 0, lastStay: null, address: null, phone: null, comments: null, born: new Date("1970-10-05"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "80901020", firstName: "sofia", lastName: "vaca", countryId: "BO", stars: 2.1, totalStays: 1, lastStay: new Date("2025-08-22"), address: "Calle Libertad 12", phone: "71234567", comments: null, born: new Date("2000-02-29"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "90102030", firstName: "ricardo", lastName: "paredes", countryId: "EC", stars: 0.0, totalStays: 3, lastStay: new Date("2026-02-14"), address: null, phone: null, comments: "Viaje de negocios", born: new Date("1993-11-14"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "11223344", firstName: "diego", lastName: "sanchez", countryId: "PE", stars: 4.7, totalStays: 6, lastStay: new Date("2026-03-05"), address: "Urb. Yanahuara G-5", phone: "944556677", comments: null, born: new Date("1984-03-25"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "99887766", firstName: "laura", lastName: "castro", countryId: "CO", stars: 0.0, totalStays: 0, lastStay: null, address: null, phone: null, comments: null, born: new Date("2004-01-10"), banned: false, banReason: null },
  { typeDocument: "Pasaporte", numberDocument: "B77665544", firstName: "yuki", lastName: "tanaka", countryId: "US", stars: 5.0, totalStays: 2, lastStay: new Date("2026-01-05"), address: null, phone: null, comments: "Requiere traductor", born: new Date("1996-02-12"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "55667788", firstName: "marcos", lastName: "lopez", countryId: "AR", stars: 3.2, totalStays: 4, lastStay: new Date("2025-12-15"), address: "Calle Florida 450", phone: "1155443322", comments: null, born: new Date("1989-07-20"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "44332211", firstName: "alessandro", lastName: "rossi", countryId: "ES", stars: 4.5, totalStays: 1, lastStay: new Date("2026-02-10"), address: null, phone: "3902123456", comments: "Amante del buen vino", born: new Date("1983-04-05"), banned: false, banReason: null },
  { typeDocument: "Pasaporte", numberDocument: "E99001122", firstName: "sarah", lastName: "connor", countryId: "US", stars: 2.8, totalStays: 2, lastStay: new Date("2025-11-20"), address: null, phone: null, comments: "Seguridad reforzada", born: new Date("1975-11-11"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "66778899", firstName: "gabriela", lastName: "mistral", countryId: "CL", stars: 4.1, totalStays: 3, lastStay: new Date("2026-01-30"), address: "Av. Vicuña Mackenna", phone: "988776655", comments: null, born: new Date("1998-05-30"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "12123434", firstName: "fernando", lastName: "alonso", countryId: "ES", stars: 5.0, totalStays: 10, lastStay: new Date("2026-03-01"), address: "Oviedo 33", phone: null, comments: "VIP", born: new Date("1981-07-29"), banned: false, banReason: null },
  { typeDocument: "Carnet_Extranjeria", numberDocument: "009988771", firstName: "vladimir", lastName: "ivanov", countryId: "DE", stars: 1.5, totalStays: 1, lastStay: new Date("2025-10-05"), address: null, phone: null, comments: null, born: new Date("1990-01-01"), banned: true, banReason: "Comportamiento agresivo" },
  { typeDocument: "DNI", numberDocument: "22334455", firstName: "camila", lastName: "vallejo", countryId: "CL", stars: 3.9, totalStays: 2, lastStay: new Date("2025-12-01"), address: null, phone: null, comments: null, born: new Date("1988-04-28"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "88776655", firstName: "miguel", lastName: "grau", countryId: "PE", stars: 5.0, totalStays: 100, lastStay: new Date("2026-03-08"), address: "Paita 456", phone: "999888777", comments: "Caballero de los mares", born: new Date("1834-07-27"), banned: false, banReason: null },
  { typeDocument: "Pasaporte", numberDocument: "G11224466", firstName: "emma", lastName: "watson", countryId: "CA", stars: 4.8, totalStays: 3, lastStay: new Date("2026-02-15"), address: null, phone: null, comments: null, born: new Date("1990-04-15"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "77664433", firstName: "javier", lastName: "milei", countryId: "AR", stars: 2.2, totalStays: 1, lastStay: new Date("2026-01-10"), address: null, phone: null, comments: "Pidió no ruidos", born: new Date("1970-10-22"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "33445566", firstName: "isabella", lastName: "rossellini", countryId: "FR", stars: 4.6, totalStays: 2, lastStay: new Date("2025-08-15"), address: null, phone: null, comments: null, born: new Date("1952-06-18"), banned: false, banReason: null },
  { typeDocument: "Pasaporte", numberDocument: "K00991122", firstName: "li", lastName: "wei", countryId: "US", stars: 3.4, totalStays: 5, lastStay: new Date("2026-02-28"), address: null, phone: "8613800001", comments: "Desayuno tradicional", born: new Date("1995-03-20"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "10109090", firstName: "esteban", lastName: "quito", countryId: "EC", stars: 1.0, totalStays: 1, lastStay: new Date("2025-07-20"), address: "Quito Central", phone: null, comments: "Queja por almohadas", born: new Date("1990-05-05"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "54546565", firstName: "andrea", lastName: "pirlo", countryId: "ES", stars: 4.9, totalStays: 4, lastStay: new Date("2026-03-02"), address: null, phone: null, comments: null, born: new Date("1979-05-19"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "67678989", firstName: "sofia", lastName: "vergara", countryId: "CO", stars: 4.3, totalStays: 6, lastStay: new Date("2026-01-12"), address: "Barranquilla", phone: null, comments: null, born: new Date("1972-07-10"), banned: false, banReason: null },
  { typeDocument: "Pasaporte", numberDocument: "M12348765", firstName: "hans", lastName: "zimmer", countryId: "DE", stars: 5.0, totalStays: 2, lastStay: new Date("2025-11-30"), address: null, phone: null, comments: "Habitación insonorizada", born: new Date("1957-09-12"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "45612378", firstName: "karina", lastName: "vargas", countryId: "PE", stars: 3.7, totalStays: 3, lastStay: new Date("2026-02-18"), address: "Miraflores 987", phone: "911223344", comments: null, born: new Date("1994-02-14"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "99008811", firstName: "roberto", lastName: "gomez", countryId: "MX", stars: 5.0, totalStays: 50, lastStay: new Date("2025-12-31"), address: "Vecindad 72", phone: null, comments: "No contaban con su astucia", born: new Date("1929-02-21"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "78123490", firstName: "lucas", lastName: "moura", countryId: "BR", stars: 2.9, totalStays: 2, lastStay: new Date("2026-01-05"), address: null, phone: null, comments: null, born: new Date("1992-08-13"), banned: false, banReason: null },
  { typeDocument: "Pasaporte", numberDocument: "P44556677", firstName: "clara", lastName: "oswald", countryId: "CA", stars: 4.0, totalStays: 1, lastStay: new Date("2025-09-10"), address: null, phone: null, comments: "Imposible de encontrar", born: new Date("1986-04-27"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "34901234", firstName: "martin", lastName: "vizcarra", countryId: "PE", stars: 1.8, totalStays: 4, lastStay: new Date("2026-02-20"), address: "Moquegua", phone: null, comments: null, born: new Date("1963-03-22"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "65432198", firstName: "elena", lastName: "papamichail", countryId: "ES", stars: 3.1, totalStays: 1, lastStay: new Date("2025-11-15"), address: null, phone: null, comments: null, born: new Date("1993-03-09"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "12345670", firstName: "pablo", lastName: "escobar", countryId: "CO", stars: 0.5, totalStays: 1, lastStay: new Date("1993-12-02"), address: "Medellin", phone: null, comments: "Plata o plomo", born: new Date("1949-12-01"), banned: true, banReason: "Actividades ilícitas" },
  { typeDocument: "DNI", numberDocument: "88223344", firstName: "natalia", lastName: "oreiro", countryId: "AR", stars: 4.4, totalStays: 3, lastStay: new Date("2026-01-25"), address: "Montevideo", phone: null, comments: null, born: new Date("1977-05-19"), banned: false, banReason: null },
  { typeDocument: "Pasaporte", numberDocument: "R10203040", firstName: "bjorn", lastName: "ironside", countryId: "DE", stars: 3.6, totalStays: 2, lastStay: new Date("2025-07-12"), address: null, phone: null, comments: "Vikingo moderno", born: new Date("1980-06-06"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "55441122", firstName: "frida", lastName: "kahlo", countryId: "MX", stars: 5.0, totalStays: 5, lastStay: new Date("2026-03-04"), address: "Coyoacán", phone: null, comments: "Artista visual", born: new Date("1907-07-06"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "11992288", firstName: "leonardo", lastName: "da vinci", countryId: "FR", stars: 5.0, totalStays: 20, lastStay: new Date("2026-03-09"), address: "Toscana", phone: null, comments: "Polímata", born: new Date("1452-04-15"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "22883377", firstName: "marie", lastName: "curie", countryId: "FR", stars: 5.0, totalStays: 2, lastStay: new Date("2025-12-10"), address: "Varsovia", phone: null, comments: "Premios Nobel", born: new Date("1867-11-07"), banned: false, banReason: null },
  { typeDocument: "Pasaporte", numberDocument: "Z44332211", firstName: "nelson", lastName: "mandela", countryId: "US", stars: 5.0, totalStays: 1, lastStay: new Date("2025-06-20"), address: null, phone: null, comments: "Líder de paz", born: new Date("1918-07-18"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "66112233", firstName: "simon", lastName: "bolivar", countryId: "CO", stars: 4.8, totalStays: 10, lastStay: new Date("2026-02-14"), address: "Caracas", phone: null, comments: "El libertador", born: new Date("1783-07-24"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "99443322", firstName: "rosa", lastName: "parks", countryId: "US", stars: 4.9, totalStays: 1, lastStay: new Date("2025-08-30"), address: null, phone: null, comments: "Activista civil", born: new Date("1913-02-04"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "11559988", firstName: "albert", lastName: "einstein", countryId: "DE", stars: 5.0, totalStays: 3, lastStay: new Date("2026-01-01"), address: null, phone: null, comments: "Relatividad", born: new Date("1879-03-14"), banned: false, banReason: null },
  { typeDocument: "Pasaporte", numberDocument: "W11223344", firstName: "malala", lastName: "yousafzai", countryId: "CA", stars: 4.7, totalStays: 2, lastStay: new Date("2026-03-02"), address: null, phone: null, comments: null, born: new Date("1997-07-12"), banned: false, banReason: null },
  { typeDocument: "DNI", numberDocument: "77228833", firstName: "gustavo", lastName: "cerati", countryId: "AR", stars: 5.0, totalStays: 12, lastStay: new Date("2026-03-07"), address: "Buenos Aires", phone: null, comments: "Gracias totales", born: new Date("1959-08-11"), banned: false, banReason: null }
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

    await prisma.roomActive.deleteMany()
    await prisma.room.deleteMany()
    await prisma.city.deleteMany()
    await prisma.client.deleteMany()
    await prisma.country.deleteMany()
   
    // ! Rooms Creation
    await prisma.room.createMany({ data: seedRooms })

    // ! Actives Creation
    await prisma.roomActive.createMany({ data: seedRoomActives })

    // ! Country Creation
    await prisma.country.createMany({ data: seedCountries })

    // ! City Creation
    await prisma.city.createMany({ data: seedCities })

    // ! Clients Creation
    await prisma.client.createMany({ data: seedClients })

    return NextResponse.json({message: 'Seed created succesfully'})

  }catch(err){

    return NextResponse.json(err,{status:400})

  }
}
