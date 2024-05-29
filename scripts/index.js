let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 50) {
    navbar.style.top = "-90px";
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

function scrollToAbout() {
  const content = document.querySelector("#title-sobre");
  const offset = content.getBoundingClientRect().top + window.scrollY - 120;
  scrollToPosition(offset, 1000);
}

function scrollToProjects() {
  const content = document.querySelector(".p-projetos");
  const offset = content.getBoundingClientRect().top + window.scrollY - 120;
  scrollToPosition(offset, 1000);
}

function scrollToContact() {
  const content = document.querySelector(".copy");
  const offset = content.getBoundingClientRect().top + window.scrollY;
  scrollToPosition(offset, 1000);
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

typeText("FullStack Developer", "js-title-sobre");

const buttonAPI = document.getElementById("btn-api");
const buttonC = document.getElementById("btn-c");
const buttonTask = document.getElementById("btn-task");

buttonAPI.addEventListener("click", function openAPI() {
  const urlAPI = "https://github.com/ckzwebber/Aprendizagem-.NET";
  window.open(urlAPI);
});

buttonC.addEventListener("click", function openC() {
  const urlC = "https://github.com/ckzwebber/Projetos-Faculdade-C-";
  window.open(urlC);
});
