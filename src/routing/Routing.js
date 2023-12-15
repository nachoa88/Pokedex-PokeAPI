import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import Header from "../components/Header.js";

import HomePage from '../pages/HomePage.js';
import PokemonPage from "../pages/PokemonPage.js";
import SearchPage from '../pages/SearchPage.js';


function Routing() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Header />}>
                    <Route index element={<HomePage />} />
                    <Route path="pokemon/:id" element={<PokemonPage />} />
                    <Route path='search' element={<SearchPage />} />
                </Route>

                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;