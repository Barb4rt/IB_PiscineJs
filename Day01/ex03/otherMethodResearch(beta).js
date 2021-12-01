let string = "AAAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaBBCCCCDD";

function runLengthEncoding(string) {
  if (string === "" || !string) {
    return "Your's string is empty, smart guy ;)";
  }
  string = string.toUpperCase();
  let result;
  let index = 0;
  const sliceBy9 = (letter, numberOfLetter) => {
    let sliced;
    while (numberOfLetter > 9) {
      numberOfLetter = numberOfLetter % 9;
      sliced = sliced + `${numberOfLetter}${letter}`;
    }
    return sliced;
  };
  while (index < string.length) {
    const letter = string.split(string[index]);
    let numberOfLetter = letter.length - 1;
    if (numberOfLetter > 9) {
      result =
        result + `9${string[index]}` + sliceBy9(string[index], numberOfLetter);
    } else {
      result = result + `${numberOfLetter}${string[index]}`;
    }
    console.log(result);
    index += numberOfLetter;
  }
}
exports.runLengthEncoding = runLengthEncoding;

runLengthEncoding(string);
