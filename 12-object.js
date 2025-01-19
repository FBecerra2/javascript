let person = {
  name: 'John',
  age: 30,
  alias: 'John Doe',
};

//acceder a las propiedades
console.log(person.name); // John

person.name = 'Jane';
console.log(person.name); // Jane

person.age = '37';

console.log(person.age); // 37

//eliminar una propiedad
delete person.age;
console.log(person.age); // undefined

//agregar una propiedad
person.email = 'hola@aslkj.com';
console.log(person.email); //

console.log(person);

//metodos

person2 = {
  name: 'John',
  age: 42,
  alias: 'Wick',
  walk: function () {
    console.log('Caminando');
  },
};

person2.walk();

//anidacion de objetos

person3 = {
  name: 'Al',
  age: 42,
  alias: 'Elric',
  address: {
    street: 'Main',
    number: 123,
    home: function () {
      console.log('Va acasa');
    },
  },
};

console.log(person3.address.street); // Main
console.log(person3.address.number); // 123
person3.address.home(); // Va acasa

//Igualdad de objetos

let person32 = {
  name: 'John',
  age: 30,
  alias: 'John Doe',
};
person4 = {
  name: 'John',
  age: 30,
  alias: 'John Doe',
};
console.log(person4, person32);
console.log(person32 == person4); // false

//funcion como objeto, NO ES IDEAL USAR ESTO
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person6 = new Person('John', 30);
console.log(person6.age); // John
console.log(person6); // John
