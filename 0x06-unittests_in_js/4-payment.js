const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  try {
    const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${total}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
module.exports = sendPaymentRequestToApi;
