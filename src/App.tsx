import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokemon from "./pages/Pokemon";
import PokedexUI from "./pages/PokedexUI";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/pokemon/:name" element={<Pokemon />} />
                <Route path="/pokemon" element={<PokedexUI />} />
                <Route path="/" element={<PokedexUI />} />
            </Routes>
        </Router>
    );
}

export default App;
