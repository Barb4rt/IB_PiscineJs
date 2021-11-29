function levDist(str1, str2){
    if (!str1.length) return str2.length;
    if (!str2.length) return str1.length;
  const matrice = [];
  for (iStr2 = 0; iStr2 <= str2.length; iStr2++) {
    matrice[iStr2] = [iStr2];
    for (iStr1 = 1; iStr1 <= str1.length; iStr1++) {
      matrice[iStr2][iStr1] = 
      iStr2 === 0 ? iStr1 : Math.min(
              matrice[iStr2 - 1][iStr1] + 1,
              matrice[iStr2][iStr1 - 1] + 1, 
              matrice[iStr2 - 1][iStr1 - 1] + (str1[iStr1 - 1] === str2[iStr2 - 1] ? 0 : 1)
            );
    }
  }
  return matrice[str2.length][str1.length];
};

exports.levDist =  levDist;
