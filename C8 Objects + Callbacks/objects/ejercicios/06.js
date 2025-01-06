const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  numeroProp=[];
  for(var prop in objeto){
    numeroProp.push(prop);
    
  } return(numeroProp.length);
};

module.exports = contarPropiedades;
