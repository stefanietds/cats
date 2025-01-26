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

  // if (!data) {
  //   return <div>Carregando...</div>;
  // }

  return (
    <>
      <div className="bg-blue-200 fixed w-screen h-screen">
        <Header />
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 m-5">
            {data.map((id) => (
              <Card key={id} dados={id} />
            ))}
          </div>
      </div>
    </>
  );
};

export default Home;
