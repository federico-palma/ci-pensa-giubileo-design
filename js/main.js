// Header
let header = document.getElementById("header");
let submenuBtn = document.getElementById("nav-link-btn");
let submenu = document.getElementById("submenu");
let menuIsOpen = false;
let distanceTop = window.pageYOffset;
let distanceTopThreshold = 200;

let pageLocation = window.location.pathname;


if (pageLocation == "/") {
  document.addEventListener("scroll", () => {
    // console.log(window.pageYOffset);
    distanceTop = window.pageYOffset;
    if (distanceTop < distanceTopThreshold && !menuIsOpen) {
      header.classList.remove("scrolled-down");
    } else {
      header.classList.add("scrolled-down");
    }
  });
} else {
  header.classList.add("scrolled-down");
}

submenuBtn.addEventListener("click", () => {
  if (!menuIsOpen) {
    header.classList.add("scrolled-down");
    submenu.classList.add("submenu-open");
    submenuBtn.classList.add("text-decoration-underline")
    menuIsOpen = true;
  } else {
    if (distanceTop < distanceTopThreshold && pageLocation == "/") {
        header.classList.remove("scrolled-down");
    }
    submenuBtn.classList.remove("text-decoration-underline")
    submenu.classList.remove("submenu-open");
    menuIsOpen = false;
  }
});
