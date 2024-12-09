// Importar el modelo creado para el usuario
import User from "../models/user.model.js";

// Importar libreria para encriptar las contraseñas que se guarden en la BD
import bcrypt from 'bcryptjs';

// Importar funcion promesa para la creacion del token de inicio de sesion
import { createAccessToken } from "../libs/jwt.js";


// controller de ruta POST /register
export const register = async (req, res) => {
    // Esta sintaxis permite extraer los valores de un Json en el orden en que
    // se especifique
    const{email, password, username} = req.body;

    try {

        // Con esta línea se encripta la contraseña que el usuario registró
        const hashPass = await bcrypt.hash(password, 10);

        // Se crea un usuario usando el modelo que definimos
        // Se usa la contraseña encriptada
        const newUser = new User({
            username,
            email, 
            password: hashPass
        });

        /**
         * La función .save() es la que en verdad guarda el usuario en la base de datos
         * por lo que se debe de esperar a que suceda antes de ejecutar lo demás
         * del código.
         */
        const userSaved = await newUser.save();
        
        // Se crea el token de acceso con la funcion promesa que se hizo usando de
        // payload el id del usuario (dato a almacenar en el token)
        const token = await createAccessToken({id: userSaved._id});

        // Se crea una cookie para almacenar el token
        res.cookie('token', token);
        
        // Devolver en forma de json sus datos sin la contraseña
        // Este outcome es considerando que no se tuvo errores
        // Fundamental: Siempre responder las requests
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        });

    } catch (error) {

        // En caso de tener errores se manda un codigo de estado 500 y se da una 
        // respuesta en forma de JSON con el mensaje de error
        res.status(500).json({ message: error.message });

    }
    
};

// controller de ruta POST /login
export const login = (req, res) => {res.send("login")};
