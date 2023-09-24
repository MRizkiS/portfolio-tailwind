// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Mengambil elemen dengan ID "current-year"
var currentYearElement = document.getElementById("current-year");

// Mendapatkan tahun saat ini
var currentYear = new Date().getFullYear();

// Menetapkan tahun saat ini ke dalam elemen HTML
currentYearElement.textContent = currentYear;
