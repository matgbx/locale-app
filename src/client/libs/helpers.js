import $ from 'jquery';

const BASE_URL = 'http://localhost:3005';

const getEvents = (zip, date, callback) => {
  $.ajax({
    url: `${BASE_URL}/${zip}/${date}`,
    method: 'GET',
    crossDomain: true,
    success: (data) => {
      callback(null, JSON.parse(data));
    },
    error: (error) => {
      callback(error, null);
    },
  });
};

module.exports = getEvents;
