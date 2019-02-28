/* eslint-disable no-unused-expressions */
/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */


import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {
  describe('Smoke Tests', () => {
    it('Should exist the method sum', () => {
      expect(sum).to.exist;
      expect(sum).to.be.an.instanceof(Function);
    });

    it('Should exist the method sub', () => {
      expect(sub).to.exist;
      expect(sub).to.be.an.instanceof(Function);
    });

    it('Should exist the method mult', () => {
      expect(mult).to.exist;
      expect(mult).to.be.an.instanceof(Function);
    });

    it('Should exist the method div', () => {
      expect(div).to.exist;
      expect(div).to.be.an.instanceof(Function);
    });
  });

  describe('sum', () => {
    it('Should return 4 when sum(2, 2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('Should return 4 when sub(6, 2)', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });
  });

  describe('mult', () => {
    it('Should return 4 when mult(2, 2)', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('div', () => {
    it('Should return `Não é possível divisão por ZERO!` when div by 0', () => {
      expect(div(4, 0)).to.be.equal('Não é possível divisão por ZERO!');
    });
    it('Should return 1 when div(2, 2)', () => {
      expect(div(2, 2)).to.be.equal(1);
    });
  });
});
