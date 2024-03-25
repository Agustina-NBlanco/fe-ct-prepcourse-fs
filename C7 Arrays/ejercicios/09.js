function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   if (array.length > 0 || array.length === 1 ) {
      return Math.floor(Math.random() * (array.length + 1));
   } else {
      return undefined;
   }
}

module.exports = obtenerElementoAleatorio;
