/* eslint-disable object-curly-newline */

const sum = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mult = (n1, n2) => n1 * n2;
const div = (n1, n2) => (!n2 ? 'Não é possível divisão por ZERO!' : n1 / n2);


export { sum, sub, mult, div };
