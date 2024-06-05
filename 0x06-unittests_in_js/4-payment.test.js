const sinon = require("sinon");
const sendPaymentRequestToApi = require('./4-payment');
const { describe, it } = require("mocha");
const Utils = require('./utils');
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function() {
    it("should stub calculateNumber and spy on console.log", function() {
        // Create a stub for Utils.calculateNumber that always returns 10
        const calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);
        // Create a spy for console.log
        const consoleLogSpy = sinon.spy(console, "log");

        // Call the function to test
        sendPaymentRequestToApi(100, 20);

        // Verify that the stub was called once with the correct arguments
        expect(calculateNumberStub.calledOnce).to.be.true;
        expect(calculateNumberStub.calledWithExactly("SUM", 100, 20)).to.be.true;

        // Verify that the spy was called once with the correct message
        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWithExactly("The total is: 10")).to.be.true;

        // Restore the original methods
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });
});
