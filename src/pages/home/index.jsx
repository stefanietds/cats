import { useEffect, useState } from "react";
import Header from "../../components/header";
import Card from "../../components/card";
import { catApi } from "./../../service/api";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    catApi.get("/search?limit=10")
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("Ocorreu um erro:" + err);
      });
  }, []);

  if (!data) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className="w-full h-full bg-blue-200 fixed">
        <Header />
          <div className="grid grid-cols-5 gap-1 ml-10 mt-5 mb-5">
            {data.map((id) => (
              <Card key={id} dados={id} />
            ))}
          </div>
      </div>
    </>
  );
};

export default Home;
