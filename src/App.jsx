import reactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cats from "./pages/cats";
import News from "./pages/news";
import HarryPoter from "./pages/harry-potter";
import Chart from "./pages/chart";
import Input from "./pages/input";
import Table from "./pages/table";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/hp" element={<HarryPoter />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/input" element={<Input />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
