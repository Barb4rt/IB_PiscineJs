function runLengthEncoding(string) {
  if (string === "" || !string) {
    return "Your's string is empty, smart guy ;)";
  }
  let result = "";
  let letter = string[0];
  let letterNumber = 1;
  for (index = 1; index < string.length + 1; index++) {
    if (string[index] == letter && letterNumber < 9) {
      letterNumber++;
    } else {
      result = result + letterNumber + letter;
      letter = string[index];
      letterNumber = 1;
    }
  }
  return result;
}

exports.runLengthEncoding = runLengthEncoding;

console.log(runLengthEncoding("aA"));
