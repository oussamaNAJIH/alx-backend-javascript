const sinon = require("sinon");
const sendPaymentRequestToApi = require('./3-payment');
const { describe, it } = require("mocha");
const Utils = require('./utils');
const expect = require("chai").expect;

describe("checking the same math is used", function() {
    it("staubing calculateNumber", function() {
        const consoleLogSpy = sinon.spy(console, "log");
        const calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(consoleLogSpy.calledWithExactly("The total is: 10")).to.be.true;
        expect(calculateNumberStub.calledWithExactly("SUM", 100, 20)).to.be.true;
    });
});
