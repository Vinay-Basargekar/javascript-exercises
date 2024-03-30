const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
  arr.reduce((res,cur) => {
    return res+cur;
  })
};

const multiply = function(arr) {
  arr.reduce((res, cur) => {
		return res * cur;
	});
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(num) {
  if(num == 0){
    return 1;
  }
	return num * factorial(num-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
