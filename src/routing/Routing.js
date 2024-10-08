import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonProvider.js';
import { Loader } from '../components/Loader.js';
import Header from "../components/Header.js";
import HomePage from '../pages/HomePage.js';
import PokemonPage from "../pages/PokemonPage.js";
import Footer from '../components/Footer.js';

function Routing() {
    // We use the useContext hook to know if it's loading or not, so we can show the Loader component.
    const { loading } = useContext(PokemonContext);

    if (loading) {
        return <Loader />
    }

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element = {<HomePage />} />
                <Route path='/pokemon/:pokemonName' element={<PokemonPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Routing;