const express = require('express');
const cursos_model = require('../models/curso_model');
const scool = express.Router();

//get,post,put,delet HTTP
/////Metodos HTTP [REST{json} SOA{xml}]

scool.get('/cursos',(req, res)=>{
    cursos_model
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});



scool.post('/curso',(req, res)=>{
    const cursos = cursos_model(req.body);
    cursos
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

scool.get('/curso/:id',(req, res)=>{
    const {id} = req.params;
    cursos_model
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

module.exports = scool;

/*route.post();
route.delete();
route.put();*/
