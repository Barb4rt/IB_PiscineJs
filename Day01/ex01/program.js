function firstDuplicateValue(array) {
  for (const element of array) {
    if (element < 0 || !Number.isInteger(element)) {
      return "Le tableau contient des nombres négatifs ou décimals";
    }
  }
  let cachedArray = [];

  for (let index = 0; index < array.length; index++) {
    console.log(cachedArray);
    console.log(cachedArray.indexOf(array[index]));
    console;
    if (cachedArray.indexOf(array[index]) != -1) {
      return array[index];
    }
    cachedArray.push(array[index]);
  }
  return -1;
}

exports.firstDuplicateValue = firstDuplicateValue;
