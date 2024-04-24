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

function rolarHome() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function rolarPort() {
  let conteudo = document.getElementById("title-portfolio");
  let offset = conteudo.getBoundingClientRect().top + window.scrollY + 120;
  window.scrollTo({ top: offset, behavior: "smooth" });
}

function rolarContato() {
  let conteudo = document.getElementById("title-contato");
  conteudo.scrollIntoView({ behavior: "smooth", block: "start" });
}

function lightMode() {
  let content = document.querySelector(".container");
  container.classList.toggle("light-mode");
}

function verificarVisibilidade() {
  let elementos = document.querySelectorAll(".aparecer");

  elementos.forEach(function (elemento) {
    let posicao = elemento.getBoundingClientRect();
    let alturaDaJanela =
      window.innerHeight || document.documentElement.clientHeight;

    if (posicao.top <= alturaDaJanela * 0.65) {
      elemento.classList.add("show");
    }
  });
}

window.addEventListener("load", verificarVisibilidade);
window.addEventListener("scroll", verificarVisibilidade);

function digitarTexto(texto, idElemento) {
  let textoAtual = "";
  let indice = 0;
  let cursorElemento = document.getElementById(idElemento);

  function atualizarTexto() {
    if (indice < texto.length) {
      textoAtual += texto[indice];
      cursorElemento.textContent = textoAtual + "|";
      indice++;

      setTimeout(atualizarTexto, 300);
    } else {
      cursorElemento.textContent = textoAtual;
    }
  }

  atualizarTexto();
}
digitarTexto("Sobre mim", "js-title-sobre");
