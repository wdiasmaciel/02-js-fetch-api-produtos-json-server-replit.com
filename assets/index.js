let noticias = [];

async function alternarApresentacaoDasNoticias() {
    const container = document.getElementById("container");

    if (noticias.length == 0) {
        await buscarNoticias();
        apresentarNoticias();
    } else {
        container.innerHTML = "";
        noticias = [];
    }
}

//GET:
const buscarNoticias = async () => {
    const replit = 'https://34ac9f47-2892-46f8-87a3-6f2a6e58ccd3-00-33ak4a7xu53ng.riker.replit.dev/'; // URL do projeto no Replit.com.
    const url = replit + "noticias";

    await fetch(url)
        .then(response => response.json())
        .then(json => noticias = json)
        .catch(error => console.error(error))
};

//GET:
const buscarNoticia = async (id) => {
    const replit = 'https://34ac9f47-2892-46f8-87a3-6f2a6e58ccd3-00-33ak4a7xu53ng.riker.replit.dev/'; // URL do projeto no Replit.com.
    const url = replit + "noticias/" + id;
    let noticia;

    await fetch(url)
        .then(response => response.json())
        .then(json => noticia = json)
        .catch(error => console.error(error))

    return noticia;
};

function apresentarNoticias() {
    const container = document.getElementById("container");

    noticias.forEach(noticia => {
        const cartao = document.createElement("div");
        cartao.className = "cartao";

        cartao.innerHTML = `
          <img src="${noticia.imagem}" alt="${noticia.titulo}" class="imagem">
          <section class="corpo-do-cartao">
            <h2 class="titulo-noticia-cartao">${noticia.titulo}</h2>
            <p>${noticia.categoria} - ${noticia.data}</p>
            <p class="descricao-noticia-cartao">${noticia.descricao}</p>
            <p class="autor-noticia-cartao">${noticia.autor}</p>
          </section>
          <a class="botao-cartao" href="detalhe.html?id=${noticia.id}">Leia mais</a>
        `;

        container.appendChild(cartao);
    });
}

function apresentarDetalhesDaNoticia(noticia) {
    const container = document.getElementById("painel-de-detalhes");

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    const noticia = await buscarNoticia(id);

    if (noticia)
        container.innerHTML = `
              <h1>${noticia.titulo}</h1>
              <p>${noticia.categoria} - ${noticia.data}</p>
              <p>${noticia.autor}</p>
              <img class="painel-img" src="${noticia.imagem}" alt="${noticia.titulo}">
              <p>${noticia.conteudo}</p>
              <a href="index.html">
                <p class="botao-cartao">
                  Voltar  
                </p>
              </a>
            `;
    else
        container.innerHTML = "<h2>Notícia não encontrada!</h2>"
}

function alternarVisualizacaoDoMenuLateral() {
    const menu = document.querySelector("nav");
    menu.classList.toggle("menu-oculto");
}