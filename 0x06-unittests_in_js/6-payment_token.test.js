const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = require("chai").expect;

describe('getPaymentTokenFromAPI', () => {
    it('should return a successful response object when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).toEqual({ data: 'Successful response from the API' });
                done();
            })
            .catch((error) => {
                done(error);
            });
    });
});
