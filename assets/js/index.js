const nav = document.getElementById("nav");
const navToggle = nav.querySelector(".nav__toggle");

function openMobileNavbar() {
  nav.classList.add("opened");
  navToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar() {
  nav.classList.remove("opened");
  navToggle.setAttribute("aria-label", "Open navigation menu.");
}

navToggle.addEventListener("click", () => {
  if (nav.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});