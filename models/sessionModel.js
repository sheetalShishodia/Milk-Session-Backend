const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  start_time: { type: Date, required: true },
  end_time: { type: Date, required: true },
  duration: { type: Number, required: true },
  milk_quantity: { type: Number, required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);