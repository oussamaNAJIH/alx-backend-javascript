const request = require('request');
const expect = require("chai").expect;

describe('API Integration Testing', function() {
  // Test for the root endpoint
  it('should return the correct response for GET /', function(done) {
    request.get('http://localhost:7865/', function(error, response, responseBody) {
      expect(response.statusCode).to.equal(200);
      expect(responseBody).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Test suite for the cart page
  describe('GET /cart/:id', function() {
    // Correct status code when :id is a number
    it('should return 200 and correct response for a valid cart id', function(done) {
      request.get('http://localhost:7865/cart/123', function(error, response, responseBody) {
        expect(response.statusCode).to.equal(200);
        expect(responseBody).to.equal('Payment methods for cart 123');
        done();
      });
    });

    // Correct status code when :id is NOT a number
    it('should return 404 for an invalid cart id', function(done) {
      request.get('http://localhost:7865/cart/abc', function(error, response, responseBody) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  // Test suite for the /available_payments endpoint
  describe('GET /available_payments', function() {
    it('should return the correct payment methods', function(done) {
      request.get('http://localhost:7865/available_payments', function(error, response, responseBody) {
        expect(response.statusCode).to.equal(200);
        expect(responseBody).to.equal(JSON.stringify({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        }));
        done();
      });
    });
  });

  // Test suite for the /login endpoint
  describe('POST /login', function() {
    it('should return a welcome message for a valid username', function(done) {
      request.post({
        url: 'http://localhost:7865/login',
        json: { userName: 'John' }
      }, function(error, response, responseBody) {
        expect(response.statusCode).to.equal(200);
        expect(responseBody).to.equal('Welcome John');
        done();
      });
    });

    it('should return 400 if userName is missing', function(done) {
      request.post({
        url: 'http://localhost:7865/login',
        json: {}
      }, function(error, response, responseBody) {
        expect(response.statusCode).to.equal(400);
        expect(responseBody).to.equal('Missing userName');
        done();
      });
    });
  });
});
