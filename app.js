const btn = document.querySelector("#btn");
const nav = document.querySelector("#navbar");

btn.addEventListener("click", open);
function open(e) {
  e.preventDefault();
  console.log("karim is here ");
  nav.classList.add("opened");
}
