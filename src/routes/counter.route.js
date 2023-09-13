const express = require('express');
const router = express.Router();
const counterController = require('../controllers/counter.controller');

router.get('/', counterController.getAllCounters);
router.post('/', counterController.createCounter);
router.put('/increment/:id', counterController.incrementCounter);
router.put('/decrement/:id', counterController.decrementCounter);
router.delete('/:id', counterController.removeCounter);

module.exports = router;
