function changeText() {
  document.querySelector("#text").textContent = "This is really cool!"
}

document.addEventListener("DOMContentLoaded", function() {
  changeText()
})
