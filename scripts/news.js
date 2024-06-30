async function getNewsIBGE() {

    try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release');
        const data = await response.json();
        const latestNews = data.items[0];
        const todayNews = document.getElementById('todayNews');
        const newsImage = document.getElementById('newsImage');
        const newsRef = document.getElementById('newsRef');

        todayNews.textContent = latestNews.titulo;
        newsRef.href = latestNews.link;
        

const jsonObject = JSON.parse(latestNews.imagens)
const imageFulltext = jsonObject.image_fulltext;
console.log(jsonObject);

newsImage.src = `https://agenciadenoticias.ibge.gov.br/${imageFulltext}`;
      
    } catch (error) {
        console.error('Erro ao tentar encontrar a notícia:', error);
    }

}
getNewsIBGE()
