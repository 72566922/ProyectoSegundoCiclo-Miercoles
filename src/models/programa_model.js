const mongoose =  require('mongoose');

const programa_model = mongoose.Schema({
    Cod_Programa:{
        type:String,
        required:true
    },
    Nombre_Programa:{
        type:String,
        required:true
    },
    Cursos:{
        type:Array,
        required:true
    },
    Fecha_inicio:{
        type:String,
        required:true
    },
    Fecha_Fin:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('programa', programa_model);