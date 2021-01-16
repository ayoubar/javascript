/*
    pseudo code  :
            si expression alors
                    ! instructions
            finsi

            si 9 > 0 alors
                ecrire('positif')
            finsi


             si expression alors
                    ! instructions
            sinon
                    ! instrctions
            finsi

*/

/*
    javascript
    synatxe:
        if(expression) {
            ! instructions
        }

*/

const n = -10;
const id = 100;
let u; // undefined
// >

// if (n > 0) {
//   // false
//   // ! instrcutions
//   alert('YES');
// }

// egalité
//! === type + value
if (id === 100) {
  console.log('vrai');
} else {
  console.log('faux');
}

// inegalité
// !== type + value
if (id !== 100) {
  console.log('id est diff de 100');
} else {
  console.log('id egale 100');
}

// test if undefined
if (u === undefined) {
  console.log(`${u} est undefined`);
}

if (typeof u === 'undefined') {
  console.log('u est undefined');
}

//const id = 100;
if (id >= 100) {
  console.log(`${id} est superieure ou egale  a 100`);
} else {
  console.log('NON');
}

const color = 'yellow';

// if (color === 'yellow') {
console.log('yellow');
// }
// if (color === 'blue') {
console.log('blue');
// }
// if (color === 'black') {
console.log('black');
// }

if (color === 'yellow') {
  console.log('yellow');
} else if (color === 'blue') {
  console.log('blue');
} else if (color === 'black') {
  console.log('black');
} else {
  console.log('red');
}

// Logical operator

const nom = 'anass';
const age = 23;

// Et logique
if (nom === 'anass' && age === 23) {
  // true && true
  console.log(`je suis ${nom} et , j'ai ${age} ans`);
}

/*
    "Poussin" de 6 à 7 ans
    "Pupille" de 8 à 9 ans
    "Minime" de 10 à 11 ans
*/

// solution

// const nom = 'Harrat Junior';
const age1 = 8;

// Mehd's solution
if (age1 >= 6 && age1 <= 7) {
  //? 10 >= true && 10 <= 7 false ==> false
  console.log(`${nom} est un Poussin`);
} else if (age1 >= 8 && age1 <= 9) {
  // ? 10 >= 0 true && 10 <= 9 false == > false
  console.log(`${nom} est un Pupille`);
} else {
  console.log(`${nom} est un Minime`);
}

// solution 2
if (age >= 10) {
  console.log(`${nom} est un Minime`);
} else if (age >= 8) {
  console.log(`${nom} est un Pupille`);
} else if (age >= 7) {
  console.log(`${nom} est un Poussins`);
}

if (age >= 10) {
  if (nom === 'mohamed') {
    //! instructions
  }
}

const nombre = prompt('saisir un nombre'); //

console.log(typeof nombre);

// switch
