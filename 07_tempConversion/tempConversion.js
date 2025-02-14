const convertToCelsius = function (temp) {
  // let ans = ((temp - 32) * 5) / 9;
  // ans = ans.toFixed(1);
  // let res = parseFloat(ans);
  // return ans;
  res = parseFloat(((temp - 32) * (5 / 9)).toFixed(1));
  return res;
};

const convertToFahrenheit = function (temp) {
  let res = parseFloat(((temp * 9) / 5 + 32).toFixed(1));

  return res;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
