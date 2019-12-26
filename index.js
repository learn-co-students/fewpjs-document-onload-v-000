document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM has loaded");
    var nodeWithTextToChange = document.getElementById('text');
    nodeWithTextToChange.textContent = "This is really cool!"
});

