document.addEventListener("DOMContentLoaded", function() {
  updateDOM()
});

function updateDOM() {
  let text = document.getElementById('text')
  text.textContent = "This is really cool!";
}
