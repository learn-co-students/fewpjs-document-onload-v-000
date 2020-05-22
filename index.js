// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);


document.addEventListener("DOMContentLoaded", function () {
  updateDOM();
});

function updateDOM(){
  document.getElementById('text').textContent = "This is really cool!"
  // document.getElementById('text').innerHTML -- innerHTML and textContent are interchangeable.
}
