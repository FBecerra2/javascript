//map
//es una estructura de datos que permite almacenar pares clave-valor

let myMap = new Map();

console.log(myMap);

//inicializacion
myMap = new Map([
  ['Facundo', 1],
  ['Pepe', 2],
  ['Juan', 3],
]);

console.log(myMap);

//metodos comunes
//set es un metodo que agrega un par clave-valor al mapa
myMap.set('Carlos', 4);
console.log(myMap);
myMap.set('Carlos', 'Marto');
console.log(myMap);

//get es un metodo que devuelve el valor de una clave
console.log(myMap.get('Carlos'));

//has es un metodo que devuelve un booleano si la clave esta en el mapa
console.log(myMap.has('Carlsos'));

//delete es un metodo que elimina un par clave-valor del mapa
myMap.delete('Carlos');
console.log(myMap);

console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.size);
console.log(myMap.entries());
//clear es un metodo que elimina todos los pares clave-valor del mapa
myMap.clear();
