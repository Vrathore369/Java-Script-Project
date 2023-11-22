const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-link");
  if (links.classList.contains("show-link")) {
    navToggle.style.transform = "rotate(90deg)";
  } else {
    navToggle.style.transform = "rotate(0deg)";
  }
});

// Close the menu when clicking on a link
document.querySelectorAll(".links a").forEach(function (link) {
  link.addEventListener("click", function () {
    links.classList.remove("show-link");
    navToggle.style.transform = "rotate(0deg)";
  });
});
