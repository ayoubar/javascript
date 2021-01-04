// log to consoles
// vrai
/*
    1 - chaine de characteres
    2 - les nombres : entiers OU réels
    3 - les tableaux 
    4- Object
    5 - boolean : true ou  false
*/
/*
console.log('fezlkfklzekjfez'); // chaine de charactere
console.log(325345454); // afficher les entiers
console.log(45.5); // afficher les nombres réels

console.log([12, 45, 'fe live']);
console.log({ name: 'mehdi', age: 24 });

console.log(100 + 10);
console.log(100 + 'hello'); // type coercion - concatenation

console.log(true);
console.log(false);
*/
/* les operateurs de comparaison
        Egalité : === ou ==
        superieure à: > 
        superieure ou égale à : >= 
        inférieure à:< 
        inférieure ou égale à: <= 
        la difference: != || !==

*/

/*
    === ===> verification de type + valeur

    == ====> verification de  valeur
*/
console.log(12 === 12); // egalité
console.log(12 === '12'); // egalité

console.log(12 == 12); // true
console.log(12 == '12'); // true

console.log(12 > 10);

// Expression composé
/* Les operateurs logique
    ET: &&
    OU: ||
    NOT: !
*/
console.log('mehdi' === 'mehdi' && 12 === 12); // true && true => true
console.log('mehdi' === 'mehd' && 12 === 12); // false && true => false

console.log('mehdi' === 'mehdi' || 12 === 12); // true || true => true
console.log('mehdi' === 'mehd' || 12 === 12); // false || true => true

console.log(!false);
console.log(!true);
console.log(!12 === 12); //

console.error('this is an error');
console.warn('Fait attention !');

console.table({ name: 'mehdi', age: 24 });
