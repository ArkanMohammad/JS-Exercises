//Task15
//Declare let light = "yellow". Write an if/else if/else that prints: 
//• "Go!" if light is "green" 
//• "Slow down" if light is "yellow" 
//• "Stop!" if light is "red" 
//• "Unknown signal" for anything else 
//Expected output: Slow down 
let light = "yellow";
if (light === "green"){
    console.log("Go!");
}else if (light === "yellow"){
    console.log("Slow down");
}else if (light === "red"){
    console.log("Stop!");
}else {
    console.log("Unknown signal");
}//output ==> Slow down

//Task16
//Declare age = 25 and isMember = true. 
//• If age >= 18 AND isMember: print "Full access — welcome member!" 
//• If age >= 18 AND NOT isMember: print "Guest access — consider joining" 
//• If age < 18 AND isMember: print "Junior member access" 
//• Otherwise: print "No access" 
//Expected output: Full access — welcome member! 
const age = 25;
const isMember = true;
if (age>=18 && isMember){
    console.log("Full access — welcome member!");
}else if (age>=18 && !isMember){
    console.log("Guest access — consider joining");
}else if (age<18 && isMember){
    console.log("Junior member access");
}else{
    console.log("No access");  
}//output ==> Full access — welcome member! 

//Task17
//single ternary expression =>  condition ? valueIfTrue : valueIfFalse
// 1 
//let msg; 
//if (10 > 5) { msg = "yes"; } else { msg = "no"; }
let msg = 10 > 5 ? "yes" : "no";
// 2 
//let fee; 
//if (isMember) { fee = 5; } else { fee = 20; } 
let fee = isMember ? 5 : 20; 
// 3 
//let label; 
//if (score >= 50) { label = "pass"; } else { label = "fail"; } 
let label = scere>=50 ? "pass" : "fail" ;


//Task18
//Declare let month = 7 (July). Use a switch statement to print the season. 
//• 12, 1, 2 → Winter 
//• 3, 4, 5 → Spring 
//• 6, 7, 8 → Summer 
//• 9, 10, 11 → Autumn 
//Expected output: Summer 
let month = 7 ;
switch(month){
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
}//output ==> "Summer"

//Task19:
//For a given number n = 15, print: 
//• "FizzBuzz" if divisible by both 3 AND 5 
//• "Fizz" if divisible by 3 only 
//• "Buzz" if divisible by 5 only 
//• The number itself otherwise 
//Order of checks matters! 
//Expected output: FizzBuzz (for n=15) 
const n = 15;
if(n % 3 === 0 && n % 5 === 0){
        console.log("FizBuzz");   
}else if(n % 3 === 0){
        console.log("Fiz");   
}else if(n % 5 === 0){
        console.log("Buzz");   
}else{
    console.log(n);
}//output ==> FizzBuzz

//Task20
//Given let password = "Hello1!", write conditions to determine strength: 
//• "Weak": length < 6 
//• "Medium": length >= 6 AND < 10 
//• "Strong": length >= 10 
//Expected output: Medium (length is 7) 
let password = "Hello1!";
if (password.length < 6) {
    console.log("Weak");
}
else if (password.length >= 6 && password.length < 10) {
    console.log("Medium");
}
else {
    console.log("Strong");
}//output ==> Medium

//Task21
//What does each console.log print? Think step by step. 
const x = 5; 
console.log(x > 3 && x < 10 ? "in range" : "out"); //in range
console.log(!!(0)); //false
console.log(!!("hello")); //true
console.log(x === 5 || x === 10 ? "match" : "no"); //match