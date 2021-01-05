const firstName = 'mehdi';
const lastName = 'EEL AMINE';

const x = ' ';
const age = 24;
const message = 'Hello there my name is Mehdi';
const tags = 'web developer, graphic designer, programming';

let valeur;

// concatener firstName et lastName dans valeur
// concatenation
valeur = firstName + lastName;
valeur = firstName + ' ' + lastName;
valeur = firstName + x + lastName;

// append
valeur = 'youssra';
valeur += 'el amine'; // valeur  = valeur + 'el amine'

console.log(valeur);

valeur = 'Hello , my name is ' + firstName + 'I am ' + age + 'years old';

console.log('HELLO');
// Escaping

console.log("I'am Ayoub, I can't wait");

console.log(firstName.length); // longeur

// conact
valeur = firstName.concat(lastName);
console.log(valeur);

// change case
valeur = firstName.toUpperCase();
valeur = lastName.toLowerCase();
console.log(lastName[0] + lastName[1]);

// indexOf

valeur = lastName.indexOf('E');
console.log('indice de E est', valeur);

valeur = lastName.lastIndexOf('E');
console.log('indice de E est', valeur);

// substring()
/*
    M E H D I
    0 1 2 3 4
*/
valeur = firstName.substring(0, 2); //

// slice()
/*
    'H e l l o    t h e r e';
     0 1 2 3 4 5  6 7 8 9 10   
*/
// const message = 'Hello there my name is Mehdi';

valeur = message.slice(6, 8); // 8 - 1
valeur = message.slice(-4, -2); // -2 -1 = - 3
valeur = message.slice(-8, -6); // -6-1 = -7

console.log(valeur);

// split()
//const tags = 'web developer, graphic designer, programming';

/*
        Separateur : Esapce
        [web, 
        'developer,',
        "graphic", 
        "designer,",
        "programming"
                
    ]
*/
valeur = tags.split(',');
valeur = valeur.join(' - '); //
console.log(valeur);
// replace
//const message = 'Hello there my name is Mehdi';

valeur = message.replace('Mehdi', 'nawfal');
console.log(valeur);

// includes : boolean
valeur = message.includes('hello there');
console.log(valeur);
