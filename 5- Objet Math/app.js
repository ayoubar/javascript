const nombre1 = 100;
const nombre2 = 40;

let valeur;

// operation arithmetiques

valeur = nombre1 + nombre2; // addition
valeur = nombre1 - nombre2; // soudtraction
valeur = nombre1 / nombre2; // division
valeur = nombre1 * nombre2; // multiplication
valeur = nombre1 % nombre2; // modulo

console.log(valeur);

// Math Object

valeur = Math.PI;
valeur = Math.E;

valeur = Math.round(2.3);

valeur = Math.ceil(7.004);
valeur = Math.floor(8.9); //

valeur = Math.sqrt(16); // 2

valeur = Math.abs(-5); // 5

valeur = Math.pow(2, 4); // 2^4

valeur = Math.min(1, 2, 3, 4, 5, 6, -1, 90, -10, 100); // -10
valeur = Math.max(1, 2, 3, 4, 5, 6, -1, 90, -10, 100); // 100

// entre 0 et 10
valeur = Math.floor(Math.random() * 10 + 1);

console.log(valeur);
