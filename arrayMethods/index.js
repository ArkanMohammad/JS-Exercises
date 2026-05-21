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
//console.log(hasRami);

//STEP 8 — Find the position of a student  
//Find the position (index) of "Omar" inside the list and store it in:  
//omarIndex  
const omarIndex = students.indexOf("Omar");
//console.log(omarIndex);

//STEP 9 — Create a new group  
//Create a new list called groupA containing only the first two students from the current list.  
const groupA = students.slice(0, 2);
//console.log(groupA);

//STEP 10 — Merge groups  
//Create a second group:  
//groupB = ["Nour", "Tala"]  
//Combine groupA and groupB together into a new list named:  
//allGroups
const groupB = ["Nour", "Tala"];
const allGroups = groupA.concat(groupB);
//console.log(allGroups);

//STEP 11 — Create a readable text version  
//Convert the allGroups list into a single string, separating each name with " | ". Store this text 
//inside: groupString  
const groupString = allGroups.join(" | ");
//console.log(groupString);

//STEP 12 — Sort alphabetically  
//Sort the main students list alphabetically.
students.sort();
//console.log(students);

//STEP 13 — Reverse the order  
//Reverse the sorted list so the order becomes descending instead of ascending.  
students.reverse();
console.log(students);

//STEP 14 — Modify a list using a single command  
//Create the following list:  
//seats = [1, 2, 3, 4, 5];  
//Replace the middle three items with the word "Reserved" in one array operation and store the result 
//in: reservedSeats  
//(The final shape must be:)  
//[1, "Reserved", "Reserved", "Reserved", 5]  
const seats = [1, 2, 3, 4, 5];
seats.splice(1, 3, "Reserved", "Reserved", "Reserved");
const reservedSeats = seats;
//console.log(reservedSeats);

//STEP 15 — Convert an array to text  
//Convert the final version of the main students list into a single string. Store it 
//in: studentsString
const studentsString = students.join(", ");
//console.log(studentsString);

//STEP 16 — Final Output  
//Display all of the following:  
//students  
//removedLast  
//removedFirst  
//hasRami  
//omarIndex  
//groupA  
//allGroups  
//groupString  
//reservedSeats  
//studentsString 
console.log("students:", students);
console.log("removedLast:", removedStudent);
console.log("removedFirst:", removedFirst);
console.log("hasRami:", hasRami);
console.log("omarIndex:", omarIndex);
console.log("groupA:", groupA);
console.log("allGroups:", allGroups);
console.log("groupString:", groupString);
console.log("reservedSeats:", reservedSeats);
console.log("studentsString:", studentsString);