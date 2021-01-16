let valeur;

// Number to string
valeur = String(500);
valeur = String(4 + 4);
('8');

// boolean to string
valeur = String(true); // "true"

// Date to string
valeur = String(new Date());

// Array to string
valeur = String([1, 2, 3]); // "1,2,3"

// toString()

valeur = (100).toString(); // String(100)
valeur = true.toString(); // String(100)

// String to Number
valeur = Number('100');
valeur = Number('Mehdi'); // NaN
console.log(typeof valeur); // number
// Boolean to number
valeur = Number(false); // false -> 0, true -> 1

valeur = parseInt('100');
console.log(valeur);
console.log(typeof valeur);
