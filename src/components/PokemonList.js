import React, { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonProvider.js';
import PokemonCard from './PokemonCard.js';
import LoadMoreButton from './LoadMoreButton.js';

const PokemonList = () => {
    const { displayedPokemons, loadMore } = useContext(PokemonContext);

    return (
        <div className="card-list-pokemon container">
            {displayedPokemons.map((pokemon) => (
                <PokemonCard key={pokemon.url} pokemon={pokemon} />
            ))}
            <LoadMoreButton loadMore={loadMore} />
        </div>
    );
};

export default PokemonList;