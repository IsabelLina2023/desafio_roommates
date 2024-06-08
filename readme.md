# Desafío - Roommates

Prueba de Desafío LATAM, que solicita los sgtes. requerimientos en una tabla:

-Crear un servidor con Node que sirva una interfaz HTML cuya temática está basada en el registro de gastos entre roommates.

-Crear una API REST que permita hacer lo siguiente:
● Almacenar roommates nuevos ocupando random user.
● Devolver todos los roommates almacenados.
● Registrar nuevos gastos.
● Devolver el historial de gastos registrados.
● Modificar la información correspondiente a un gasto.
● Eliminar gastos del historial.

## Descripción del proyecto

Rutas creadas en el servidor:
● /GET: Debe devolver el documento HTML.
● /roommate POST: Almacena un nuevo roommate ocupando random user.
● /roommate GET: Devuelve todos los roommates almacenados.
● /gastos GET: Devuelve el historial con todos los gastos registrados.
● /gasto PUT: Edita los datos de un gasto.
● /gasto DELETE: Elimina un gasto del historial.

## Proceso

1. Uso de módulo File System para la manipulación de archivos alojados en el servidor
2. Captura de los errores para condicionar el código a través del manejo de excepciones
3. El botón “Agregar roommate” de la aplicación cliente genera una petición POST (sin payload) esperando que el servidor registre un nuevo roommate random con la API randomuser, por lo que se prepara una ruta POST /roommate en el servidor que ejecute una función asíncrona importada de un archivo externo al del servidor (la función es un módulo), para obtener la data de un nuevo usuario y esta se acumule en un JSON (roommates.json)
El objeto correspondiente al usuario tiene un id generado con el paquete UUID
4. Creación de una API REST que contiene las siguientes rutas:
a. GET /gastos: Devuelve todos los gastos almacenados en el archivo spent.json
b. POST /gasto: Recibe el payload con los datos del gasto y los almacena en un archivo JSON (spent.json)
c. PUT /gasto: Recibe el payload de la consulta y modifica los datos almacenados en el servidor (spent.json).
d. DELETE /gasto: Recibe el id del gasto usando las Query Strings y lo elimine del historial de gastos (spent.json).
e. GET /roommates: Devuelve todos los roommates almacenados en el servidor (roommates.json)
5. Devolución de los códigos de estado HTTP correspondientes a cada situación

Realizado por: Norma Isabel Rojas 🌞