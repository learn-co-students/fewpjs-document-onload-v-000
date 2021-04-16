// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    const domLoadText = document.getElementById("text");
    domLoadText.innerHTML = '<p>This is really cool!</p>';
  });

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );