'use strict';
const chai = require('chai');
const expect = chai.expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {
  it('should throw if called with a string', function () {
    expect(() => {
      fizzBuzzer('Im not a number!');
    }).to.throw(Error);
  });

  it('should throw if called with an array', function () {
    expect(() => {
      fizzBuzzer([]);
    }).to.throw(Error);
  });
});
