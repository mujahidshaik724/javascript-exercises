const sumAll =
  //   if (a === b) {
  //     return a;
  //   } else if (a < b) {
  //     let sum = 0;
  //     for (let i = a; i <= b; i++) {
  //       sum += i;
  //     }
  //     return sum;
  //   } else if (b > a) {
  //     let sum = 0;
  //     for (let i = a; i >= b; i--) {
  //       sum += i;
  //     }
  //     return sum;
  //   } else if (isNaN(a) || isNaN(b)) {
  //     return "ERROR";
  //   }
  // };
  function sumAll(a, b) {
    // Check if both a and b are valid numbers
    if (
      typeof a == "string" ||
      typeof b == "string" ||
      a < 0 ||
      b < 0 ||
      !Number.isInteger(a) ||
      !Number.isInteger(b)
    ) {
      return "ERROR";
    }

    // Swap a and b if a is greater than b
    else if (Number.isInteger(a) && Number.isInteger(b)) {
      if (a > b) {
        let t = a;
        a = b;
        b = t;
      }

      let sum = 0;
      for (let i = a; i <= b; i++) {
        sum += i;
      }
      return sum;
    } else {
      return "ERROR";
    }
  };
// Do not edit below this line
module.exports = sumAll;
