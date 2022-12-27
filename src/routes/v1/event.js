const { Router, json } = require('express');
const router = Router();
const { pageinateEvents, createEvent, updateEventById } = require('../../controllers/events.controller')

router.get('/events', pageinateEvents)
router.post('/events', createEvent)
router.put('/events/{id}', updateEventById)

module.exports = router