import {connectApi} from './connectApi.js'
import buildCard from './showVideos.js';

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value
    const busca =  await connectApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]")

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(elemento => lista.appendChild(
        buildCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)
    ));
    if(busca.length == 0) {
    lista.innerHTML = `<hr class="mensagem__">Não existem vídeos com esse termo</h2>`
    }

}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")

botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento))