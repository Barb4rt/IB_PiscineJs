function threeLargestNumbers(array) {
    if (array.length <= 3) {
        console.log("Your array is too small, smart guy ;)");
    }
    let result = [];
    for (let index = 0; index < 3; index++) { 
        let indexMax =  array.indexOf(Math.max(...array)) 
        let maxValue = Math.max(...array)
        result.push(maxValue)
        array.splice(indexMax,1)
    }
    result = result.reverse()
    console.log(result);
    return result
}


exports.threeLargestNumbers = threeLargestNumbers;
