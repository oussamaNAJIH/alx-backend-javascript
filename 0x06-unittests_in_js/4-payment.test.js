const sinon = require("sinon");
const sendPaymentRequestToApi = require('./3-payment');
const { describe, it } = require("mocha");
const Utils = require('./utils');

describe("make sure the same math is used", function() {
    it("checking the execution of calculateNumber once", function() {
        const consoleLogSpy = sinon.spy(console, "log");
        const calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(consoleLogSpy);
        sinon.assert.calledWithExactly(consoleLogSpy, "The total is: 10");
        sinon.assert.calledOnce(calculateNumberStub);
        sinon.assert.calledWithExactly(calculateNumberStub, "SUM", 100, 20);
        consoleLogSpy.restore();
        calculateNumberStub.restore();
    });
});
