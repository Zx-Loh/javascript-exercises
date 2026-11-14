const palindromes = function (word) {
    let original = word.split("");
    let letters = original.filter((letter) => {
        if (letter.toLowerCase() == letter.toUpperCase())
        {
            return true;
        }
        });
    let reversedLetters = letters.reverse();

    return reversedLetters == letters;
};

// Do not edit below this line
module.exports = palindromes;
