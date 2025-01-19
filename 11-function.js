function myFunc() {
  console.log('Hello');
}

myFunc(); // Hello

//com parametros
function myFunc(param1, param2) {
  console.log(param1, param2);
}

myFunc('Hello', 'World'); // Hello World

//funcion anonima
const myFunc2 = function (name) {
  console.log(name);
};

myFunc2('Pepe'); // Hello

//arrow function
const myFunc3 = (name) => {
  console.log(name);
};

myFunc3('Pepe3'); // Hello

//retorno de valores
function mult(a, b) {
  return a * b;
}

console.log(mult(2, 3)); // 6

//funcion anidada

function externa() {
  console.log('externa');
  function interna() {
    console.log('interna');
  }
  interna();
}

externa(); // externa

externa();
