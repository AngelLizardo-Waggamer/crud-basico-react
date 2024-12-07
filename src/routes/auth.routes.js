// Importar express para crear un router
import { Router } from 'express';

// Importar las funciones del controller
import { login, register } from '../controllers/auth.controller.js'

// El router se almacena igual que una app de express, en una constante.
// El router nos permite configurar las diferentes rutas de la aplicación.
const router = Router();

router.post('/register', register);

router.post('/login', login);

export default router;