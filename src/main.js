// const sum = (num1, num2) => num1 + num2;
// const sub = (num1, num2) => num1 - num2;
// const mult = (num1, num2) => num1 * num2;
// const div = (num1, num2) => (num2 === 0 ? 'Não é possível divisão por zero' : num1 / num2);

// export { sum, sub, mult, div };

const FizzBuzz = num => {
  if (num === 0) return 0;
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
};

const foo = () => 'anos';

export default FizzBuzz;
