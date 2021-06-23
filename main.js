//alert('kokot');
//console.log("first log");
// let changeable
//const constant
// String, Numbers, Boolean, null, undefined, Symbol

const nameG = 'Barbucha';
const age = 26;
const rating = 9.9;
const isHot = true;
const x = null;
const y = undefined;
let z;

console.log(typeof x);

// Concateation (zretezeni) OLD way
console.log('My girlfriend name is ' + nameG + 'and her age is ' + age);

// Template String
console.log(`My girlfriend name is ${nameG} and her age is ${age}`);
let sentence = `My girlfriend name is ${nameG} and her age is ${age}`;

// substrakce stringu + capslock
console.log(sentence.substring(3,13).toUpperCase());
//split String by ' '
const pole = sentence.split(' ');
console.log(pole + ` delka pole = ${pole.length}`)   ; 
// delka stringu
console.log(sentence.length);

// Array
const fruits = ['apples', 'bananas', 'pears'];  // ikdyz je const, muzes itemy priavat, nemuzes ale array znova zadefinovat
fruits[4] = 'grapes';                           // vznikne ["apples", "bananas", "pears", empty, "grapes"]
console.log(fruits);
fruits.push('mangos');                           // metoda prida na konec prvek
console.log(fruits);
fruits.unshift('pineaplle');                     // metoda prida prvek na start
console.log(fruits);
fruits.pop();                                    // metoda odstrani posledni prvek
console.log(fruits);
console.log(Array.isArray(fruits));              // vraci boolean jestli je x array
console.log(fruits.indexOf('bananas'));              // vraci index itemu

// Objects
const person = {
    firstName: 'Pjotr',
    lastName: 'Ilic Mikulic',
    age: 25,
    hobbies: ['formula 1', 'football', 'code'],
    address: {                                      // object inside object (trida definovana v tride = KOMPOZICE)
        street: 'Melodicka 5',
        city: 'Prague',
        country: 'CZE'
    }
}
person.email = 'pjotr@mail.uk';                     // pridani polozky do obj person

console.log(person)
console.log(person.lastName, person.firstName, person.address);      // vypsani konkretnich polozek do konzole
console.log(person.hobbies[1], person.address.country);

const {firstName, lastName, address: {city} } = person;              // destructuring (vytahnuti z objektu do globalu)
console.log(firstName, city);

// Array of objects
const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: false,
    },
    {
        id:2,
        text: 'Wash the car',
        isCompleted: true,
    },
    {
        id:3,
        text: 'Cook a lunch',
        isCompleted: false,
    },
];

console.log(todos);
console.log(todos[1].text);                 // accessing a parametr

const todoJSON = JSON.stringify(todos);     // convert todos to JSON format
console.log(todoJSON);

// FOR loop syntax, looping todos[i].text
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
};

// WHILE loop syntax, looping todos[i].text
let i = 0;
while (i < todos.length) {
    console.log(todos[i].text);
    i++;
};

// FOR other syntax
for(let todo of todos) {
    console.log(todo.isCompleted);
};

// forEach  executes a provided function once for each array element
todos.forEach(function(todo) {
    console.log(todo.text);
});

// map  creates a new array with the results of calling a provided function on every element in the calling array
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

// filter   
const todosFiltered = todos.filter((todo) => {
    return todo.isCompleted === true
}).map((todo) => {                              // pomoci map vytahnu pouze parametr .text nikoli cely objekt
    return todo.text                            
});

console.log(todosFiltered)

// IF u podminek myslet na rozdil == a ====     || or   && and
let pom = '10';
if (pom == 10) {            //== True === False
    console.log('True')
} else {console.log('False')};   // if (cond || cond) {command} else if (cond) {command} ...

// IF create new const in association with other const
const t = 10;
const color = t > 10 ? 'blue' : 'red';      // pokud je podimnka true, bude color rovna 'blue' a naopak
console.log(color);


