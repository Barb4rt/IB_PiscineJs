array = [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20];

function tabTriCarre(array) {
  if (array.length <= 0) {
    return [];
  }
  const trieAsc = (x, y) => {
    return x - y;
  };
  let result = [];

  for (const element of array) {
    if (!Number.isInteger(element)) {
      return "Le tableau contient des nombres décimaux";
    }
    result.push(element ** 2);
  }
  result = result.sort(trieAsc);
  return result;
}

exports.tabTriCarre = tabTriCarre;

console.log(tabTriCarre(array));
