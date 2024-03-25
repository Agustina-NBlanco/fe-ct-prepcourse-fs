function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:


  let contador = 0;
  for (let i = 0; i < numeros.length; i++) { //itera sobre cada numero en el array;

    if (numeros[i] % 2 != 0) { //Para saber si el numero es impar;

      continue; //Salta esta iteracion y continua con la siguiente;
    }

    contador++;
  }

  return contador;
}

module.exports = contarParesConContinue;
