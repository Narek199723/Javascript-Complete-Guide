'use strict';

// *  1). --  Javascript is a high-level,prototype-based  Object-oriented,multi-paradigm,interpreted or just-in-time-compiled,dynamic.single threaded,garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model

// *  2). -- High level - we have low level languages like c which every time need to ask the computer to create a memory for storing a variable , but with JS and also with Python we dont need that,so JS Python has some kind of abstractions which takes all that work, this makes language easier to learn , but the downside is that high level languages are never gonna be as fast as the low level languages,

// *  3). --  one of the powerful tools that takes memory management away from us developers is the garbage collection, which is an algorithm inside the JS engine which automatically removes old unused objects from the computer memory

// *  4). --Interpreted or just-in-time compiled language, so the computer's processor understands only 0s and 1s.inside the JS   engine the code that we write compiles to machine code and then it works as we see.

// *  5). -- multi-paradigm : Paradigm is an approach and mindset of structuring code,which will direct your coding style and technique. 3 popular paradigms are
//*        - 1). Procedural programming
//              * Procedural programming is what we have been doing so far, it is like organizing code in a very linear way , and then some functions in between
//*         -2). Object-oriented programming (OOP)
//*         -3). Functional programming (FP)

// *  So we can also describe paradigms that they can be imperative VS declarative,many languages are only procedural or only object-oriented  only functional , but JS does all of it, so JS is a very flexible and versatile.

// *  6). Prototype-based object-oriented - This means that everything in JS is an object and the fact that we can use push method on arrays tells us that it has his prototype, prototypal inheritance

// *  7). First class functions -- In a language with first-class functions,functions are simply treated as variables. We can pass them into other functions, and return them from functions

// *  8). Dynamic typed - Dynamic means dynamically typed which means that we dont assign data types to variables, instead they only became known when JS Engine executes our code,also the type of the variable can easily be changed

// *  9). Single-threaded -- concurrency model how the JS engine handles multiple tasks happening at the same time․Javascript runs in one single thread,so it can only do one thing at a time. Thread is like a set of instructions that is executed in the computer's cpu so the thread is basically so the thread is where r code actually executed in a machine's processor, but when we have long running task, so that's where we need a event loop

// *  10). Non-blocking event loop
///////////////////////////////////////
// Scoping in Practice

/*
function calcAge(birthYear) {

  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();


///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


///////////////////////////////////////
// The this Keyword in Practice
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();


///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


///////////////////////////////////////
// Objects vs. primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);


///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
*/
