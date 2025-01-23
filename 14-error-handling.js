// Excepcion

//let myObjet;
//console.log(myObjet.email);

//try catch

try {
  let myObjet;
  console.log(myObjet.email);
} catch (error) {
  console.log(error.message);
}

//finally

try {
  let myObjet;
  console.log(myObjet.email);
} catch (error) {
  console.log(error.message);
} finally {
  console.log('Se ejecuta siempre');
}

//lanzar excepciones

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('no se pueden sumar los num');
  }
  return a + b;
}

console.log(sum(1, 2));

//throw new Error('Este es un error');
