//Task8
console.log(2 + 3 * 4); //12
console.log((2 + 3) * 4); //20
console.log(2 ** 3 * 2); //16
console.log(10 % 3 + 1); //2
console.log(5 + 3 > 7 && 4 !== 5);// 8 > 7 && 4 !== 5 // true && true //  => true

//Task9
//Short-circuiting means && stops at the first falsy value, || stops at the first truthy value. Predict the output. 
console.log(true && "hello");  //hello
console.log(false && "hello"); //false
console.log(0 || "default"); //default
console.log("value" || "default"); //value
console.log(null ?? "fallback"); // ?? is nullish coalescing // if its null/undefined using the second oprion //fallback

//Task10
//Calculates subtotal (price × quantity) • Calculates discount amount (subtotal × discountPercent / 100)
//Calculates final total (subtotal − discount) • Prints all four values
const price = 120;
const quantity = 3;
const discountPercent = 10;
// subtotal
const subtotal = price * quantity;
// discount amount
const discount = subtotal * discountPercent / 100;
// final total
const total = subtotal - discount;
console.log(`subtotal: ${subtotal}`);//360
console.log(`discount: ${discount}`);//36
console.log(`total: ${total}`);//324

//Task11
//Write code that checks whether a number is even or odd using the % operator.
const number = 17;
if (number % 2 === 0) {
    console.log(`${number} is even`);
} else {
    console.log(`${number} is odd`);
} //17 is odd

//Task12
//Rewrite the following using compound assignment operators (+=, -=, *=, /=, **=, %=). Each line should be ONE expression. 
//x = x + 5;  //x+=5
//x = x * 2;  //x*=2
//x = x - 3;  //x-=3
//x = x ** 2; // x**=2
//x = x % 7; //x%=7

//Task13
//Build a BMI calculator
//BMI = weight / (height ** 2). Round to 1 decimal place using toFixed(1)
const weight = 70;
const height = 1.75;
const BMI = weight /(height **2); 
console.log(`BMI: ${BMI.toFixed(1)}`); // out put ==> BMI: 22

//Task14
//Logical operators 
//Declare: isLoggedIn = true, isAdmin = false, age = 20. Then write ONE boolean expression for each rule: 
//• Can access basic content: must be logged in AND age >= 18 
//• Can access admin panel: must be logged in AND isAdmin 
//• Can access something: either logged in OR age >= 21 
//Expected output: true false true 
const isLoggedIn = true;
const isAdmin = false;
const age = 20;
// basic content
console.log(isLoggedIn && age >= 18);
// admin panel
console.log(isLoggedIn && isAdmin);
// access something
console.log(isLoggedIn || age >= 21);