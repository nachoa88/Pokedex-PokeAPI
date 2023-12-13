import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from '../pages/HomePage.js';
import PokemonPage from "../pages/PokemonPage.js";


function Routing() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="pokemon" element={<PokemonPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;