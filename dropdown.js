const nav = document.getElementById("nav");
const button = document.getElementById("burgerButton");

button.addEventListener("click", burgermenu);

function burgermenu() {
  if (nav.style.display === "grid") {
    nav.style.display = "none";
  } else {
    nav.style.display = "grid";
  }
}