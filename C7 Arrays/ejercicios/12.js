function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
 
  let arrayMayusculas = array.map(function(string){
    return string.toUpperCase();
  })
  return arrayMayusculas;
}

module.exports = convertirStringAMayusculas;
