const navbar = document.querySelector(".navbar");
const burguer = document.querySelector(".burguer");

burguer.addEventListener("click", () => {
  burguer.classList.toggle("active");
  navbar.classList.toggle("active");
});