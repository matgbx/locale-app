const router = require('express').Router();
const models = require('./models');

router.get('/events/:zip/', models.fetch);
router.get('/events/:zip/:date/', models.fetch);

module.exports = router;
