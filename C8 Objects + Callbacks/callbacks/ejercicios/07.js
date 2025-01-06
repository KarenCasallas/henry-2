function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   
   var inicialA = arrayOfStrings.filter((Element) => Element[0]==="a");
   return (inicialA);
}

module.exports = filter;
