const color = 'yellow';

// switch (color) {
//   case 'red':
//     // instruction
//     alert('YES RED');
//     break;

//   case 'blue':
//     //instructions
//     alert('BLUE');
//     break;

//   case 'green':
//     // instructions
//     alert('yellow');
//     break;

//   default:
//     alert('try again');
// }

// switch (color) {
//   case 'red':
//     console.log('Color is red');
//     break;
//   case 'blue':
//     console.log('Color is blue');
//     break;
//   default:
//     console.log('Color is not red or blue');
//     break;
// }

let day; // undefined

switch (new Date().getDay()) {
  case 0:
    day = 'Dimanche';
    break;
  case 1:
    day = 'Lundi';
    break;
  case 2:
    day = 'Mardi';
    break;
  case 3:
    day = 'Mercrdi';
    break;
  case 4:
    day = 'jeudi';
    break;
  case 5:
    day = 'vendredi';
    break;
  case 6:
    day = 'Samedi';
    break;
}

console.log(`Today is ${day}`);

// version : tests
let day1;
let numberDay = new Date().getDay();

if (numberDay === 0) {
  day1 = 'Dimanche';
} else if (numberDay === 1) {
  day1 = 'Lundi';
} else if (numberDay === 2) {
  day1 = 'Mardi';
} else if (numberDay === 3) {
  day1 = 'Mercredi';
} else if (numberDay === 4) {
  day1 = 'jeudi';
} else if (numberDay === 5) {
  day1 = 'Vendredi';
} else if (numberDay === 6) {
  day1 = 'Samedi';
}

console.log(`Today is ${day1}`);
