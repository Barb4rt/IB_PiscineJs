function firstDuplicateValue(array) {
  for (const element of array) {
    if (element < 0 || !Number.isInteger(element)) {
      return "Le tableau contient des nombres négatifs ou décimals";
    }
  }
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (array.indexOf(element) !== array.lastIndexOf(element)) {
      return element;
    }
  }
  return -1;
}

exports.firstDuplicateValue = firstDuplicateValue;
