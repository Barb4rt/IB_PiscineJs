function isPalindrome(string) {
    if (string === "") {
        console.log("I can't do anything with NOTHING...");
    }
    string = string.toLowerCase()
    stringReversed = [...string].reverse().join('')
    if (string === stringReversed) {
        console.log(`${string} is a palindrom`);
        return true
    }
    console.log(`${string} is not a palindrom`);
    return false
}

exports.isPalindrome = isPalindrome;