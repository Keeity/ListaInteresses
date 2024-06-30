async function getNewsIBGE() {

    try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release');
        const data = await response.json();
        const latestNews = data.items[0];
      
        document.getElementById('todayNews').textContent = latestNews.titulo;
        document.getElementById('newsRef').href = latestNews.link;
        
   
const jsonObject = JSON.parse(latestNews.imagens);
const imageFulltext = jsonObject.image_fulltext;

document.getElementById('newsImage').src = `https://agenciadenoticias.ibge.gov.br/${imageFulltext}`;
      
    } catch (error) {
        console.error('Erro ao tentar encontrar a notícia:', error);
    }

}
getNewsIBGE()
