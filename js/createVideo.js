import { connectApi } from "./connectApi.js";

const form = document.querySelector("[data-form]");

async function creatingVideo(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[data-image]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-title]").value;
    const descricao = Math.floor(Math.random() * 10).toString()


    try {
      
        await connectApi.createVideo(titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html";
    } catch (error) {
        alert(error)
    }
}

form.addEventListener("submit", evento => creatingVideo(evento))

