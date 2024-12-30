import { useEffect, useState } from "react";
import Header from "../../components/header";
import { newsApi } from "../../service/api";
import Search from './../../components/search/index';
import CardNews from './../../components/cardnews/index';

//TODO: paginar e estilizar
const News = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  const fetchNews = (search) => {
      newsApi.get(`/everything?q=${search}&sortBy=popularity`)
      .then((response) => setData(response.data.articles))
      .catch((err) => {
        setError("Não foi possível obter as notícias. Tente novamente mais tarde.");
        console.error("Ocorreu um erro:" + err);
      });
  };

  useEffect(() => {
    if (search === '') {
      setSearch('a'); 
   }
   fetchNews(search);
  },[search]);

  const handleSearch = (search) => {
    setSearch(search);
  }

  //TODO:Melhorar
  if (error) {
    return <h1>{error}</h1>; 
  }

  // if (!data) {
  //   return <h1>Carregando...</h1>; 
  // }

  return (
    <>
      <div className="w-full h-full bg-blue-200 fixed">
        <Header />
        <div>
          <div>
            <Search send={handleSearch} />
          </div>
          {data.map((article, index) => (
            <div key={index} className="h-65 w-4/5 shadow-md rounded-md flex flex-col p-2">
              <CardNews data={article} index={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
