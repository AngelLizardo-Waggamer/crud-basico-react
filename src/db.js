// Libreria para conectarse a una base de datos de mongoDB
import mongoose from "mongoose";

// Función asíncrona para la conexión a la base de datos.
// Se tiene dentro de un bloque trycatch para visualizar errores sin detener la app.
// Posterior a la v.17.x de nodeJS se requiere ocupar 127.0.0.1 en vez de localhost
// pues tira un error al ocupar la palabra clave
export const connectDB = async () => {

    try {
        await mongoose.connect('mongodb://127.0.0.1/merndb');
        console.log(">>> La base de datos se conecto correctamente");
    } catch (error) {
        console.log(error);
    }
    
}