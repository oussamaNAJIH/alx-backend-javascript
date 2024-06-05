const sinon = require("sinon");
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('make sure the same math is used', function() {
    // let calculateNumberSpy;

    // beforeEach(function() {
    //     calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    // });

    // afterEach(function() {
    //     calculateNumberSpy.restore();
    // });

    // it('should call Utils.calculateNumber with correct arguments', function() {
    //     sendPaymentRequestToApi(100, 20);
    //     sinon.assert.calledOnceWithExactly(calculateNumberSpy, 'SUM', 100, 20);
    // });
    it("checking the execution of calculateNumber once", function() {
        let spy = sinon.spy(Utils, 'calculateNumber'); // Corrected 'utils' to 'Utils'
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnceWith(spy, 'SUM', 100, 20); // Changed `expect` to `sinon.assert`
        spy.restore();
    })
});
