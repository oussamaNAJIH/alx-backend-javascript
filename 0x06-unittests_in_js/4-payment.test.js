const sinon = require("sinon");
const sendPaymentRequestToApi = require('./4-payment');
const { describe, it } = require("mocha");
const Utils = require('./utils');
const expect = require("chai").expect;

describe("checking the same math is used", function() {
    it("staubing calculateNumber", function() {
        const consoleLogSpy = sinon.spy(console, "log");
        const calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);
        sendPaymentRequestToApi(100, 20);
        
        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWithExactly("The total is: 120")).to.be.true;

        expect(calculateNumberStub.calledOnce).to.be.true;
        expect(calculateNumberStub.calledWithExactly("SUM", 100, 20)).to.be.true;

        consoleLogSpy.restore();
        calculateNumberStub.restore();
    });
});
