const request = require('request');
const expect = require("chai").expect;

describe('API Integration Testing', function() {
  it('should return the correct response for GET /', function(done) {
    request.get('http://localhost:7865/', function(error, response, responseBody) {
      expect(response.statusCode).to.equal(200);
      expect(responseBody).to.equal('Welcome to the payment system');
      done();
    });
  });
});
