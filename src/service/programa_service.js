const express = require('express');
const programa_model = require('../models/programa_model');
const pro = express.Router();

//get,post,put,delet HTTP
/////Metodos HTTP [REST{json} SOA{xml}]

pro.get('/programas',(req, res)=>{
    programa_model
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});



pro.post('/programa',(req, res)=>{
    const progra = programa_model(req.body);
    progra
    .save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

pro.get('/programa/:id',(req, res)=>{
    const {id} = req.params;
    programa_model
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));
});

module.exports = pro;

/*route.post();
route.delete();
route.put();*/
