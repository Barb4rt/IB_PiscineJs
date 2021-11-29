function firstNonRepeatingCharacter(string) {
    if (string === "") {
        console.log("I can't do anything with NOTHING...");
    }
    string = string.toLowerCase()
    for (let index = 0; index < string.length; index++) {
        if (string.indexOf(string.charAt(index)) == string.lastIndexOf(string.charAt(index)) ) {
            return index
        }
    }
    return "No solution found... Sorry :("
}
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;