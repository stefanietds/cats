import reactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cats from "./pages/cats";
import News from "./pages/news";
import HarryPoter from "./pages/harry-potter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/hp" element={<HarryPoter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
