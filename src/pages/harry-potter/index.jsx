import { hpApi } from "../../service/api";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./../../components/header/index";
import Search from "./../../components/search/index";
import Modal from "../../components/modal";

const HarryPoter = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const fetchNews = (search) => {
    hpApi
      .get(`/books?search=${search}`)
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("Ocorreu um erro:" + err);
      });
  };

  useEffect(() => {
    fetchNews(search);
  }, [search]);

  const handleSearch = (search) => {
    setSearch(search);
  };

  return (
    <>
      <div className="w-full h-full bg-blue-200 fixed">
        <Header />
        <div>
          <div>
            <Search send={handleSearch} />
            <h1>{search}</h1>
          </div>
          {data.map((data, index) => (
            <div key={index} id={index} className="">
              <h2>{data.title}</h2>
              <h5>Data de Lançamento: {data.releaseDate}</h5>
              <div className="">
                <img src={data.cover} alt="Imagem" />
              </div>
              <div>
                <button onClick={() => setIsOpen(true)}>Abrir Modal</button>
                {isOpen && <Modal setIsOpen={setIsOpen} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HarryPoter;
