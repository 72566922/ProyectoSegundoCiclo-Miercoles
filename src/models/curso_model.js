const mongoose =  require('mongoose');

const cursos_model = mongoose.Schema({
    Cod_Curso:{
        type:String,
        required:true
    },
    Nombre_Curso:{
        type:String,
        required:true
    },
    Duracion:{
        type:Number,
        required:true
    },
    Tiempo:{
        type:String,
        required:true
    },
    Temas:{
        type:Array,
        required:true
    }
});

module.exports = mongoose.model('cursos', cursos_model);