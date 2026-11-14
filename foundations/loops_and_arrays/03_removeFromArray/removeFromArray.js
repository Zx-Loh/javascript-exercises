const removeFromArray = function(arr, ...elem) {

    let filtered = arr.filter((item) => !(elem.includes(item)));
    return filtered;

};

// Do not edit below this line
module.exports = removeFromArray;
