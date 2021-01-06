// créer des tableaux
const numbers = [1, 2, 3, 4, 5]; // method 1
const numbers2 = new Array(1, 2, 34, 56, 00, 100); // method 2
const fruits = ['banana', 'Appel'];
const mixed = ['HELLO', 2020, true];

let val;

// get length of an array

val = numbers.length;
// console.log(val);

//

const t = 1; // number
val = Array.isArray(fruits); // check if is an array
// console.log(val);

// Get single value
val = numbers[5]; // 100
val = numbers[4]; // 00

// insert into a table
numbers[1] = 80;

// find index of value
val = numbers.indexOf(56); // indice 3
val = numbers.indexOf(200); // -1 : 200 n'exist pas dans le tableau numbers

// push

numbers.push(200, 300);
numbers.push(1000);

// console.log(numbers);

// unshift
numbers.unshift(900, 800);
// console.log(numbers);

// pop
numbers.pop();
// console.log(numbers);

// shift
numbers.shift();
// console.log(numbers);

//splice
// const mixed = ['HELLO', 2020, true];

mixed.push('WHAT');
mixed.push('HEY');
mixed.push('YES');
console.log('this is mixed table before delete', mixed);
mixed.splice(4, 6);
console.log('this is mixed table after delete', mixed);

// reverse
const test = [1, 2, 3, 4];
test.reverse();
console.log(test);

// contactenate arrays
val = fruits.concat(mixed);
console.log(val);

// find

val = numbers.find(greatherThan2);
console.log(val);
function greatherThan2(num) {
  return num > 2;
}
