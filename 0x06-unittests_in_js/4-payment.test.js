const sinon = require("sinon");
const sendPaymentRequestToApi = require('./3-payment');
const { describe, it } = require("mocha");
const Utils = require('./utils');
const expect = require("chai").expect;

describe("make sure the same math is used", function() {
    it("checking the execution of calculateNumber once", function() {
        const consoleLogSpy = sinon.spy(console, "log");
        const calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);
        sendPaymentRequestToApi(100, 20);
        
        // Expectations for console.log spy
        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWithExactly("The total is: 10")).to.be.true;

        // Expectations for calculateNumber stub
        expect(calculateNumberStub.calledOnce).to.be.true;
        expect(calculateNumberStub.calledWithExactly("SUM", 100, 20)).to.be.true;

        consoleLogSpy.restore();
        calculateNumberStub.restore();
    });
});

