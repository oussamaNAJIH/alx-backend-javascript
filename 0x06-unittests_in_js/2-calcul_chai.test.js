const calculateNumber = require('./2-calcul_chai');
const expect = require("chai").expect;

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 when inputs are -0.1 and 0.1', function() {
      expect(calculateNumber('SUM', -0.1, 0.1)).to.equal(0);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0 when inputs are 0.5 and 0.5', function() {
      expect(calculateNumber('SUBTRACT', 0.5, 0.5)).to.equal(0);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when inputs are 1.4 and 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return "Error" when inputs are 1.4 and 0.4', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
    });
  });

  it('should throw an error when type is invalid', function() {
    expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid type');
  });
});
