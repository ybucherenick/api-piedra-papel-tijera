var httpStatus = require('http-status-codes');
const Movimiento = require('./../models/movimientoModel');

module.exports = {

    createMovimienoto : (req, res) => {
        let movimiento = new Movimiento(req.body);
        movimiento.save().then((_data) => {
            return res.status(httpStatus.CREATED).json({ movimiento: _data });
        }).catch((_err) => {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: _err });
        })
    },

    findOneMovimiento : (req, res) => {
        Movimiento.findOne({ nombre: req.query.nombre }).then((_data) => {
            if (_data != null){
                return res.status(httpStatus.OK).json({ movimiento: _data });
            } else {
                return res.status(httpStatus.NOT_FOUND).json({ message: 'No se encontró el movimiento' });
            }
        }).catch((_err) => {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: _err });
        })
    },

    findOneAndUpdateMovimiento : (req, res) => {
        var query = { nombre: req.body.nombre };
        Movimiento.findOneAndUpdate(query, { $set: req.body }, { new: true }).then((_data) => {
            return res.status(httpStatus.OK).json({ movimiento: _data });
        }).catch((_err) => {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: _err });
        })
    }

}