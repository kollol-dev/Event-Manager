process.env.NODE_ENV = 'test';
const faker = require('faker');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { assert } = chai;
const server = require('../../src/server');
const { deleteAllEvents } = require('../../src/services/events.service')
const BASE_PATH = '/api/v1';

chai.use(chaiHttp);

describe('Answer API V1 Suite', () => {
    beforeEach(async () => {
        await Promise.all([deleteAllEvents()]);
    });

    beforeEach(async () => {
        await Promise.all([deleteAllEvents()]);
    });
});
