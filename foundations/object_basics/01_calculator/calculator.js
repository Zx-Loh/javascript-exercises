const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((total, item) => {
        return total = total + item;
    }, 0)
};

const multiply = function(nums) {
	return nums.reduce((total, item) => {
        return total = total * item;
    }, 1)
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
    let total = 1;
    
	for (let i = num; i > 0; i--)
    {
        total *= i;
    }

    return total;
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
