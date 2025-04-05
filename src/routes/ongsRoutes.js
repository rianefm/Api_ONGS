const express = require('express');
const router = express.Router();
const ongsController = require('../controllers/ongsController');

router.get('/ongs', ongsController.listarOngs);
router.get('/ongs/:id', ongsController.buscarOngPorId);

module.exports = router;
