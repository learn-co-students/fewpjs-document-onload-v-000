// Your code goes here
//document.addEventListener("DOMContentLoaded", 
//function() {
//  let phrase = document.getElementById("text")
//  phrase.innerHTML = "This is really cool!"
//})


//solution had event listener call the function instead of doing everything w/in the listener

document.addEventListener("DOMContentLoaded",
function(){
  updateDOM()
})

//did not need to use a variable, but can if I want to

function updateDOM() {
  document.getElementById("text")
  .innerHTML = "This is really cool!"
}