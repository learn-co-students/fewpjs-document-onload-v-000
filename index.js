// Your code goes here

// document.addEventListener("DOMContentLoaded",
// function() {
//   console.log("The DOM has loaded");
// });
//
// console.log(
//   "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
// );


document.addEventListener("DOMContentLoaded",
function() {
  updateDOM();
});

function updateDOM() {
  document.getElementById('text').textContent = "This is really cool!";
  // document.getElementById('text').innerHTML = "This is really cool!"; .innerHTML and .textContent are interchangeable here. 
}



// document.addEventListener("DOMContentLoaded", function() {
//   updateDOM();
// });
//
// function updateDOM() {
//   document.getElementById('text').textContent = 'This is really cool!';
// }
