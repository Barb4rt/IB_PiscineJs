function validIPAddresses(string) {
  if (string.length > 12 || string == "") {
    return "Maximum 12 caractères !!!";
  }
  let possibleIP = [];
  let tempIp = [];
  let validIp = [];
  const ipRegex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const checkZero = (possibleIP) => {
    for (
      let adresseIpIndex = 0;
      adresseIpIndex < possibleIP.length;
      adresseIpIndex++
    ) {
      const number = possibleIP[adresseIpIndex];
      let valid = true;
      for (let cellIndex = 0; cellIndex < 4; cellIndex++) {
        let adresseIpCell = number.split(".")[cellIndex];
        if (adresseIpCell.charAt(0) === "0" && adresseIpCell.length > 1) {
          valid = false;
        }
      }
      if (valid) {
        validIp.push(number);
      }
    }
  };
  const validateIPAdresses = (possibleIP) => {
    possibleIP.forEach((element) => {
      if (ipRegex.test(element)) {
        tempIp.push(element);
      }
    });
    return validIp;
  };
  for (let firstIndex = 0; firstIndex < 3; firstIndex++) {
    for (
      let secondIndex = firstIndex + 1;
      secondIndex <= firstIndex + 3;
      secondIndex++
    ) {
      for (
        let thirdIndex = secondIndex + 1;
        thirdIndex < secondIndex + 3 + 1;
        thirdIndex++
      ) {
        possibleIP.push(
          [
            string.slice(0, firstIndex + 1) +
              "." +
              string.slice(firstIndex + 1, secondIndex + 1) +
              "." +
              string.slice(secondIndex + 1, thirdIndex + 1) +
              "." +
              string.slice(thirdIndex + 1),
          ].join("")
        );
      }
    }
  }
  validateIPAdresses(possibleIP);
  checkZero(tempIp);

  return validIp;
}
// Merci de ne pas effacer la ligne en dessous.
exports.validIPAddresses = validIPAddresses;
