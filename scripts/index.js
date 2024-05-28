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

function rolarProj() {
  var conteudo = document.getElementById("title-projetos");
  var offset = conteudo.getBoundingClientRect().top + window.scrollY + 120;
  window.scrollTo({ top: offset, behavior: "smooth" });
}

function rolarContato() {
  var conteudo = document.getElementById("title-contato");
  conteudo.scrollIntoView({ behavior: "smooth", block: "start" });
}

function verificarVisibilidade() {
  var elementos = document.querySelectorAll(".aparecer");

  elementos.forEach(function (elemento) {
    var posicao = elemento.getBoundingClientRect();
    var alturaDaJanela =
      window.innerHeight || document.documentElement.clientHeight;

    if (posicao.top <= alturaDaJanela * 0.65) {
      elemento.classList.add("show");
    }
  });
}

window.addEventListener("load", verificarVisibilidade);
window.addEventListener("scroll", verificarVisibilidade);

function digitarTexto(texto, idElemento) {
  var textoAtual = "";
  var indice = 0;
  var cursorElemento = document.getElementById(idElemento);

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
digitarTexto("Frontend Devloper", "js-title-sobre");
