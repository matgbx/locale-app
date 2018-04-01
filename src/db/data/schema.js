const mongoose = require('mongoose');

const hood = mongoose.Schema({
  zipCode: Number,
  events: [
    {
      title: String,
      location: String,
      description: String,
      time: String,
      date: String,
    },
  ],
});

const Hoods = mongoose.Model('neighbourhoods', hood);

module.exports = Hoods;
