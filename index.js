import { app } from "./app.js";
// La función .listen() hace que el servidor reciba requests en el puerto especificado
app.listen(3000);

// Registrar en la consola que el servidor escucha en el puerto 'x'
console.log('Servidor abierto en el puerto', 3000);