/**
 * Archivo para el servidor
 */

// Importar la libreria express
import express from 'express';

// Importar la libreria morgan. Es un logger para visualizar peticiones la servidor
import morgan from 'morgan';

// Importar las rutas personalizadas de autenticación
import authRoutes from "./routes/auth.routes.js";

// Esta constante es básicamente la que funge como servidor
const app = express();

// Se le especifica a la aplicación el que se usará el módulo morgan en modo 'dev'
app.use(morgan('dev'));

// Se le dice a la app que use la función .json de express para que pueda entender
// los archivos json
app.use(express.json());

// Posterior a mostrar la petición al servidor con morgan, direccionar con las
// rutas adecuadas
app.use('/api', authRoutes);

// Esta línea permite a otros archivos importar la variable app
export default app;