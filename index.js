// Your code goes her


document.addEventListener("DOMContentLoaded", function() {
  // tagged = document.getElementById('text')
  const tagged = document.querySelector('p')

  tagged.textContent = "This is really cool!"
  console.log("The DOM has loaded");
})

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
