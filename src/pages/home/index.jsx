import { useEffect, useState } from "react";
import Header from "../../components/header";
import api from "../../service/api";
import Card from "../../components/card";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get("/search?limit=10")
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("Ocorreu um erro:" + err);
      });
  }, []);

  if (!data) {
    return <div>Carregando...</div>;
  }
//TODO: alterar tamanho div principal e cards
  return (
    <>
      <div className="w-full h-full bg-blue-200">
        <Header />
        <div className="flex flex-col justify-center items-center h-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full px-4">
            {data.map((id) => (
              <Card key={id} dados={id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
