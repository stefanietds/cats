import { useEffect, useState } from "react";
import Header from "../../components/header";
import { newsApi } from "../../service/api";
import Search from './../../components/search/index';

//TODO: card, paginar, estilizar, icone para o link
const News = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  // useEffect(() => {
  //   newsApi.get(`/everything?q=${search}&sortBy=popularity`)
  //     .then((response) => setData(response.data.articles))
  //     .catch((err) => {
  //       console.error("Ocorreu um erro:" + err);
  //     });
  // }, [search]);

  // if (!data) {
  //   return <div>Carregando...</div>;
  // }

  //TODO: testar o search
  const fetchNews = (search) => {
      newsApi.get(`/everything?q=${search}&sortBy=popularity`)
      .then((response) => setData(response.data.articles))
      .catch((err) => {
        console.error("Ocorreu um erro:" + err);
      });
  };

  useEffect(() => {
      {search == '' ? "a" : search }
      fetchNews(search);
  },[search]);

  const handleSearch = (search) => {
    setSearch(search);
  }

  return (
    <>
      <div className="w-full h-full bg-blue-200 fixed">
        <Header />
        <div>
          <div>
            <Search send={handleSearch} />
            <h1>{search}</h1>
          </div>
          {data.map((article, index) => (
            <div key={index} className="h-65 w-4/5 shadow-md rounded-md flex flex-col p-2">
              <h3>{article.title !== "[Removed]" ? article.title : "Sem título" }</h3>
              <p>Author Name: {article.author ?? "Não identificado"}</p>
              <p>Data de Publicação: {article.publishedAt}</p>
              <p>Ler noticia: {article.url}</p>
            </div>
            // <cardnews key={index} data={article} />
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
