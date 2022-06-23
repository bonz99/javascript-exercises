const palindromes = function (string) {
    let strWithOnlyLetters = string.replace(/[^a-zA-Z]/g, "").toLowerCase();
    let reversedString = strWithOnlyLetters.split("").reverse().join("");
    return strWithOnlyLetters === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
