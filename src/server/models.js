const db = require('../db/helpers');

module.exports = {
  fetch: (req, res) => {
    const { zip, date } = req.params;
    db.fetchEvents(zip, date, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(JSON.stringify(result));
      }
    });
  },
};
