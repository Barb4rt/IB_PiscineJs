function isPalindrome(string) {
    if (string === "") {
        return "I can't do anything with NOTHING..."
    }
    string = string.toLowerCase()
    stringReversed = [...string].reverse().join('')
    if (string === stringReversed) {
        return `${string} is a palindrom`
    }
    return `${string} is not a palindrom`
}

exports.isPalindrome = isPalindrome;