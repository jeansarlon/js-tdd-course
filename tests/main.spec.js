/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
const expect = require('chai').expect;

describe('Main ', () => {
  let arr;
  before(() => {});
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  it('arr is an array', () => {
    expect(arr).to.be.a('array');
  });


  it('push', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('pop', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });
});
