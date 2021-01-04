/*
        2 types de données :
todo      1. type primitive (
todo               boolean , 
todo                chaine de charactere
todo               , entier , reéls)

*        2. type non prmitives (References)
*           - Les Objets (String , Number , Array, Date)
*            - Les tableau 


*/

const obj = {
  name: 'mehdi',
};
// PRIMITIVES
// chaine de caracteres
const name = 'youssra';
const age = 12;
const isOk = true;
let a; // undefined
const sym = Symbol();

// NOM PRIMITIVES OU REFERENCES - Objects
const langues = ['arabic', 'English', 'Frensh'];
const infos = {
  name: 'ayoub',
  age: 24,
  email: 'ayoubarahmat@gmail.com',
};

// Date
const date = new Date();
console.log(typeof date);

const text = 'Hello every one';
const text1 = new String('hello every one ');

console.log(typeof text);
console.log(typeof text1);

const nombre = 12; // primitve
const nombre1 = new Number(12); // objet

console.log(typeof nombre);
console.log(typeof nombre1);

/*

        1. passage par valeur
        2. passage par reference
        
*/

const numbers = [1, 2, 3, 4]; // Addr 0x343243 ===>  value [1,2,3,4]
const numbers2 = numbers; // 0x343243

// console.log(numbers2);

/*
Call Stack                                     Heap 

        variable   Address       Value          Address    value
        numbers    0x343243     34324FV         34324FV   [1,2,3]
        numbers2   0x343XFE     34324FV
*/
console.log(numbers);
console.log(numbers2);

numbers2.pop(); // delete last element in a table
numbers.pop();

console.log(numbers);
console.log(numbers2);
