const removeFromArray = function (ar1, ...ar2) {
  let ar3 = ar1.filter((item) => !ar2.includes(item));
  return ar3;
};

// Do not edit below this line
module.exports = removeFromArray;
