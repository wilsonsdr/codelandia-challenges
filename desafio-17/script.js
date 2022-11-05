const burguer = document.querySelector(".burguer");
const navBar = document.querySelector(".navbar");

burguer.addEventListener("click", () => {
  burguer.classList.toggle("active");
  navBar.classList.toggle("active");
});