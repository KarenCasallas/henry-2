const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:

  var encontrarElemento = function(elemento){
    var elemento = null;
    for (let i=0;i<array.length;i++){
      if (array[i] === elemento){
        return (array[i]);
      } else
      return ("No se encontró el elemento");
    }
  }
return callback(array,elemento);
};

module.exports = buscarElemento;
