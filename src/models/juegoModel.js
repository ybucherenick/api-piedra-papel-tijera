const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoundSchema = new Schema({
    numero:{
        type: Number,
        required: [true,'El Numero es obligatorio']
    },
    movimiento1:{
        type: String,
        required: [true, 'El Movimiento es obligatorio']
    },
    movimiento2:{
        type: String,
        required: [true, 'El Movimiento es obligatorio']
    },
    ganador:{
        type: String,
        required: [true, 'El ganador es obligatorio']
    }
});

const JuegoSchema = new Schema({
    jugador1:{
        type: String,
        required: [true,'El Jugador1 es obligatorio']
    },
    jugador2:{
        type: String,
        required: [true, 'El Jugardo2 es obligatorio']
    },
    ganador:{
        type: String,
        required: [true, 'El ganador es obligatorio']
    },
    rounds:[{
        type: RoundSchema
    }]
});

module.exports = mongoose.model('Juego', JuegoSchema);