const request = require('supertest');
const { expect } = require('chai');

describe('Index page', () => {
    it('should return status code 200', () => {
        request.get('http://localhost:7865/', (_err, res, body) => {
            expect(res.statusCode).to.be.equal(200);
            expect(body).to.be.equal('Welcome to the payment system');
            done();
        })
    });
});
