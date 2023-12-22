import React, { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonProvider.js';
import PokemonCard from './PokemonCard.js';

const PokemonList = () => {
    const { displayedPokemons } = useContext(PokemonContext);

    return (
        <div className="card-list-pokemon container">
            {displayedPokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    );
};

export default PokemonList;