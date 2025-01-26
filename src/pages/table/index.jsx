import SelectTeste from "../../components/selecteteste";
import Header from "../../components/header";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import DataGrid from "../../components/dataGrid";

const Table = () => {
  const [name, setName] = useState([]);
  const [color, setColor] = useState([]);
  // Estados para os nomes e cores selecionados
  const [selectedNames, setSelectedNames] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const [plotData, setPlotData] = useState(true);
  const [data, setData] = useState([]);

  // const [page, setPage] = useState(1);
  // const rowsPerPage = 2;

  const dataSelect = [
    {
      name: "João",
      colors: [
        { cor: "red" },
        { cor: "blue" },
        { cor: "black" },
        { cor: "yellow" },
      ],
    },
    {
      name: "Maria",
      colors: [
        { cor: "red" },
        { cor: "pink" },
        { cor: "nana" },
        { cor: "yellow" },
      ],
    },
    {
      name: "José",
      colors: [
        { cor: "red" },
        { cor: "blue" },
        { cor: "black" },
        { cor: "yellow" },
      ],
    },
    {
      name: "Ana",
      colors: [],
    },
  ];

  const dataResult = [
    {
      id: "1",
      name: "João",
      colors: [
        { cor: "red", descricao: "Descrição 1" },
        { cor: "blue", descricao: "Descrição 2" },
        { cor: "black", descricao: "Descrição 3" },
        { cor: "yellow", descricao: "Descrição 4" },
      ],
    },
    {
      id: "2",
      name: "Maria",
      colors: [
        { cor: "red", descricao: "Descrição 1" },
        { cor: "pink", descricao: "Descrição 2" },
        { cor: "nana", descricao: "Descrição 3" },
        { cor: "yellow", descricao: "Descrição 4" },
      ],
    },
    {
      id: "3",
      name: "João",
      colors: [
        { cor: "red", descricao: "Descrição 1" },
        { cor: "blue", descricao: "Descrição 2" },
        { cor: "black", descricao: "Descrição 3" },
        { cor: "yellow", descricao: "Descrição 4" },
      ],
    },
  ];

  // Função para lidar com a mudança de página
  // const handlePageChange = (event, newPage) => {
  //   setPage(newPage);
  // };

  //TODO paginar os dados e mandar para a tabela, ver Node.js (talvez)
  const paginatedData = (result) => {
    // const startIndex = (page - 1) * rowsPerPage;
    // const paginated = result.slice(startIndex, startIndex + rowsPerPage);
    setPlotData(true);
    setData(result);
  };

  const handleSubmit = () => {
    //faz requisicao para o backend
    const result = dataResult.filter((item) => {
      const nomeMatch = selectedNames.some((selectedName) =>
        item.name.toLowerCase().includes(selectedName.toLowerCase())
      );

      const corMatch = selectedColors.some((selectedColor) =>
        item.colors.some((color) =>
          color.cor.toLowerCase().includes(selectedColor.toLowerCase())
        )
      );

      return nomeMatch && corMatch;
    });

    paginatedData(result);
  };

  const handleSelectNames = (event) => {
    const selectedName = event.target.value;
    const uniqueColors = filterColors(selectedName);
    setSelectedNames(selectedName);
    setColor(uniqueColors);
  };

  const handleSelectColors = (event) => {
    setSelectedColors(event.target.value);
  };

  const filterColors = (selectedName) => {
    const allColors = selectedName
      .map((name) => {
        const selectedItem = dataSelect.find((item) => item.name == name);

        if (selectedItem) {
          return selectedItem.colors.map((color) => color.cor);
        }
      })
      .flat();

    const uniqueColors = [...new Set(allColors)];
    return uniqueColors;
  };

  useEffect(() => {
    //fazer requisicao para
    const allNames = dataSelect.map((item) => item.name);
    setName(allNames);
  }, []);

  return (
    <div>
      <Header />
      <h1>Table</h1>
      <div>
        <SelectTeste
          data={name}
          value={selectedNames}
          onChange={handleSelectNames}
        />
      </div>
      <div>
        <SelectTeste
          data={color}
          value={selectedColors}
          onChange={handleSelectColors}
        />
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Enviar
        </Button>
      </div>
      <div>{plotData && <DataGrid data={data} />}</div>
    </div>
  );
};

export default Table;
