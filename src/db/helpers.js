const mongoose = require('mongoose');
const moment = require('moment-timezone');
const Hoods = require('./data/schema');
const { zipCodes } = require('./data/dataGen');

const MONGO_HOST = 'mongodb://localhost/the-locale';

mongoose.connect(MONGO_HOST);

const fetchEvents = (zip, date = '', cb) => {
  const dateToday = moment.tz('America/Los_Angeles').format('YYYY-MM-DD');
  const dateQuery = date === '' ? dateToday : date;
  Hoods.find({ zipCode: zip }).lean().exec((err, data) => {
    if (err) {
      cb(err, null);
    } else {
      const eventsByDate = data[0].events.filter(event => event.date === dateQuery);
      const eventList = {
        zipCode: zip,
        // center: { lat: zipCodes[zip], lng: zipCodes[1] },
        center: zipCodes[zip],
        events: eventsByDate,
      };
      cb(null, eventList);
    }
  });
};

module.exports = {
  fetchEvents,
};
