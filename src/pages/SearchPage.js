import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { PokemonContext } from "../context/PokemonContext";
import PokemonCard from "../components/PokemonCard";

function SearchPage() {
    const location = useLocation();

    const { globalPokemons } = useContext(PokemonContext);

    const filteredPokemons = globalPokemons.filter(pokemon =>
        // El toLowerCase es para que por más que en el input se escriba en mayúsculas, lo pase a minúscula para que coincida con la API.
        pokemon.name.includes(location.state.toLowerCase())
    );

    return (
        <div className='container'>
            <p className='p-search'>
                <span>{filteredPokemons.length}</span>{' '}
                resultados were found:
            </p>
            <div className='card-list-pokemon container'>
                {filteredPokemons.map(pokemon => (
                    <PokemonCard pokemon={pokemon} key={pokemon.id} />
                ))}
            </div>
        </div>
    );
}

export default SearchPage;