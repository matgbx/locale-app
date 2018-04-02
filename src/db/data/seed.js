const dataGen = require('./dataGen');
const { exec } = require('child_process');
const mongoose = require('mongoose');
const Hoods = require('./schema');

mongoose.connect('mongodb://localhost/the-locale');

dataGen(200, (done) => {
  if (done) {
    const path = './eventData.json';
    exec(`mongoimport --db the-locale --collection hoods --drop --file ${path}`, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('database seeded!');
        mongoose.disconnect();
      }
    });
  }
});

