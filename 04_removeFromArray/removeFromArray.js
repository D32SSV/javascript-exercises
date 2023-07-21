const removeFromArray = function(array, ...args) {
    const result = array.filter((value) => {
        return !args.includes(value)
    })
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
