const removeFromArray = function(array, ...removeItems) {
    // let newArray = []

    // for (let item of array) {
    //     if (!removeItems.includes(item)) {
    //         newArray.push(item);
    //     }
    // }

    // return newArray;

    return array.filter(item => !removeItems.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
