let noticia = {};

document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    await buscarNoticia(id);
    apresentarDetalhesDaNoticia();
});

//GET:
const buscarNoticia = async (id) => {
    const replit = 'https://34ac9f47-2892-46f8-87a3-6f2a6e58ccd3-00-33ak4a7xu53ng.riker.replit.dev/'; // URL do projeto no Replit.com.
    const url = replit + "noticias/" + id;

    await fetch(url)
        .then(response => response.json())
        .then(json => noticia = json)
        .catch(error => console.error(error))
};

const apresentarDetalhesDaNoticia = () => {
    const container = document.getElementById("painel-de-detalhes");
    
    if (noticia) {
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
