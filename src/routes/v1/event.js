const { Router, json } = require('express');
const router = Router();
const { pageinateEvents, createEvent, updateEventById, deleteEventById } = require('../../controllers/events.controller')

router.get('/events', pageinateEvents)
router.post('/events', createEvent)
router.put('/events/{id}', updateEventById)
router.delete('/events/{id}', deleteEventById)

module.exports = router