// /*
// variable      valeur    addr
//  nombre         12      0x34345
//  */
// /*
//     todo: decalration d'une variable en pseudo code
//     ! variable nombre en numerique  // decalartion
//     ! nombre <--- 12 // affectaion , initialisation
// */

// /*
//     Declaration d'une variable en javascript :
//     il faut utliser ces 3 mots pre-definis:
//         *1: var , ex: var x = 3
//         *2: let, ex: let nom = 'mehdi'
//         *3: const, ex: const PI =  3.14
// */

// var age = 14;
// let nom = 'youssra';
// const PI = 3.14;
// const name = 'chreyd';

// //PI = 50; // error `Uncaught TypeError: Assignment to constant variable.`

// // changer la valeur de age
// age = 20;
// console.log(age);
// console.log(nom);
// console.log(PI);
/*
    undefinde : mot pre-definis
*/
var message = undefined; // undefined

var firstName = 'mohamed'; // Camel case
var first_name = 'mohamed'; // Underscore
var FirstName = 'mohamed'; // Pascal case

const person = {
  name: 'nawfel',
  age: 24,
};

console.log(person);

// afficher name de l'object `person`

// solution 1 (recommanded)
console.log(person.name);

// solution 2
console.log(person['name']);

// declaration tableau
const names = [
  'ayoub',
  'mehdi',
  'youssra',
  'mohamed',
  'chreyd',
  'nawfel',
  'anass',
];

const mix = [
  { name: 'mohamed', id: 12 }, // 0
  'hello', // 1
  [1, 2, 3], // 2
  2021, // 3
  12.56,
];

console.log(mix);
