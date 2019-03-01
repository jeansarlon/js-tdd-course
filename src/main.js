/* eslint-disable object-curly-newline */

const fizz = 'Fizz';
const buzz = 'Buzz';
const FizzBuzz = (n) => {
  if (!n) return 0;
  if (n % 3 === 0 && n % 5 === 0) return fizz + buzz;
  if (n % 3 === 0) return fizz;
  if (n % 5 === 0) return buzz;

  return n;
};

export default FizzBuzz;
