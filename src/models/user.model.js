// Libreria para conectarse a la bd, pero tambien para esquemas de datos
import mongoose from "mongoose";

/**
 * Dentro de este esquema se especifica el campo que se obtendrá, y dentro de las 
 * llaves se especifica el tipo de dato, validaciones y postprocesado que se le
 * vaya a hacer a la información que se obtenga.
 * 
 * . trim es para eliminar espacios al inicio y final de un string
 * . required es para indicar que es un dato obligatorio en todo objeto
 * . unique indica que el valor debe de ser unico para cada objeto
 */
const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }, 

}, {
    timestamps: true
});

export default mongoose.model('User', userSchema);