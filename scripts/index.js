let navbar = document.getElementById("navbar");
let menu = document.getElementById("navbar-mobile-menu");
let menuButton = document.getElementById("navbar-mobile-button");
let lastScrollTop = 0;

window.addEventListener("scroll", hideNavbar);
window.addEventListener("scroll", youCanSee);
window.addEventListener("load", youCanSee);
window.addEventListener("load", writeSubtitle);
menuButton.addEventListener("click", toggleMobileNavbar);

function hideNavbar() {
  let nowScrollTop = window.scrollY;

  if (nowScrollTop > 50 && nowScrollTop > lastScrollTop) {
    navbar.style.top = "-90px";
    menu.style.opacity = 0;
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = nowScrollTop;
}

function scrollToThe(section) {
  let position = document.getElementById(section);
  if (position) {
    window.scrollTo({ top: position.offsetTop, behavior: "smooth" });
  }
}

function youCanSee() {
  let component = document.querySelectorAll(".show-when-see");

  component.forEach((component) => {
    let page = component.getBoundingClientRect();
    let pageHeight = window.innerHeight;

    if (page.top <= pageHeight * 0.65) {
      component.classList.add("show");
    }
  });
}

function writeSubtitle() {
  let setText = "";
  let text = "FullStack Developer";
  let i = 0;
  let cursor = document.getElementById("home-subtitle");

  function updateSubtitle() {
    if (i < text.length) {
      setText += text[i];
      cursor.textContent = setText + "|";
      i++;

      setTimeout(updateSubtitle, 300);
    } else {
      cursor.textContent = setText;
    }
  }

  updateSubtitle();
}

function toggleMobileNavbar() {
  if (menu.style.opacity === "1") {
    menu.style.opacity = "0";
  } else {
    menu.style.opacity = "1";
  }
}
