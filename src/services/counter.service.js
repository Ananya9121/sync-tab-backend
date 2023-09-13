const Counter = require('../models/counter.model');

async function getAllCounters() {
  return Counter.find();
}

async function createCounter(name) {
  const newCounter = new Counter({ name, count: 0 });
  return newCounter.save();
}

async function incrementCounter(id) {
  return Counter.findByIdAndUpdate(id, { $inc: { count: 1 } }, { new: true });
}

async function decrementCounter(id) {
  return Counter.findByIdAndUpdate(id, { $inc: { count: -1 } }, { new: true });
}

async function removeCounter(id) {
  return Counter.findByIdAndRemove(id);
}

module.exports = {
  getAllCounters,
  createCounter,
  incrementCounter,
  decrementCounter,
  removeCounter,
};
