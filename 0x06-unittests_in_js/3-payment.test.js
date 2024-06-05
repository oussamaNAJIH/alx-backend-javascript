const sinon = require("sinon");
const sendPaymentRequestToApi = require('./3-payment');
const {describe, it} = require("mocha");
const Utils = require('./utils');
const expect = require("chai").expect;

describe("make sure the same math is used", function() {
    it("checking the execution of calculateNumber once", function() {
	const spy = sinon.spy(Utils, "calculateNumber");
	sendPaymentRequestToApi(100, 20);
	expect(spy.calledOnce).to.be.true;
	spy.restore();
    });
});
