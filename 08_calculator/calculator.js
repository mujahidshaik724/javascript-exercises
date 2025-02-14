const add = function (a, b) {
  let ans = a + b;
  return ans;
};

const subtract = function (a, b) {
  let ans = a - b;
  return ans;
};

const sum = function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
};

const multiply = function multiplyArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let total = 1;
  for (let num of arr) {
    total *= num;
  }
  return total;
};

const power = function power(a, b) {
  let ans = 1;
  for (let i = 0; i < b; i++) {
    ans *= a;
  }
  return ans;
};

const factorial = function (num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
