function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  if (array.length === 0) return 0;

  const maxNum = Math.max(...array);
  const indiceDelMayor = array.indexOf(maxNum);

  return indiceDelMayor;
}

module.exports = encontrarIndiceMayor;
