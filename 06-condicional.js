let age = 4;
aname = 'Facunda';

if (age == 37) {
  console.log('Puede ingresar al bar');
} else if (age < 18 && aname == 'Facundo') {
  console.log('No puede ingresar al bar');
} else {
  console.log('Estas viejo para ingresar al bar');
}

const message = (age = 37 ? 'La edad es 37' : 'La edad no es 37');

console.log(message);

let day = 4;
let dayName;

switch (day) {
  case 0:
    dayName = 'Domingo';
    break;
  case 1:
    dayName = 'Lunes';
    break;
  case 2:
    dayName = 'Martes';
    break;
  case 3:
    dayName = 'Miercoles';
    break;
  case 4:
    dayName = 'Jueves';
    break;
  case 5:
    dayName = 'Viernes';
    break;
  case 6:
    dayName = 'Sabado';
    break;
  default:
    dayName = 'Dia no valido';
    break;
}

console.log(dayName);
