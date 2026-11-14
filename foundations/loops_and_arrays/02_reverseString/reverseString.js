const reverseString = function(s) {

    let letters = s.split('');
    let result = ''

    for (let i = s.length - 1; i >= 0; i--)
    {
        result += letters[i];
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
