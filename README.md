# Aplicación básica con métodos CRUD con React
Mi primera aplicación React con Node.JS e implementaciones de base de datos NoSQL con MongoDB

## Layout de la aplicación
* `/src` es el directorio para todo el código base de la aplicación
* `/src/routes` es el directorio para manejar las rutas/endpoints que pida el frontend
* `/src/controllers` es el directorio para las funciones que se ejecutarán por cada una de las rutas
* `/src/models` es el directorio para los modelos de datos que se usarán. Es útil para el manejo apropiado de la información que se consulta a una base de datos.
* `/src/middlewares` es el directorio del código para proteger las rutas que requieren de una autenticación por parte del usuario.
* `/src/shemas` es el directorio para validar información proveída por el usuario por medio de esquemas de datos. Es decir, que la input siga una forma específica.
* `/src/libs` es el directorio para fragmentos de código que se deseen reutilizar en varias partes de la aplicación.

## Archivos dentro de /src
* `index.js` es el archivo principal de la aplicación. Responsable del arranque.
* `app.js` es el archivo del servidor. Contiene el código de este mismo y es llamado por el index.js
* `db.js` maneja la conexión con la base de datos
* `config.js` sirve para guardar variables que se requieran en muchas partes, así como también para los "secrets" de la aplicación