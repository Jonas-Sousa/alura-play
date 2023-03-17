async function videoList () {
    const getResponseApi = await fetch("http://localhost:3000/videos")
    const turnedIntoObject = await getResponseApi.json();

    return turnedIntoObject;
};

async function createVideo(titulo, descricao, url, imagem) {
    const conect = await fetch("http://localhost:3000/videos", {
        method:"POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    const convertedApi = await conect.json();
    return convertedApi
};

async function buscaVideo(termoDeCondicao) {
    
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeCondicao}`)
    const conexaoConvertida = conexao.json()

    return conexaoConvertida;

}


export const connectApi = {
    videoList,
    createVideo,
    buscaVideo

}