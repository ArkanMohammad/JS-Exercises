//function : A function is a reusable block of code that performs a specific task.
//Task29
//Write a temperature converter function 
//Write a function celsiusToFahrenheit(c) that converts Celsius to Fahrenheit.
// Formula: F = (C × 9/5) + 32. Call it with 0, 100, and 37. Print each result. 
//Expected output: 32 | 212 | 98.6 
function celsiusToFahrenheit(c){
    return (c * 9 / 5) + 32;
}
console.log(celsiusToFahrenheit(0));    // 32
console.log(celsiusToFahrenheit(100));  // 212
console.log(celsiusToFahrenheit(37));   // 98.6

//Task30
// isEven and isOdd as arrow functions 
//Write two arrow functions: 
//• isEven(n): returns true if n is even, false otherwise 
//• isOdd(n): returns true if n is odd — but call isEven() inside it, do not repeat the logic 
//Expected output: isEven(4) → true | isOdd(7) → true | isEven(3) → false Write your code here:
const isEven = (n) => n % 2 === 0;
const isOdd = (n) => !isEven(n);
console.log(isEven(4)); // true
console.log(isOdd(7));  // true
console.log(isEven(3)); // false

//Task31
//Write a function greet(name, greeting = "Hello") 
//that prints "Hello, Sara!" Call it twice: once with both arguments, once with only the name. 
//Expected output: Good morning, Omar! Hello, Sara! 
function greet(name, greeting = "Hello"){
    console.log(`${greeting}, ${name}!`);
}
greet("Omar", "Good morning");//Good morning, Omar!
greet("Sara");//Hello, Sara! 

//Task32
//max three numbers
//Write a function maxOfThree(a, b, c) that returns the largest of three numbers.
// Do NOT use Math.max(). Use conditions. 
// //Call it with (3, 17, 9) and print the result. 
function maxOfThree(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}
console.log(maxOfThree(3, 17, 9));//17

//Task33
//Count vowels in a string 
//Write a function countVowels(str) that returns the number of vowels (a, e, i, o, u) in a string.
// Case-insensitive. Use a for...of loop inside the function. 
//Expected output: countVowels("Hello World") → 3 
function countVowels(str) {
    let count = 0;
    let vowels = "aeiou";
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"));//3

//Task34
//Factorial with a loop inside a function 
//Write a function factorial(n) that returns n! (n factorial).
// //Example: factorial(5) = 5 × 4 × 3 × 2 × 1 = 120.
//Use a for loop inside. Handle n = 0 → return 1. 
//Expected output: factorial(0)=1 | factorial(5)=120 | factorial(7)=5040 
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(0)); // 1
console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040

//Task35
//isPalindrome 
//Write a function isPalindrome(str) that returns true if a string reads the same forwards and backwards (case-insensitive,
// ignore spaces). Test with "racecar", "hello", "Never Odd Or Even". 
//Expected output: true | false | true 
//
function isPalindrome(str) {
    let newStr = str.toLowerCase().replaceAll(" ", "");
    let reversed = newStr.split("").reverse().join("");
    return newStr === reversed;
}
console.log(isPalindrome("racecar"));           // true
console.log(isPalindrome("hello"));             // false
console.log(isPalindrome("Never Odd Or Even")); // true

//Task36
//Grade report generator 
//Declare a student name and an array of 5 test scores.
// Write a function that: calculates the average, determines the letter grade (A≥90, B≥80, C≥70, D≥60, F<60),
// and prints a full report. 
//Expected output: Sara | Avg: 76.6 | Grade: C 
function studentReport(name, grades) {
    let sum = 0;
    for (let score of grades) {
        sum += score;
    }
    const average = sum / grades.length;
    let levelGrade;
    switch (true) {
        case average >= 90:
            levelGrade = "A";
            break;
        case average >= 80:
            levelGrade = "B";
            break;
        case average >= 70:
            levelGrade = "C";
            break;
        case average >= 60:
            levelGrade = "D";
            break;
        default:
            levelGrade = "F";
    }
    console.log(`${name} | Avg: ${average.toFixed(1)} | Grade: ${levelGrade}`);
}
const studentName = "Sara";
const scores = [70, 80, 75, 90, 68];
studentReport(studentName, scores);

//Task37
//Number guessing game simulation 
function checkGuess(guess) {
    if (guess < secretNumber) {
        return "Too low";
    } else if (guess > secretNumber) {
        return "Too high";
    } else {
        return "Correct!";
    }
}
const secretNumber = 42;
const guesses = [10, 60, 42];
for (let guess of guesses) {
    console.log(checkGuess(guess));
}

//Task38
//Build a simple calculator function 
//Write a function calculate(a, operator, b) that performs the operation and returns the result.
// Support "+", "-", "*", "/". For division by 0, return "Error: division by zero".
// For unknown operators, return "Error: unknown operator". 
//Expected output: 15 | 6 | 50 | Error: division by zero 
function calculate(a, operator, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Error: division by zero";
            }
            return a / b;
        default:
            return "Error: unknown operator";
    }
}
console.log(calculate(10, "+", 5)); // 15
console.log(calculate(10, "-", 4)); // 6
console.log(calculate(10, "*", 5)); // 50
console.log(calculate(10, "/", 0)); // Error: division by zero

//Task39
//Print a pyramid pattern 
//Write a function pyramid(rows) that prints a centered star pyramid. For rows=5: 
//* 
//*** 
//***** 
//******* 
//********* 
function pyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let spaces = " ".repeat(rows - i);
        let stars = "*".repeat(i * 2 - 1);
        console.log(spaces + stars);
    }
}
pyramid(5);
//Task40
//Collatz conjecture 
//The Collatz conjecture: start with any positive integer n. 
// If n is even → divide by 2. If n is odd → multiply by 3 and add 1.
// Repeat until n = 1. Write a function collatz(n) that prints each step and returns the number of steps.
// Expected output: collatz(6) → 6, 3, 10, 5, 16, 8, 4, 2, 1 — 8 steps 
function collatz(n) {
    let steps = 0;
    while (n !== 1) {
        console.log(n);
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = n * 3 + 1;
        }
        steps++;
    }
    console.log(1);
    return steps;
}
console.log("Steps:", collatz(6));

//Task 41
// Number to words (1–20)
// Write a function numberToWord(n) that converts a number 1–20 to its English word.
// Use an object or array lookup — no if/else chains.
// Return "out of range" for anything outside 1–20. 
//Expected output: numberToWord(7) → "seven" | numberToWord(15) → "fifteen" | numberToWord(25) → "out of range" 
function numberToWord(n) {
    const numberWords = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty"
    };
    return numberWords[n] || "out of range";
}
console.log(numberToWord(7));   // seven
console.log(numberToWord(15));  // fifteen
console.log(numberToWord(25));  // out of range

//Task42
//FINAL — Mini bank account simulation 
//Build a simple bank account simulation using functions and variables: 
//• Start with balance = 1000 
//• Write function deposit(amount): adds amount if > 0, else prints error 
//• Write function withdraw(amount): subtracts if amount <= balance and > 0, else prints error • Write function getBalance(): returns current balance 
//• Simulate: deposit 500, withdraw 200, withdraw 2000 (should fail), print final balance 
//Expected output: Balance: 1000 → deposit 500 → 1500 → withdraw 200 → 1300 → withdraw 2000 FAILED → 1300 
function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        console.log(`Deposit ${amount} → ${balance}`);
    } else {
        console.log("Error: invalid deposit amount");
    }
}
function withdraw(amount) {

    if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Withdraw ${amount} → ${balance}`);
    } else {
        console.log(`Withdraw ${amount} FAILED`);
    }
}
let balance = 1000;
console.log(`Balance: ${balance}`);
deposit(500);
withdraw(200);
withdraw(2000);
console.log(balance);