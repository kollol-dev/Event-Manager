const { Router, json } = require('express');
const router = Router();
const { pageinateEvents, createEvent } = require('../../controllers/events.controller')

router.get('/events', pageinateEvents)
router.post('/events', createEvent)

module.exports = router