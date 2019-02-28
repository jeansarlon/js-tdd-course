/* eslint-disable no-unused-expressions */
/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */


// Se o número for divisivel por 3, escreva Fizz;
// Se o número for divisivel por 5, escreva Buzz;
// Se o número for divisivel por 3 e 5, escreva FizzBuzz;
// Se não for múltiplo de nada retorna um número;

import { expect } from 'chai';
import fizzBuzz from '../src/main';

describe('FizzBuzz', () => {
  it('Should return `Fizz` when multiple of 3', () => {
    expect(fizzBuzz(3)).to.be.equal('Fizz');
  });

  it('Should return `Buzz` when multiple of 5', () => {
    expect(fizzBuzz(5)).to.be.equal('Buzz');
  });

  it('Should return `FizzBuzz` when multiple of e and 5', () => {
    expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('Should return the number when non-multiple', () => {
    expect(fizzBuzz(7)).to.be.equal(7);
  });
});
