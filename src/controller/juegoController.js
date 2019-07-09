var httpStatus = require('http-status-codes');
const Juego = require('./../models/juegoModel');

module.exports = {

    createJuego : (req, res) => {
        let juego = new Juego(req.body);
        juego.save().then((_data) => {
            return res.status(httpStatus.CREATED).json({ movimiento: _data });
        }).catch((_err) => {
            res.status(500).send({
                message: _err.message
            })
        })
    },

    listJuego: (req, res) => {
        Juego.find({}).then((_data) => {
            console.log(_data);
            return res.status(httpStatus.OK).json({ juego: _data });
        }).catch((_err) => {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: _err });
        })
    }
    
}