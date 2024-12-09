// Importar libreria para la generacion del token de inicio de sesion
import jwt from 'jsonwebtoken';

// Importar token secreto desde configuración
import { TOKEN_SECRET } from "../config.js";

/**
 * Promise: Funcion para crear un token de acceso usando jwt.
 * Se puede ocupar en varias partes.
 * @param {*} payload 
 * @returns Token para login
 */
export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {{
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d"
            },
            (err, token) => {
                if(err) reject(err);
                resolve(token);
            });
    }})
}