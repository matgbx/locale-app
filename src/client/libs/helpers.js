import $ from 'jquery';

const BASE_URL = 'http://localhost:3005';

const getEvents = (zip, date, callback) => {
  $.ajax({
    url: `${BASE_URL}/events/${zip}/${date}`,
    method: 'GET',
    crossDomain: true,
    success: (data) => {
      callback(data);
    },
    error: (error) => {
      callback(error);
    },
  });
};

module.exports = getEvents;
