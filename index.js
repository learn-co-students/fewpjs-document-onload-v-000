// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
  changedText()
});

let text = document.getElementById("text");

function changedText() {
  text.textContent = "This is really cool!"
}
