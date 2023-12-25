const express = require('express');
const rol_model = require('../models/rol_model');
const route = express.Router();

//get,post,put,delet HTTP
/////Metodos HTTP [REST{json} SOA{xml}]

route.get('/roles',(req, res)=>{
    rol_model
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});



route.post('/rol',(req, res)=>{
    const rol = rol_model(req.body);
    rol
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

route.get('/rol/:id',(req, res)=>{
    const {id} = req.params;
    rol_model
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

module.exports = route;

/*route.post();
route.delete();
route.put();*/
