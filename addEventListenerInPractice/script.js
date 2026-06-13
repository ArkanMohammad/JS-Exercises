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
likeBtn.addEventListener("click", function(){
    currentLikes++;
    likeCount.textContent = `Likes: ${currentLikes}`;
});
resetBtn.addEventListener("click", function () {
  likes = 0;
  likeCount.textContent = "Likes: 0";
});