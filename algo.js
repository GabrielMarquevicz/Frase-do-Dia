function pegaFrase() {
  const paragrafo = document.querySelector(".oi2");
  const author = document.querySelector(".oi");

  fetch("https://api.quotable.io/random")
    .then((dado) => dado.json())
    .then((api) => {
      paragrafo.textContent = api.content;
      author.textContent = api.author;
    });
}

window.onload = pegaFrase;
