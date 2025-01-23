//clases son funciones especiales que nos permiten crear objetos

class Person {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

let person = new Person('John', 30, 'John Doe');
console.log(person);
console.log(person.name);

let person2 = new Person('Jane', 32, 'Jane Doe');
console.log(person2);

class DefaultPerson {
  constructor(name = 'Default', age = 32, alias = 'Default Alias') {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

let person3 = new DefaultPerson();
console.log(person3);

class PersonWithFunction {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
  walk() {
    console.log('Caminando');
  }
}

let person4 = new PersonWithFunction('John', 30, 'John Doe');
person4.walk();

class PersonProvate {
  #bank;
  constructor(name, age, alias, bank) {
    this.name = name;
    this.age = age;
    this.alias = alias;
    this.#bank = bank;
  }
  pay() {
    this.#bank;
  }
}

let person5 = new PersonProvate('John', 30, 'John Doe', 'IBAN123456789');
console.log(person5.bank);
person5.pay();

//getter y setter

class PersonWithGetterSetter {
  #name;
  #age;
  #alias;
  #bank;
  constructor(name, age, alias, bank) {
    this.#name = name;
    this.#age = age;
    this.#alias = alias;
    this.#bank = bank;
  }
  get getAlias() {
    return this.#alias;
  }
  set bank(newBank) {
    this.#bank = newBank;
  }
  get showBank() {
    return this.#bank;
  }
}

person6 = new PersonWithGetterSetter(
  'John',
  30,
  'John Doe',
  'IBAN098765454349'
);
console.log(person6);
console.log(person6.getAlias);
person6.bank = 'new IBAN098765454349';

console.log(person6.showBank);

//Herencia en clases es una forma de reutilizar codigo

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log('Hablando');
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log('Ladrando');
  }
}

let dog = new Dog('Firulais', 'Pastor Aleman');
console.log(dog);
dog.speak();
dog.bark();
