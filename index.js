// Your code goes here

// document.addEventListener("DOMContentLoaded", function(){
//     let newLine = document.getElementById("text")
//     return newLine.textContent = "This is really cool!";
// });

document.addEventListener("DOMContentLoaded", function(){
    updateDOM();
});

function updateDOM(){
    document.getElementById("text").textContent = "This is really cool!";
}