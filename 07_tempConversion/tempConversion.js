const ftoc = function(temp) {
  let newTemp = temp - 32;
  let divisor = 5 / 9;
  let result = newTemp * divisor;
  let resultRounded = Math.round(result * 10) / 10;
  return resultRounded;
};

const ctof = function(temp) {
  let divisor = 9/5;
  let newTemp = temp * divisor;
  let result = newTemp + 32;
  let resultRounded = Math.round(result * 10) / 10;
  return resultRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
