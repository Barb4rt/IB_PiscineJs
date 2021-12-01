Bugdet = 150000000;
recetteS1 = 31000000;

function blockBuster(budget, recetteS1) {
  let semaines = 1;
  let recetteTotal = recetteS1;
  console.log(recetteTotal);
  while (recetteTotal >= budget) {
    let semaine = (recetteTotal = recetteTotal + recetteTotal / 20);
    semaines++;
    console.log(recetteTotal);
  }
  return semaines;
}

// Merci de ne pas effacer la ligne en dessous.
exports.blockBuster = blockBuster;

console.log(blockBuster(Bugdet, recetteS1));
