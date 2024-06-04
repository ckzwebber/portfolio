let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 50) {
    navbar.style.top = "-90px";
    menu.style.opacity = "0";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop;
});

function scrollToPosition(targetPosition, duration) {
  const startPosition = window.scrollY || document.documentElement.scrollTop;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

function scrollToTop() {
  scrollToPosition(0, 1000);
}

function scrollToSection(selector) {
  const content = document.querySelector(selector);
  if (content) {
    const offset = content.getBoundingClientRect().top + window.scrollY;
    scrollToPosition(offset, 1000);
  }
}

function scrollToAbout() {
  scrollToSection(".sobre");
}

function scrollToProjects() {
  scrollToSection(".projetos");
}

function scrollToContato() {
  scrollToSection(".copy");
}

function checkVisibility() {
  const elements = document.querySelectorAll(".aparecer");

  elements.forEach((element) => {
    const position = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (position.top <= windowHeight * 0.65) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("load", checkVisibility);
window.addEventListener("scroll", checkVisibility);

function typeText(text, elementId) {
  let currentText = "";
  let index = 0;
  const cursorElement = document.getElementById(elementId);

  function updateText() {
    if (index < text.length) {
      currentText += text[index];
      cursorElement.textContent = currentText + "|";
      index++;

      setTimeout(updateText, 300);
    } else {
      cursorElement.textContent = currentText;
    }
  }

  updateText();
}

typeText("FullStack Developer", "js-subtitle");

const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {
  if (menu.style.opacity === "1") {
    menu.style.opacity = "0";
  } else {
    menu.style.opacity = "1";
  }
});

const menuItems = menu.querySelectorAll("li");
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    menu.style.opacity = "0";
  });
});
