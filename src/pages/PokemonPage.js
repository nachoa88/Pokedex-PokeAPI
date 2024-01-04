import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/Loader.js';
import PokemonBody from "../components/PokemonBody";
import PokemonStats from "../components/PokemonStats";

function PokemonPage() {
    const { pokemonName } = useParams();
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        if (!pokemonData) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then(response => response.json())
                .then(data => setPokemonData(data));
        }
    }, [pokemonName, pokemonData]);

    if (!pokemonData) {
        return <Loader />;
    }

    return (
        <>
            <PokemonBody pokemonData={pokemonData} />
            <PokemonStats pokemonData={pokemonData} />
        </>
    );
}

export default PokemonPage;