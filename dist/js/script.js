// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const atas = document.querySelector("#atas");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    atas.classList.remove("hidden");
    atas.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    atas.classList.remove("flex");
    atas.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

var currentYearElement = document.getElementById("current-year");

var currentYear = new Date().getFullYear();

currentYearElement.textContent = currentYear;

window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target !== navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

const darkToggle = document.querySelector("#dark");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

const texts = ["Hi, I'm Rizki", "Junior Frontend Developer"];
const typingContainer = document.getElementById("typing-container");
let currentTextIndex = 0;
let currentText = "";
let isDeleting = false;
let typingSpeed = 100; // Adjust the typing speed (milliseconds per character)

function type() {
  const text = texts[currentTextIndex];
  if (isDeleting) {
    currentText = text.substring(0, currentText.length - 1);
  } else {
    currentText = text.substring(0, currentText.length + 1);
  }

  typingContainer.innerHTML = currentText;

  let typingDelay = isDeleting ? typingSpeed / 2 : typingSpeed;

  if (!isDeleting && currentText === text) {
    typingDelay = 1500; // Pause after typing
    isDeleting = true;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    currentTextIndex++;
    if (currentTextIndex === texts.length) {
      currentTextIndex = 0;
    }
  }

  setTimeout(type, typingDelay);
}

document.addEventListener("DOMContentLoaded", function () {
  type();
});
