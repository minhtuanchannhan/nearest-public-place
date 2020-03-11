process.env.NODE_ENV = 'test';
process.env.PORT = 8080;

const request = require('supertest');
const app = require('../index');

describe('GET / Places', () => {
	it('should return 200 OK', (done) => {
		request(app).get('/api/v1/places')
			.send({
				lat: 10.7906702,
				lng: 106.6646276
			})
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.expect(200, done);
	});
});
