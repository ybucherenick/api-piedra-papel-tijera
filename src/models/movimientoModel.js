const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MataSchema = new Schema({
    nombre:{
        type: String,
        required: [true,'El Nombre es obligatorio']
    }
});

const MoviemientoSchema = new Schema({
    nombre:{
        type: String,
        required: [true,'El Nombre es obligatorio']
    },
    mata:[{
        type: MataSchema
    }]
});

module.exports = mongoose.model('Movimiento', MoviemientoSchema);