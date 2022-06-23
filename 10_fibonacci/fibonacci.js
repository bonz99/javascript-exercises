const fibonacci = function(number) {
    if (number < 0) { return "OOPS"}
    let array = [1];
    let num1 = 0;
    let num2 = 1;
    let sum = 0;
    for (let i = 0; i < number-1; i++) {
        sum = num1 + num2;
        array.push(sum);
        num1 = num2;
        num2 = sum;
    }
    return array[array.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
