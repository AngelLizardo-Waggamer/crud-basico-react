import app from './app.js';
import { connectDB } from './db.js';

// Conectarse a la base de datos de mongoDB
connectDB();

// La función .listen() hace que el servidor reciba requests en el puerto especificado
app.listen(4000);

// Registrar en la consola que el servidor escucha en el puerto 'x'
console.log('Servidor abierto en el puerto', 4000);