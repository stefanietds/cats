import { hpApi } from "../../service/api";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./../../components/header/index";
import Search from "./../../components/search/index";
import Modal from "../../components/modal";
import CardHP from "./../../components/cardhp/index";

const HarryPoter = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

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

  const handleOpenModal = (data) => {
    setSelectedCard(data);
    setIsOpen(true);
  };

  return (
    <>
      <div className="w-screen h-screen bg-blue-200 fixed">
        <Header />
        <div>
          <div>
            <Search send={handleSearch} />
            <h1>{search}</h1>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {data.map((data) => (
              <div key={data.index} className="bg-blue-600 h-64 p-2 relative flex flex-col items-center justify-between m-3">
                <CardHP data={data} />
                 <button 
                   className="absolute top-2 right-2 p-2 hover:bg-gray-100"
                 onClick={() => handleOpenModal(data)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99"
                    />
                  </svg>
                </button> 
                {isOpen && <Modal setIsOpen={setIsOpen} data={selectedCard} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HarryPoter;
