function twoNumberSum(array, targetSum) {
    if (array.length <= 0) {
        console.log("Your array is empty, smart guy ;)");
    }
    let result = [];
    for (let index = 0; index < array.length - 1; index++) {
        const element1 = array[index];
        for (let key = index + 1; key < array.length; key++) {
            const element2 = array[key];
            if (element1 + element2 == targetSum) {
                result.push([element1, element2]);
            }
        }
    }
    if (!result.length > 0) {
        console.log("No solution found... Sorry :(");
        return false
    }
    result.forEach((element) => {
        console.log(element);
    });
    return result
}
exports.twoNumberSum = twoNumberSum;