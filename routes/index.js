var express = require('express');
var router = express.Router();

/* Controladores */
var juegoController = require("../src/controller/juegoController");
var movimientoController = require("../src/controller/movimientoController");

/** Juego */
router.get('/juego', juegoController.listJuego);
router.post('/juego', juegoController.createJuego);

/** Movimiento */
router.post('/movimiento', movimientoController.createMovimienoto);
router.get('/movimiento', movimientoController.findOneMovimiento);
router.put('/movimiento', movimientoController.findOneAndUpdateMovimiento);

module.exports = router;