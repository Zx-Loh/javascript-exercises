const sumAll = function(a, b) {

    // Check that both inputs are positive integers
    if (!Number.isInteger(a) || !Number.isInteger(b))
    {
        return "ERROR";
    }

    if (a < 0 || b < 0)
    {
        return "ERROR";
    }

    let start = b;
    let end = a;

    if (a < b)
    {
        start = a;
        end = b;
    }

    let total = 0;

    for (let i = start; i < end + 1; i++)
    {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
