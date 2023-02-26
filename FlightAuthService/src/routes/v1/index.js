const express = require('express');
const router = express.Router();

const { CityController } = require('../../controllers/index');
const { FlightController } = require('../../controllers/index');

router.post('/city', CityController.create);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.put('/city/:id', CityController.update);
router.delete('/city/:id', CityController.remove);

router.post('/flights', FlightController.create);
router.get('/flights', FlightController.getAll);

module.exports = router;
