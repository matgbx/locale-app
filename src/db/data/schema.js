const mongoose = require('mongoose');

const hoodSchema = mongoose.Schema({
  zipCode: String,
  events: [
    {
      title: String,
      location: { latitude: String, longitude: String },
      description: String,
      time: String,
      date: String,
    },
  ],
});

const Hoods = mongoose.model('Hoods', hoodSchema, 'hoods');

module.exports = Hoods;
