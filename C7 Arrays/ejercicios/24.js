function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:

  let resultado = [];
  for (let i = 0; i < 10; i++) { //Itera hasta 10 veces*/
    if (i === 5) { //Cuando el numero de iteraciones sea 5*/ 
      continue; // Salta esta iteración y continua con la siguiente;*/

    }
    num += 2;
    resultado.push(num); //Aumenta el numero recibido en 2 y lo guarda en el Array*/

  }

  return resultado;









}

module.exports = continueStatement;
