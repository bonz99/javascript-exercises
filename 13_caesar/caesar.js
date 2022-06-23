const caesar = function(str, shift) {
    let newStr = "";
    let charCode;
    shift = shift % 26;
    for (let char of str) {
        charCode = char.charCodeAt(0);
        if (charCode >= 97 && charCode <= 122) {
            char = String.fromCharCode(charCode + shift);
            charCode = char.charCodeAt(0);
            if (charCode > 122) {
                char = String.fromCharCode(charCode - 26);
            } else if (charCode < 97) {
                char = String.fromCharCode(charCode + 26);
            }
        }
        else if (charCode >= 65 && charCode <= 90) {
            char = String.fromCharCode(charCode + shift);
            charCode = char.charCodeAt(0);
            if (charCode > 90) {
                char = String.fromCharCode(charCode - 26);
            } else if (charCode < 65) {
                char = String.fromCharCode(charCode + 26);
            }
        }
        newStr += char;
    }
    return newStr;
};

// Do not edit below this line
module.exports = caesar;
