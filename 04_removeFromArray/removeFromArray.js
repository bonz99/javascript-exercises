const removeFromArray = function(array, ...itemsToRemove) {
    for (let i = 0; i < array.length; i++) {
        if (itemsToRemove.includes(array[i])) {
            array.splice(array.indexOf(array[i]), 1);
            i--;
        } else {
            continue;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
