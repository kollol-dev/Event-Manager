const { Router, json } = require('express');
const router = Router();
const { pageinateEvents } = require('../../controllers/events.controller')

router.get('/events', pageinateEvents)

module.exports = router