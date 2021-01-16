// Template Literlas

const name = 'Ayoub';
const age = 23;
const job = 'web devleoper';
const city = 'Casablanca';

let html;

// Without template strings (es5)
// html = '<ul> <li> Name: ' + name + '</li><li> Age:' + age + '</li><ul>';
html =
  '<ul>' +
  '<li>Name: ' +
  name +
  '</li>' +
  '<li>Age: ' +
  age +
  '</li>' +
  '<li>job: ' +
  job +
  '</li>' +
  '<li>city: ' +
  city +
  '</li>' +
  '</ul>';

// With Template strings (es6)
html = `
    <ul>
    <li>Name : ${name} </li>
    <li>age : ${age} </li>
    <li>Job: ${job} </li>
    <li>City : ${city} </li>
    </ul>
`;

let message = 'je suis ' + name + " j'ai " + age + 'ans';
message = `je suis ${name} j'ai ${age} ans`;
console.log(`${}`);
document.body.innerHTML = html;
ent