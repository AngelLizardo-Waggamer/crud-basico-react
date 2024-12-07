// Importar el modelo creado para el usuario
import User from "../models/user.model.js";

// controller de ruta POST /register
export const register = async (req, res) => {
    // Esta sintaxis permite extraer los valores de un Json en el orden en que
    // se especifique
    const{email, password, username} = req.body;

    try {

        // Se crea un usuario usando el modelo que definimos
        const newUser = new User({
            username,
            email, 
            password
        });

        /**
         * La función .save() es la que en verdad guarda el usuario en la base de datos
         * por lo que se debe de esperar a que suceda antes de ejecutar lo demás
         * del código.
         */
        const userSaved = await newUser.save();
        
        // Devolver en forma de json el usuario registrado
        // Fundamental: Siempre responder las requests
        res.json(userSaved);

    } catch (error) {
        console.log(error);
    }
    
};

// controller de ruta POST /login
export const login = (req, res) => {res.send("login")};
