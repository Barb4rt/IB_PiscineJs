array = [1, 2, 3, 11, 4, 5];

function tabTriCarre(array) {
  if (array.length <= 0) {
    return "Your array is empty, smart guy ;)";
  }
  const trieAsc = (x, y) => {
    return x - y;
  };
  let result = [];
  array = array.sort(trieAsc);

  for (const element of array) {
    if (!Number.isInteger(element)) {
      return "Le tableau contient des nombres décimaux";
    }
    result.push(Math.pow(element, 2));
  }
  return result;
}

exports.tabTriCarre = tabTriCarre;
