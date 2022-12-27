process.env.NODE_ENV = 'test';
const faker = require('faker');
const chai = require('chai');
const server = require('../../src/server');
const { expect } = chai;
const { getEvent, createEvent, paginateEvent, updateEvent, deleteEventById, deleteAllEvents } = require('../../src/services/events.service');
const { pageinateEvents } = require('../../src/controllers/events.controller');

describe('Event Service Suit', () => {
  beforeEach(async () => {
    await Promise.all([deleteAllEvents()]);
  });

  it('should create event', async () => {
    const eventInput = {
      name: faker.lorem.words(10),
      location: faker.lorem.word(8),
      date: faker.date.past(10)
    };
    expect(await createEvent(eventInput)).to.be.contains(eventInput);
  });

  it('should return an event', async () => {
    const eventInput = {
      name: faker.lorem.words(10),
      location: faker.lorem.word(8),
      date: faker.date.past(10)
    };
    await createEvent(eventInput)
    expect(await getEvent(newEvent.id)).to.be.a('object');
  });

  it('should paginate events', async () => {
    const eventsInput = []
    for (let i = 0; i < 15; i++) {
      const eventInput = {
        name: faker.lorem.words(10),
        location: faker.lorem.word(8),
        date: faker.date.past(10)
      };
      eventsInput.push(eventInput)
      await createEvent(eventInput)
    }
    const paginatedEvent = await paginateEvent(1, 15)
    expect((paginatedEvent)).to.be.a('array');
  });

  it('should update an existing event', async () => {
    const eventInput = {
      name: faker.lorem.words(10),
      location: faker.lorem.word(8),
      date: faker.date.past(10)
    };
    const newEvent = await createEvent(eventInput)
    const updateEventInput = {
      id: newEvent.id,
      name: faker.lorem.words(20),
      location: faker.lorem.words(22),
      date: faker.date.recent(10)
    }
    const updatedEvent = await updateEvent(updateEventInput)
    expect(updatedEvent[0]).to.be.eq(1);
  })

  it('should delete an existing event', async () => {
    const eventInput = {
      name: faker.lorem.words(10),
      location: faker.lorem.word(8),
      date: faker.date.past(10)
    };
    const newEvent = await createEvent(eventInput)
    expect(await deleteEventById(newEvent.id)).to.be.eq(1);
  })

  afterEach(async () => {
    await Promise.all([deleteAllEvents()]);
  });
});
