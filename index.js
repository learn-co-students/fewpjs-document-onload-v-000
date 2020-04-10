// Your code goes here

let paragraphText = document.querySelector(`p#text`)

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    paragraphText.innerHTML = `This is really cool!`
  });

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  // javascript doesn't like --f-f tags for learn
  