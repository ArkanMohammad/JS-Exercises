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