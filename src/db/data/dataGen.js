const randomLocation = require('random-location');
const faker = require('faker');
const moment = require('moment-timezone');
const fs = require('fs');

const stream = fs.createWriteStream('eventData.json');

// zip codes and center coordinates
const zipCodes = {
  94102: [37.780976, -122.415531],
  94103: [37.772544, -122.410148],
  94107: [37.757733, -122.391963],
  94108: [37.792129, -122.408374],
  94109: [37.793339, -122.421295],
  94110: [37.751948, -122.414548],
  94112: [37.720720, -122.445179],
  94114: [37.758486, -122.434808],
  94115: [37.787430, -122.438034],
  94116: [37.744443, -122.486588],
  94117: [37.771478, -122.443859],
  94118: [37.780608, -122.461774],
  94121: [37.776955, -122.494453],
  94122: [37.759179, -122.489592],
  94123: [37.800846, -122.439900],
  94124: [37.733386, -122.389863],
  94127: [37.736431, -122.459904],
  94131: [37.747969, -122.445720],
  94132: [37.721120, -122.484065],
  94133: [37.803675, -122.411468],
  94134: [37.721238, -122.411677],
};

const timeSlots = [
  '8am - 12pm',
  '9am - 10:30am',
  '10am - 11:45am',
  '11am - 3pm',
  '12pm - 1pm',
  '1pm - 2:30Pm',
  '2pm - 4pm',
  '3pm - 4pm',
  '4pm - 6pm',
  '5pm - 6pm',
  '6pm - 9pm',
  '7pm - 10pm',
  '8pm - 11pm',
];

const eventTypes = [
  'Garage Sale',
  'Farmer\'s Market',
  'Live Music',
  'Street Fair',
  'Easter Parade',
  'Fun Family Day!',
  'Craft Fair',
  'Flash Mob',
  'Bake Sale',
  'Fun Run',
];

// generates random coordinates within 800 meters of zip code center
const genCoordinates = (zip) => {
  const P = {
    latitude: zipCodes[zip][0],
    longitude: zipCodes[zip][1],
  };
  const R = 800;
  return randomLocation.randomCirclePoint(P, R);
};

// generate a list of random event objects
const genEventList = (zip, numOfEvents) => {
  const eventList = [];
  let count = 0;
  while (count < numOfEvents) {
    const slot = Math.floor(Math.random() * timeSlots.length);
    const daysFromNow = Math.floor(Math.random() * 15);
    const dateStr = moment.tz('America/Los_Angeles').add(daysFromNow, 'days').format('YYYY-MM-DD');
    const index = Math.floor(Math.random() * eventTypes.length);
    const event = {
      title: eventTypes[index],
      location: genCoordinates(zip),
      description: faker.lorem.sentences(),
      time: timeSlots[slot],
      date: dateStr,
    };
    eventList.push(event);
    count += 1;
  }
  return eventList;
};

// generates an array of objects representing each zip code area
// these area objects contain event arrays generate by the above function: genEventList
const genEventsByZip = (numOfEvents, cb) => {
  const zips = Object.keys(zipCodes);
  zips.forEach((zip) => {
    const neighborhood = {
      zipCode: zip,
      events: genEventList(zip, numOfEvents),
    };
    const dataStr = JSON.stringify(neighborhood);
    stream.write(`${dataStr}\n`);
  });
  cb('done!');
};

module.exports = {
  genEventsByZip,
  zipCodes,
};
