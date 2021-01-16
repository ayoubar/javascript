// FUNCTION DECLARATIONS

// a et b ==> a+b

/*
  ch ---> integer
  parseInt
*/

/*
    Discord
    ```js

      ! code

    ```
    ```html

      ! code

    ```
    ```css

      ! code

    ```

*/

function returnSomething() {
  return 12;
}

function helloAnass(param) {
  if (typeof param !== 'string') {
    console.log(`${param} diff du chaine de caractere`);
  } else {
    console.log(`${param} est string`);
  }
}

function getNom() {
  return 'HELLO';
}
let temp = getNom();
console.log('temp', temp);

// helloAnass('HELLO');
// helloAnass('HEY');
// helloAnass('My name is anass');
// helloAnass('WHAT');
// helloAnass([1, 2, 3, 4]);

// function

// declaration d'une fonction
// parametres d'une fonction
// function somme(a, b) {
//   let somme = a + b;
//   return somme; // 112
// }

// ! Nawfel's Code

function sommeNawfel(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    let somme = a + b; // todo : 12+"hello" ===> "12hello"
    return somme;
  }
  return undefined;
}

console.log(sommeNawfel(12, 'HELLO'));

// ! Youssra's Code
function sommeYoussra(a, b) {
  let somme = a + b; // 3+"shshs" = "3shshs"
  if (typeof somme !== 'number') {
    // ? typeof ""3shshs"" !== "number"
    console.log('les inputes ne sont pas des chiffre');
  } else {
    console.log('les inputes sont valides');
    return somme;
  }
}

sommeYoussra(3, 4);
sommeYoussra(3, 'shshs');

// call the function
// let y = somme(200, 'dzakjdkjlaz');

// console.log('y est :', y);

// Math.floor();
// let a = Number(prompt('Entrez a'));
// let b = Number(prompt('Entrez b'));

// console.log(typeof a);
// console.log(typeof b);

// let somme = a + b;
// console.log(somme);

// function greet(firstName = 'John', lastName = 'Doe') {
//   // if(typeof firstName === 'undefined'){firstName = 'John'}
//   // if(typeof lastName === 'undefined'){lastName = 'Doe'}
//   //console.log('Hello');
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// // console.log(greet());

// // FUNCTION EXPRESIONS

// const square = function (x = 3) {
//   return x * x;
// };

// console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//   console.log('IIFE Ran..');
// })();

// (function(name){
//   console.log('Hello '+ name);
// })('Brad');

// PROPERTY METHODS

// const todo = {
//   add: function () {
//     console.log('Add todo..');
//   },
//   edit: function (id) {
//     console.log(`Edit todo ${id}`);
//   },
// };

// todo.delete = function () {
//   console.log('Delete todo...');
// };

// todo.add();
// todo.edit(22);
// todo.delete();
