const sinon = require("sinon");
const sendPaymentRequestToApi = require('./3-payment');
const {describe, it} = require("mocha");
const Utils = require('./utils');
const expect = require("chai").expect;

describe("make sure the same math is used", function() {
    it("checking the execution of calculateNumber once", function() {
	const spy = sinon.spy(console, "log");
	const stub = sinon.stub(Utils, "calculateNumber").returns(10);
	sendPaymentRequestToApi(100, 20);
	expect(spy.calledOnceWith("The total is: 10")).to.be.true;
	expect(stub.calledOnceWith("SUM", 100, 20)).to.be.true;
	spy.restore();
	stub.restore();
    });
});
