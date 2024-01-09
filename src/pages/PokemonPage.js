import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Loader } from '../components/Loader.js';
import PokemonBody from "../components/PokemonBody";
import PokemonStats from "../components/PokemonStats";

function PokemonPage() {
    const { pokemonName } = useParams();
    const navigate = useNavigate();
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => response.json())
            .then(data => setPokemonData(data));
    }, [pokemonName]);

    // This two functions are passed as a prop to the PokemonBody, so when the user clicks on the button, it loads the next or previous pokemon.
    const loadNextPokemon = () => {
        const nextPokemonId = pokemonData.id + 1;
        // We use the navigate function from react-router-dom to change the url to the next pokemon's name instead of ID.
        fetch(`https://pokeapi.co/api/v2/pokemon/${nextPokemonId}`)
            .then(response => response.json())
            .then(data => navigate(`/pokemon/${data.name}`));
    }
    const loadPreviousPokemon = () => {
        const nextPokemonId = pokemonData.id - 1;
        fetch(`https://pokeapi.co/api/v2/pokemon/${nextPokemonId}`)
            .then(response => response.json())
            .then(data => navigate(`/pokemon/${data.name}`));
    }

    if (!pokemonData) {
        return <Loader />;
    }

    return (
        <>
            <PokemonBody pokemonData={pokemonData} loadNextPokemon={loadNextPokemon} loadPreviousPokemon={loadPreviousPokemon} />
            <PokemonStats pokemonData={pokemonData} />
        </>
    );
}

export default PokemonPage;