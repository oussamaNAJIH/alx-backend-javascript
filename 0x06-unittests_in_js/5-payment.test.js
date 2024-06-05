const sinon = require("sinon");
const sendPaymentRequestToApi = require('./5-payment');
const { describe, it, beforeEach, afterEach } = require("mocha");
const expect = require("chai").expect;

describe("make sure the same math is used", function() {
    let consoleLogSpy;

    beforeEach(function() {
        consoleLogSpy = sinon.spy(console, "log");
    });

    afterEach(function() {
        consoleLogSpy.restore();
    });

    it("should log the correct total for 100 and 20", function() {
        sendPaymentRequestToApi(100, 20);
        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWithExactly("The total is: 120")).to.be.true;
    });

    it("should log the correct total for 10 and 10", function() {
        sendPaymentRequestToApi(10, 10);
        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWithExactly("The total is: 20")).to.be.true;
    });
});
