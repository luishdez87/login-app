import express from 'express';
import mongoose from 'mongoose';
import config from './config/database';

// Conectar a la base de datos
mongoose.connect(config.database);

// Si hay error
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

const app = express();

// Puerto del servidor
const port = process.env.PORT || 4000;


// Se levanta el servidor
app.listen(port, () => {
  console.log('Server started on port '+ port);
});
