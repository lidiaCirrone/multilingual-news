import React, { useState, useEffect } from 'react';
import './News.css';

const APIkey = '06f42ffd68a14507846224e8e54a5fa5';

async function getNews(language) {
   let url = `http://newsapi.org/v2/top-headlines?country=${language}&apiKey=${APIkey}`;
   return await fetch(url).then(news => news.json());
}

// it
// gb
// fr
// es NOT
// ru
// pt
// de



function News() {

   const [news, setNews] = useState([]);

   useEffect(() => {

      getNews('ru').then(response => {
         console.log('ru', response);
         setNews(response.articles);
      })

   }, [])

   return (
      <ul>
         {
            news.map((article, i) => {
               return <li key={i}>
                  <p>{article.author}</p>
                  <p>{article.description}</p>
                  <p>{article.publishedAt}</p>
                  <p>{article.title}</p>
                  <p>{article.source.name}</p>
                  <p>{article.url}</p>
                  <p>{article.urlToImage}</p>
               </li>
            })
         }
      </ul>
   );
}

export default News;
