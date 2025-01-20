// Importar express para crear un router
import { Router } from 'express';

// Importar las funciones del controller
import { login, logout, register } from '../controllers/auth.controller.js'

// El router se almacena igual que una app de express, en una constante.
// El router nos permite configurar las diferentes rutas de la aplicación.
const router = Router();

// Ruta para registrar nuevo usuario
router.post('/register', register);

// Ruta para iniciar sesion
router.post('/login', login);

// Ruta para salir de la sesion aka. destruir el token
router.post('/logout', logout);

export default router;