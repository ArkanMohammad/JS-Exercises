/*
SHOW DATA OF DOM TREE IN CONSOLE OF BROWSER:-
console.log(document.documentElement);
console.dir(document.documentElement);
console.log(document.body);
console.dir(document.body);
console.log(document.querySelectorAll("*"));
document.querySelectorAll("*").forEach(el => {
  console.log(el.tagName);
});
*/
/*
Task 1: The Like Button 
The like button should count how many times it has been pressed.
Every click adds one to the counter and updates the likeCount paragraph.
The reset button brings the count back to zero and restores the original text. 
*/
let currentLikes = 0;
const likeBtn = document.getElementById("likeBtn");
const resetBtn = document.getElementById("resetBtn");
const likeCount = document.getElementById("likeCount");
likeBtn.addEventListener("click", function() {
    currentLikes++;
    likeCount.textContent = `Likes: ${currentLikes}`;
});
resetBtn.addEventListener("click", function () {
    currentLikes = 0;
    likeCount.textContent = "Likes: 0";
});
/*
Task 2: The Greeter 
When the greet button is clicked, read whatever is in the nameInput field.
If the field has a value, show "Hello, [name]!" in the greetMsg paragraph.
If the field is empty, show "Please enter your name first."
After greeting, clear the input and give it focus. 
*/
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const greetMsg = document.getElementById("greetMsg");
greetBtn.addEventListener("click", function () {
    if (nameInput.value !== "") {
    greetMsg.textContent = `Hello, ${nameInput.value}!`;
    } else {
        greetMsg.textContent = "Please enter your name first.";
    }
  nameInput.value = "";
  nameInput.focus();
});
/*
Task 3: The Live Mirror 
As the user types in liveInput,
the liveOutput paragraph should mirror exactly what is being typed -- updating on every single keystroke.
When the field is empty, show "Waiting..." instead. When the text is longer than 20 characters,
also add the class "long" to the paragraph.
*/
const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");
liveInput.addEventListener("input", function () {
  if (liveInput.value === "") {
    liveOutput.textContent = "Waiting...";
  } else {
    liveOutput.textContent = liveInput.value;
  }
  if (liveInput.value.length > 20) {
    liveOutput.classList.add("long");
  } else {
    liveOutput.classList.remove("long");
  }
});
/*
Task 4: The Key Logger 
When keyInput has focus and the user presses a key,
show the key name in the keyLog paragraph.
If a modifier was held (Shift, Ctrl, or Alt), include it in the display.
Format: "Ctrl + S" or just "Enter" or "a".
Pressing Escape should clear the input and reset the log to empty. 
*/
const keyInput = document.getElementById("keyInput");
const keyLog = document.getElementById("keyLog");
keyInput.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    keyInput.value = "";
    keyLog.textContent = "";
    return;
  }
  let keyText = "";
  if (event.ctrlKey) {
    keyText += "Ctrl + ";
  }else if (event.shiftKey) {
    keyText += "Shift + ";
  }else if (event.altKey) {
    keyText += "Alt + ";
  }
  keyText += event.key;
  keyLog.textContent = keyText;
});
/*
Task 5: The Task Delegator Hard
Using a single event listener on the taskList -- not one listener per item -- make each list
item strike through when clicked. Clicking it again removes the strikethrough. Also listen for
a double-click on the list: if the user double-clicks any item, remove it. New items added to
the list later must work with the same listeners -- no re-binding.
*/
const taskList = document.getElementById("taskList");
taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
        if (event.target.style.textDecoration === "line-through") {
            event.target.style.textDecoration = "none";
        } else {
            event.target.style.textDecoration = "line-through";
        }
    }
});
taskList.addEventListener("dblclick", function (event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});
/*
Task 6: The Smart Form Hard
submit preventDefault validation e.target
When contactForm is submitted, stop the page from reloading. Check that both emailInput
and subjectInput have values. If either is empty, show "Please fill in all fields." in formStatus
in red. If both are filled, show "Message sent to [email]!" in green, clear both fields, and
remove the error styling. Use e.target to access the form fields instead of selecting them
separately.
*/
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();//stop the page from reloading
  const emailInput = event.target.emailInput.value;
  const subjectInput = event.target.subjectInput.value;
  if(emailInput === "" || subjectInput === ""){
    formStatus.textContent = "Please fill in all fields.";
    formStatus.style.color = "red";
  } else if (emailInput !== "" && subjectInput !== ""){
    formStatus.textContent = `Message sent to ${emailInput}!`;
    formStatus.style.color = "green";
    event.target.emailInput.value = "";
    event.target.subjectInput.value = "";
  }
});