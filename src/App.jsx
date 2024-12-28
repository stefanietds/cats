import reactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PokemonList from "./pages/pokemon-list";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<PokemonList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
