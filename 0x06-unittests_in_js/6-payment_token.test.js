const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = require("chai").expect;

describe('getPaymentTokenFromAPI', () => {
    it('should return a successful response object when success is true', () => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.deep.equal({ data: 'Successful response from the API' });
                done();
            })
    });
});
