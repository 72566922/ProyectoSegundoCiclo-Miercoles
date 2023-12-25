const mongoose =  require('mongoose');

const rol_model = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    cod:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('rol', rol_model);