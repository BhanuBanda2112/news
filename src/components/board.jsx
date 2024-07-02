import { useState, useEffect } from "react";
import { Newscard } from "./Newscard";


export const Board = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=4fa9e4771a3347479b6d1a68ae1d546c`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <span className="text-center badge bg-alert ">
        Latest
        <span className="badge bg-alert"></span>
      </span>
      <div>
        {articles.map((news, index) => (
          <Newscard
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
          
        ))}
      </div>
    </div>
  );
};
