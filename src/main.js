const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

const rol_Service = require('./service/rol_service');
const usuario_Service = require('./service/usuario_service');
const programa_Service = require('./service/programa_service');
const cursos_Service = require('./service/curso_service');
const path = require("path");

//swagger

const swaggerUI = require("swagger-ui-express");
const swaggerJSdoc = require("swagger-jsdoc");
const swaggerSpec = {
  definition:{
    openapi: "3.0.0",
    info:{
      title:"OkDiario",
      version:"1.0.0"
    },
    servers:[
      {
        url:"http://localhost:8000"
      }
    ]
  },
  apis:[`${path.join(__dirname, "./service/rol_service.js")}`, `${path.join(__dirname, "./service/usuario_service.js")}`, `${path.join(__dirname, "./service/programa_service.js")}`, `${path.join(__dirname, "./service/curso_service.js")}`] ,
}

const app = express();
const PORT = 8000;

app.use(cors({ origin: '*' }));



// Invocando nuestros servicios
app.use(express.json());
app.use('/api', rol_Service);
app.use('/api', usuario_Service);
app.use('/api', programa_Service);
app.use('/api', cursos_Service);
app.use("/api-doc",swaggerUI.serve, swaggerUI.setup(swaggerJSdoc(swaggerSpec)));

// Rutas
app.get('/', (req, res) => {
  res.send('servicio iniciado');
  });

mongoose
  .connect(process.env.url_DataBase)
  .then(function () {
    console.log(process.env.mensaje_base_datos);
  })
  .catch((error) => console.error(error));



app.listen(PORT, () => {
  console.log(`Servidor creado http://localhost:${PORT}`);
});