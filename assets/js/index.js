// Footer menu toggle
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

// Collapse
var coll = document.getElementsByClassName("collapse");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}