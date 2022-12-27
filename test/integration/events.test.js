process.env.NODE_ENV = 'test';
const faker = require('faker');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = chai;
const server = require('../../src/server');
const { deleteAllEvents } = require('../../src/services/events.service')
const BASE_PATH = '/api/v1';

chai.use(chaiHttp);

describe('Event API V1 Suite', () => {
    beforeEach(async () => {
        await Promise.all([deleteAllEvents()]);
    });

    it('should create an event', async () => {
        const eventInput = {
            name: faker.lorem.words(10),
            location: faker.lorem.word(8)
        };

        const response = await chai
            .request(server)
            .post(`${BASE_PATH}/events`)
            .send(eventInput);

        const event = response?.body?.data;
        assert.equal(response?.status, 201, 'Response code should be 201');
        assert.isObject(event, 'Event should be an object!');
        assert.exists(event.id, 'Event ID should be exists!');
        //   assert.exists(event.user_id, 'User ID should be exists');
        assert.exists(event.name, 'Event name should be exists');
        assert.exists(event.location, 'Event location should be exists');
        assert.equal(event.name, eventInput.name, 'Given name should be same!');
        assert.equal(event.location, eventInput.location, 'Given location should be same!');
    })

    afterEach(async () => {
        await Promise.all([deleteAllEvents()]);
    });
});
