function firstNonRepeatingCharacter(string) {
  if (string === "" || typeof string !== "string") {
    return "I can't do anything with NOTHING...";
  }
  string = string.toLowerCase();
  for (let index = 0; index < string.length; index++) {
    if (
      string.indexOf(string.charAt(index)) ==
      string.lastIndexOf(string.charAt(index))
    ) {
      return index;
    }
  }
  return -1;
}
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
