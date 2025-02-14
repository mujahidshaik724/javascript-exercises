const fibonacci = function (feb) {
  let num = parseInt(feb);
  if (num > 2) {
    let a = 0;
    let b = 1;
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      sum = a + b;
      a = b;
      b = sum;
    }
    return sum;
  } else if (num == 1) {
    return 1;
  } else if (num == 0) {
    return 0;
  } else if (num == 2) {
    return 1;
  } else if (num != Number) {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
