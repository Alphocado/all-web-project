const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Toggle class active
// ketika hamburger menu diklik
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
