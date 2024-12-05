/**
 * Archivo para el servidor
 */

// Importar la libreria express
import express from 'express';

// Importar la libreria morgan. Es un logger para visualizar peticiones la servidor
import morgan from 'morgan';

// Esta constante es básicamente la que funge como servidor
const app = express();

// Se le especifica a la aplicación el que se usará el módulo morgan en modo 'dev'
app.use(morgan('dev'));

// Esta línea permite a otros archivos importar la variable app
export default app;