//STEP 1 — Create the initial list  
//Create an array named students containing the following 
//names: "Dania", "Omar", "Lina", "Rami"  
let students = ["Dania", "Omar", "Lina", "Rami"];
//console.log(students);

//STEP 2 — Add a new student to the end  
//Add "Sara" to the end of the students list.  
students.push("Sara");
//console.log(students);

//STEP 3 — Add a new student to the beginning  
//Add "Adam" to the beginning of the list.  
students.unshift("Adam");
//console.log(students);

//STEP 4 — Update a name  
//A student changed their name: Replace "Lina" with "Lamar" inside the list.  
students[3] = "Lamar";
//console.log(students);

//STEP 5 — Remove the last student  
//Remove the last student from the list and store the removed value
const removedStudent = students.pop();
//console.log(removedStudent);
//console.log(students);

//STEP 6 — Remove the first student  
//Remove the first student from the list and store the removed value in:
//removedFirst
const removedFirst = students.shift();
//console.log(removedFirst);
//console.log(students);


//STEP 7 — Check if a name exists  
//Check whether the name "Rami" still exists in the list and store the result in:  
//hasRami  
const hasRami = students.includes("Rami");
console.log(hasRami);

//STEP 8 — Find the position of a student  
//Find the position (index) of "Omar" inside the list and store it in:  
//omarIndex  
const omarIndex = students.indexOf("Omar");
console.log(omarIndex);

//STEP 9 — Create a new group  
//Create a new list called groupA containing only the first two students from the current list.  
const groupA = students.slice(0, 2);
console.log(groupA);

//STEP 10 — Merge groups  
//Create a second group:  
//groupB = ["Nour", "Tala"]  
//Combine groupA and groupB together into a new list named:  
//allGroups  