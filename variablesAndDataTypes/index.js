// Task1
console.log(typeof 42); //number
console.log(typeof "42"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof {}); //object
//Task2
const firstName1 = "Sara"; 
const my_age = 22; 
let score = 0; 
score = 100; // reassigning const 
const feeling = "bad"; 

//Task3
//Declare 4 variables: name (string), age (number), grade (string), isPassed (boolean). 
 // output: Student Sara, age 20, got grade B. Passed: true 
const name = "Sara";
const age = 20;
const grade = "B";
const isPassed = true;
console.log(`"Student" ${name}, "age ${age}, "got grade" ${grade}. "Passed:" ${isPassed}`);

//Task4
//Given the string below, write code that: 
//Prints the length of the string 
//Prints it in ALL CAPS 
//Prints only the word "javascript" (slice from index 7 to 17) 
//Prints true if it includes the word "love"  
const msg = "I love javascript programming"; 
// length
console.log(msg.length);
// ALL CAPS
console.log(msg.toUpperCase());
// slice from index 7 to 17
console.log(msg.slice(7, 17));
// includes "love"
console.log(msg.includes("love"));

//Task5
console.log(0 == false); //return false // because 0 = falsy = false // in value not in type
console.log(0 === false); // return false // equals in  value but not equal in type
console.log("1" == 1); //return true // equals in value
console.log("1" === 1); // return false // equals in  value but not equal in type
console.log("" == false); //return false // because "" = falsy = false // in value not in type
console.log(null == undefined); // return true // because null and undefined are falsy = false // equals in value
console.log(null === undefined); // return false // equals in  value but not equal in type

//Task6
//Swap their values so a becomes 10 and b becomes 5. You may NOT use a third variable.
//Use destructuring or arithmetic.
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a);
console.log(b);

//Task7
//truthy or falsy
//truthy : "hello"  1  []
//falsy : "" 0  null  undefined  false  Nan