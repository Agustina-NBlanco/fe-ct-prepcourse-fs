function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let sumaDeDatos = 0;

  for (let i = 0; i < resultadosTest.length; i++) {
    sumaDeDatos += resultadosTest[i];
  }

  return sumaDeDatos / resultadosTest.length;
}

module.exports = promedioResultadosTest;
