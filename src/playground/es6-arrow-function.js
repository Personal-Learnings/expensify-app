//Regular Function
const square = function(value) {
  return value * value;
};

//Arrow Function
const squareArrow = value => {
  return value * value;
};

//or
// Expression/Shorthand Syntax for Arrow Function which has only one statement
const squareArrowNew = value => value * value;

console.log(square(8));
console.log(squareArrow(8));
console.log(squareArrowNew(8));

const getFirstNameArrow = fullName => {
  return fullName && fullName.split(" ")[0];
};

const getFirstNameArrowNew = fullName => fullName && fullName.split(" ")[0];

console.log(getFirstNameArrow("Madanraj Venkatesan"));
console.log(getFirstNameArrowNew("Madanraj Venkatesan"));
