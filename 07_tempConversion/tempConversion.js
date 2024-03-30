const convertToCelsius = function(feren) {
  return ((feren - 32) * 5) / 9;
};

const convertToFahrenheit = function(cel) {
  return (cel * 9) / 5 + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
