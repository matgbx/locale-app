const dataGen = require('./dataGen');

dataGen(200, (done) => {
  if (done) {
    console.log('data generated!');
  }
});

