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

//! ---------------------- Compilation VS Interpretation ---------------------

// *  1). Compilation: Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer
// * So every computer program on our PC has been compiled before(that is what happens when we install something) and now we are just executing it.
// *  2).  Interpretation: Interpreter runs through the source code and executes it line by line. So with interpretation the code is read and executed all at the same time.JS was purely interpreted language .But the problem with the interpreted languages is that they are much much slower.Modern JS Engine uses mix of the compilation and interpretation which is called Just-in-time(JIT) compilation

// * 3).  Just-in-time (JIT) compilation: ENtire code is converted into machine code at once,then executed immediately

// *  JS gets access to WEB API's environment through global window object

//! ------------------ Execution Contexts and the call stack ----------------- */

// * First Global execution context is created for the top level code. Top level code is the code that is not inside of any function.So in the beginning only the code outside of the function will be executed. because functions will be executed when they are called.

// * Execution context is an environment in which a piece of JS is executed. Stores all the necessary information for some code to be executed.

// * It doesn't matter hwo big is the project there is exactly one global execution context (EC): Default context, created for code that is not inside any function(top level)

// * One execution context per function: For each function call, a new execution context is created․the same goes with methods because they are functions attached to objects

// * The first thing inside the variable environment. In this environment are all our variables functions argument object․

// * Each function gets its execution context as soon as the function is called, so all the variables that is somehow declared inside the function will end up in its variable environment․

// *  except variable environment execution context also creates scope chain.Scope Chain basically consists of references to variables that are located outside of the current function. And to keep track of the scope chain it is stored in each execution context.

// * Each execution context also gets special variable called the this keyword.

// *  So to round up everything content of the execution context - variable environment,scope chain,this keyword are generated in so called << creation phase >> which happens right before execution,

// *  Execution context belonging to arrow functions do not get their own arguments object(arguments keyword) nor the this keyword, instead arrow functions  can take arguments object and the this keyword from their closest parent functions.

// * Call stack keeps track of the execution context, it means that call stack organizes the order of the functions to be executed, which should should be first or second or third

// !  Scope chain
// *  Scoping controls how our program's variables are organized and accessed by the JS Engine.
// *  Lexical scoping: Scoping is controlled by placement of functions and blocks in the code. for example a function that is written inside another function has access to the variables of the parent function.

// *  Scope is a space or environment in which certain variable is declared(variable environment in case of functions). There is global scope, function scope, and block scope.

// *  Scope of a variable : is a entire region of a code where a certain variable can be accessed.

// ! The 3 types of scope

// ^ Global scope
// * Outside of any function or block
// * Variables declared in global scope are accessible everywhere

// ^ Function scope
// * Variables are accessible only inside function,NOT outside.also called local scope
// * function scope variable is var

// ^ Block scope (ES6)
// * if statement, for loop,
// *  block scope variables are let and const

// !  Hoisting
// *  Hoisting : Makes some types of variables accessible/usable in the code before they are actually declared. "variables lifted to the top of their scope"

// *  Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object

// *  TDZ or Temporal Dead Zone is suppose to tell the Developer that we can't access the variable before initialization helps avoid bugs logical errors and so on.
/*
const myName = 'Jonas';
if (myName) {
  console.log('I am working'); //Starting from here to
  console.log('I am working');
  console.log('I am working'); // here is a TDZ for job variable, because job can be accessed only in block scope so before declaring it it will throw an error can't access job before initialization
  const job = 'Teacher';
}
*/

// * We need hoisting to be able to use functions before actual declaration, that can be used for mutual recursion
// * with var hoisting works like that because that was the only way hoisting could be implemented at the time

///////////////////////////////////////
// Scoping in Practice

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // Reasssigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }

//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// // console.log(age);
// // printAge();

// ///////////////////////////////////////
// // Hoisting and TDZ in Practice

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example
// console.log(undefined);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// ///////////////////////////////////////
// !  How the this keyword works
// * this keyword/variable: SPecial variable that is created for every execution context(every function). Takes the value of (points to) the "owner" of the function in which the this keyword is used.

// *  this is not static . it depends on how the function is called,and its value is only assigned when the function is actually called

// *  inside method this = that object
// * in strict mode simple function call this = undefined, so that's why it is a good practice to use strict mode
// * Arrow functions this = the parent function of the arrow function, or the global function, arrow function doesn't have its this keyword,instead if we use this keyword in arrow function it will be the this keyword of surrounding function, parent function, (it is called lexical this keyword)

// * Event listener this = < DOM element that the handler is attached to > if we click to button this = <button></button>

// * this doesn't point to the function itself,and also not the its variable environment

/*- //! -------------------  The this Keyword in Practice ------------------- */
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
// *  THis keyword here will be window object because this arrow function's parent function is the global function where it is a window obj, but if arrow function will be inside regular function then this=undefined,arrow function uses lexical this keyword, it takes parent's scope 
//   console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// ///////////////////////////////////////
// // Regular Functions vs. Arrow Functions
// // var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

// ///////////////////////////////////////
// // Objects vs. primitives
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

// ///////////////////////////////////////
// // Primitives vs. Objects in Practice

// // Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// // Reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage: ', marriedJessica);
// // marriedJessica = {};

// // Copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before marriage:', jessica2);
// console.log('After marriage: ', jessicaCopy);
