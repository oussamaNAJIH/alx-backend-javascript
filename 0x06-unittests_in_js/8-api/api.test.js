const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
    it('should return status code 200 and the correct message', (done) => {
        request(app)
            .get('/')
            .end((err, res) => {
                expect(res.statusCode).to.be.equal(200);
                expect(res.text).to.be.equal('Welcome to the payment system');
                done();
            });
    });
});

