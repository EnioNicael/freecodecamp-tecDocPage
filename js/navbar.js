const botao = document.getElementById("btn");
const navbar = document.getElementById("navbar");
let navbarOpen = false;

botao.onclick = () => {
  if (navbarOpen) {
    navbar.style.left = "-200px";
    navbarOpen = false;
  } else {
    navbar.style.left = "0";
    navbarOpen = true;
  }
};
