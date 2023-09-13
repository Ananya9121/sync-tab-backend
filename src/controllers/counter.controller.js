const counterService = require('../services/counter.service');

async function getAllCounters(req, res) {
  const counters = await counterService.getAllCounters();
  res.json(counters);
}

async function createCounter(req, res) {
  const { name } = req.body;
  const newCounter = await counterService.createCounter(name);
  res.json(newCounter);
}

async function incrementCounter(req, res) {
  const { id } = req.params;
  const counter = await counterService.incrementCounter(id);
  res.json(counter);
}

async function decrementCounter(req, res) {
  const { id } = req.params;
  const counter = await counterService.decrementCounter(id);
  res.json(counter);
}

async function removeCounter(req, res) {
  const { id } = req.params;
  await counterService.removeCounter(id);
  res.json({ message: 'Counter removed' });
}

module.exports = {
  getAllCounters,
  createCounter,
  incrementCounter,
  decrementCounter,
  removeCounter,
};
