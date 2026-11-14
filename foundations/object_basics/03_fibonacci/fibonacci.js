const fibonacci = function(number) {
    if (number <= 0 || !Number.isInteger(number))
    {
        return "OOPS";
    }

    let fib = [1, 1];

    for (let i = 2; i < number + 1; i++)
    {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
