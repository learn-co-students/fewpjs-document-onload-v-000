document.addEventListener("DOMContentLoaded", function() {
  replaceParagraphText();
});

function replaceParagraphText() {
  let p = document.getElementById("text");
  p.textContent = "This is really cool!";
}
