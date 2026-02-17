## Usuarios (users)
  - Datos a guardar:
    - id
    - usuario (userName)
    - contraseña (password)
    - activo (active)
    - nombres (firstName)
    - apellidos (lastName)
    - tipo de usuario (role)
  - La sesion expira a las 23:59 de cada dia
  - El admin crea y habilita a los usuarios 
  - Los usuarios solo pueden editar su contraseña

    
## Clientes (Client)
  - Datos a guardar:
    - id
    - nombres (firstName)
    - apellidos (lastName)
    - fecha nacimiento (dateBorn)
    - tipo de documento (typeDocument)
    - numero de documento (numberDocument)
    - teléfono (phone)
    - total estadias (totalStays)
    - estrellas (stars)
    - ultima estadia (lastStay)
    - nacionalidad (nationality)
    - betado (banned)
    - comentarios (coments)
    - **estadias** Lista de estadias del cliente
    - **pagos** (pays)
  - Los clientes solo pueden betarse por el admin
  - Todos los pueden agregar comentarios y crear clientes
  - Solo los Admin puede modificar los comentarios

## Estadias (Stay)
  - Datos a guardar:
    - id
    - fecha y hora de ingreso (dateStart)
    - fecha y hora de salida (dateEnd)
    - motivo de viaje (travelReason)
    - costo Total (cost)
    - ciudad de origen (city)
    - placa del vehiculo (carPlate)
    - **clientes** Lista de clientes en la estadia
    - **pagos** (pays)
  - La fecha de salida se extiende segun el pago realizado
  - Al finalizar la estadia se guarda la fecha y hora de salida en todos los clientes

## Clientes en Estadias
  - Datos a guardar:
    - id Estadia
    - id Cliente
    - fecha y hora de ingreso
    - fecha y hora de salida

## Reservaciones
  - Datos a guardar:
    - id
    - nombre (name)
    - telefono (phone)
    - habitaciones (rooms)
    - numero de personas (people)
    - fecha y hora de ingreso (dateStart)
    - fecha y hora de salida (dateEnd)
    - adelanto (advance)
    - observaceiones (coments)
  - Solo aparece un marcador al momento de seleccionar un ahabitaion
  - La reservacion se desactiva pasadas 6 horas de la fecha y hora dichas
  

## Pagos
  - Datos a guardar:
    - id
    - total (total)
    - fecha (date)
    - medio de pago (payMethod)
    - numero de operacion (operationNumber)
    - fecha salida (dateEnd)
    - **cliente** (que cliente hizo el pago)



## Habitaciones
  - Datos a guardar:
  - numero (id)
  - imagen (image)


## Habitaciones
  - Datos a guardar:
    - numero (id)
    - tipo (type)
    - precio (price)
    - activo (active)
    - posicion x (posW)
    - posicion y (posH)
    - **piso** (floor)

## Activos
  - Datos a guardar:
    - id
    - descripcion (description)
    - ubicado en (dateMoved)
    - adquirido el (dateBuyed)
    - **habitacion** (room)
    - 

























### Ideas
  - Ver una tabla con la disponibilidad de habitaciones "x" para dias y "y" para habitaciones

























##