const sinon = require("sinon");
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe("make sure the same math is used", function() {
    it("checking the execution of calculateNumber once", function() {
	const spy = sinon.spy(Utils, "calculateNumber");
	sendPaymentRequestToApi(100, 20);
	assert(spy.calledOnce);
	spy.restore();
    });
});
