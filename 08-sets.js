//set es para crear un conjunto de elementos unicos en un array

let mySet = new Set();

//inicializacion
mySet = new Set(['Facundo', 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(mySet);

//metodos comunes

//add es un metodo que agrega un elemento al conjunto
mySet.add('pepe');
console.log(mySet);

//delete es un metodo que elimina un elemento del conjunto
mySet.delete('Facundo');
console.log(mySet);
console.log(mySet.delete('Facundo'));

//has es un metodo que devuelve un booleano si el elemento esta en el conjunto
console.log(mySet.has('Facundo'));

//convertir un set a un array
let myArray = Array.from(mySet);
console.log(myArray);

//diferencia entre set y array
//set no permite elementos duplicados
//array permite elementos duplicados
