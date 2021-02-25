const text = "This is really cool!"

const wrapper = document.getElementById("text")

document.addEventListener("DOMContentLoaded", function(){
  console.log("The DOM has loaded")
  wrapper.textContent = text
})

