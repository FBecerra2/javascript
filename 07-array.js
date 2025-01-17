myArray = [];

//push es un metodo que agrega un elemento al final del array

myArray.push(1);
myArray.push(2);
myArray.push(3);

console.log(myArray);

//pop es un metodo que elimina el ultimo elemento del array

myArray.pop();
console.log(myArray);

//shift es un metodo que elimina el primer elemento del array

myArray.shift();
console.log(myArray);

//unshift es un metodo que agrega un elemento al principio del array

myArray.unshift(4, 'Facundo');
console.log(myArray);

//length es una propiedad que devuelve la cantidad de elementos del array

console.log(myArray.length);

//clear es un metodo que elimina todos los elementos del array inicializarlo de nuevo
//myArray = [];

//slice es un metodo que devuelve una copia de una parte del array

myNewArray = myArray.slice(1, 2);
console.log(myNewArray);

//splice es un metodo que cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

myArray.splice(1, 0, 5, 6); //Agrega 5 y 6 en la posicion 1 del array sin eliminar ningun elemento
console.log(myArray);
