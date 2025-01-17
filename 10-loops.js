//bucle for es un bucle que se repite hasta que una condicion se cumple

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const numbers = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log('-WHILE-');
//while es un bucle que se repite mientras una condicion se cumple

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

//do while es un bucle que se repite al menos una vez y luego se repite mientras una condicion se cumple
console.log('-DO WHILE-');
let j = 9;
do {
  console.log(j);
  j++;
} while (j <= 8);

//for of es un bucle que recorre los elementos de un objeto iterable
console.log('-FOR OF-');

const number = [1, 2, 3, 4, 5, 6];

for (let number of numbers) {
  console.log(number);
}

myMap = new Map([
  ['Facundo', 1],
  ['Pepe', 2],
  ['Juan', 3],
]);

for (let valor of myMap) {
  console.log(valor);
}

//Buenas practicas para bucles
//Evitar bucles infinitos
//Evitar bucles anidados
//Evitar bucles con muchas iteraciones
//Evitar bucles con muchas condiciones
//Evitar bucles con muchas variables
//Evitar bucles con muchas operaciones
