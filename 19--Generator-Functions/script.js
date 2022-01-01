// ! First Part
// * The asterisk keyword's purpose is to tell JS that this is a generator function
// * Th yield statement 
// * so the purpose of the generator is to essentially run some code and then return a value and then run some more code and return another value and continuously like this until you get to the end of all of the code inside generator 

// * So in order to use a generator we need to run generator function which is going to return to us a generator object that allows us to manipulate and use this generator 
// *  yield is a special type of a return keyword that is only useful inside a generator function
// function* simpleGenerator(){
//   yield 1
//   yield 2
//   yield 3

// }

// const generatorObject = simpleGenerator()
//* if we will look here to the console we will see an object which has prototype, inside the prototype we have 3 functions։ next,return,throw,we are interested in next function
// console.log(generatorObject);

// const value = generatorObject.next()
// console.log(value); //{value:1,done:false}

// * Always when we have a generator function we are going to have a value property and also done property,
//  *  done property is either gonna be true or false , false means that there is still more code to run, true meaning there is nothing left to return ,
// * value property is gonna be the value which is return by the yield

// console.log(generatorObject.next()); //{value:2,done:false}
// console.log(generatorObject.next()); //{value:3,done:false}
// console.log(generatorObject.next()); //{value:undefined,done:true}

// ! Second Part 

// * This won't make a console.log() nothing will get print out, because when we call a generator very first time, all it does is set up the generator object essentially it creates an object that has a next property and the next property allows us to singularly execute through all the code inside the generator 
// function* simpleGenerator(){
//   console.log("Before 1");
//   yield 1
//   console.log("After 1");
//   console.log("Before 2");

//   yield 2
//     console.log("After 2");
//   console.log("Before 3");
//   yield 3
//     console.log("After 3");
// }
// *  This won't print anything to the console, only after calling next
// const generatorObject = simpleGenerator()
// console.log(generatorObject.next());


// * This is a regular function so when we call this function this will make console.log
// const x = ()=>console.log("CONSOLE.LOG");
// const z = x()

// ! Third Part
// *  With the generator functions we can have multiple generators going at once 


// function* simpleGenerator(){
//   yield 1
//   yield 2
//   yield 3
// }

// const generatorObject = simpleGenerator()
// const generatorObject2 = simpleGenerator()

// * We should pay attention to the generator function, when we call generatorObject it prints to the console 1,2, but when we do that with generatorObject2 it starts from the beginning 
// console.log(generatorObject.next());
// console.log(generatorObject.next());
// * When we call generatorObject we are creating new instance off the object that has its own version of this function that can iterate through things on its own 
// console.log(generatorObject2.next());
// console.log(generatorObject2.next());

// !  Another useCase
// *  With generator functions we can create an infinite loop , for example it can be useful with creating an id 

// function* generateId(){
//   let id = 1
//   while(true){
//     yield id
//     id++
//   }
// }

// const generatorObject = generateId()
// const id1 = generatorObject.next().value
// const id2 = generatorObject.next().value
// const id3 = generatorObject.next().value
// const id4 = generatorObject.next().value
// const id5 = generatorObject.next().value

// console.log(id1,id2,id3,id4,id5);

// ! Another useCase
function* generateId(){

  let id = 1
  
  while(true){
    const increment = yield id
    if(increment !=null ){
      return id += increment
    }
    id++
  }
}
const generatorObject = generateId()
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());

// * forcing and getting the data and leaving function
console.log(generatorObject.return(10));
console.log(generatorObject.throw(new Error("Hello i am error")));
