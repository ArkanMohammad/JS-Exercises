//Task 22:
//Use a for loop to calculate the sum of all integers from 1 to 100. Print the final result. 
//Expected output: 5050 
let sum = 0;
for( let i = 1 ; i <= 100 ; i++){
    sum += i;
}
console.log(sum);//output ==> 5050

//Task23:
//Print the multiplication table for the number 7 (from 7×1 to 7×10). 
//Each line: "7 × 1 = 7", "7 × 2 = 14", etc. 
// Expected output: 7 × 1 = 7 ... 7 × 10 = 70 
for( let i = 1 ; i <= 10 ; i++){
    console.log(`7 * ${i} = ${7 * i}`);//output => 7 × 1 = 7 ... 7 × 10 = 70 
}

//Task24:
//Use a while loop starting from 1. Keep incrementing until you find the first number divisible by both 6 AND 8. Print it. 
//Expected output: 24 
let number = 1;
while (true) {
    if (number % 6 === 0 && number % 8 === 0) {
        console.log(number);
        break;
    }
    number++;
}

//Task25:
//Now apply FizzBuzz (from Task 19) inside a for loop from 1 to 30.
//Print FizzBuzz / Fizz / Buzz / number for each iteration. 
for(let i = 1 ; i<=30 ; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizBuzz");   
    }else if(i % 3 === 0){
        console.log("Fiz");   
    }else if(i % 5 === 0){
        console.log("Buzz");   
    }else{
        console.log(i);
    }
}//output ==> 
// 1  2  Fiz  4  Buzz  Fiz  7 ... 29  FizBuzz

//Task26:
//Declare let rockets = 5. Use a do...while loop to count down: "5... 4... 3... 2... 1... Blast off!"
// The "Blast off!" should print AFTER the loop ends. 
//Expected output: 5... 4... 3... 2... 1... Blast off! 
let rockets = 5;
do {
    console.log(`${rockets}...`);
    rockets--;
}
while (rockets >= 1);
console.log("Blast off!"); //output ==> 5... 4... 3... 2... 1... Blast off! 

//Task27:
//Print all prime numbers between 2 and 50. A prime number is only divisible by 1 and itself.
// //Hint: use a nested loop — for each number, check if any number from 2 to n-1 divides it. 
//Expected output: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 
for (let number = 2; number <= 50; number++) {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(number);
    }
}//output ==> 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47

//Task28:
//Use nested for loops to print this star pattern: 
//* 
//** 
//*** 
//**** 
//***** 
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
} // output ==>
//* 
//** 
//*** 
//**** 
//***** 
