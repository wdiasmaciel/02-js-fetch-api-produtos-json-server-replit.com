let noticia = {};

document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    await buscarNoticia(id);
    apresentarDetalhesDaNoticia();
});

//GET:
const buscarNoticia = async (id) => {
    const replit = 'https://7e05163a-d017-46f9-9c6d-9b54636fc02d-00-13ilh843ckczq.worf.replit.dev/'; // URL do projeto no Replit.com.
    const url = replit + "noticias/" + id;

    await fetch(url)
        .then(response => response.json())
        .then(json => noticia = json)
        .catch(error => console.error(error))
};

const apresentarDetalhesDaNoticia = () => {
    const container = document.getElementById("painel-de-detalhes");
    
    if (noticia && noticia.id != undefined) {
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
        noticia = {};
    }
    else
        container.innerHTML = "<h2>Notícia não encontrada!</h2>"
}
