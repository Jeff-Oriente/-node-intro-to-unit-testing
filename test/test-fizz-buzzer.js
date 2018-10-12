'use strict';
const chai = require('chai');
const expect = chai.expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {
  it('should throw if called with a string', function () {
    // expect(fizzBuzzer('a string')).to.throw(Error);
    expect(() =>  fizzBuzzer('Im not a number!')).to.throw(Error);
  });

  it('should throw if called with an array', function () {
    expect(() => fizzBuzzer([])).to.throw(Error);
  });

  it('should return "fizz-buzz" for only multiples of 15', function () {
    const goodInputs = [15, 30, 45, 120];
    goodInputs.forEach(function (input) {
      const result = fizzBuzzer(input);
      expect(result).to.equal('fizz-buzz');
    });

    const badInputs = [3, 9, 20];
    badInputs.forEach(function (input) {
      expect(fizzBuzzer(input)).to.not.equal('fizz-buzz');
    });
  });
  
  it('should return "buzz" for multiples of 5', function () {
    const goodInputs = [10, 20, 25, 40];
    goodInputs.forEach(function (input) {
      const result = fizzBuzzer(input);
      expect(result).to.equal('buzz');
    });

    const badInputs = [6, 13, 23, 51];
    badInputs.forEach(function (input) {
      expect(fizzBuzzer(input)).to.not.equal('buzz');
    });
  });

  it('should return "fizz" for multiples of 3', function () {
    const goodInputs = [6, 9, 18, 24];
    goodInputs.forEach(function (input) {
      const result = fizzBuzzer(input);
      expect(result).to.equal('fizz');
    });

    const badInputs = [5, 10, 15, 19];
    badInputs.forEach(function (input) {
      expect(fizzBuzzer(input)).to.not.equal('fizz');
    });
  });
});
