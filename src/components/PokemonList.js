import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import PokemonCard from "./PokemonCard";

function PokemonList() {

    const { allPokemons } = useContext(PokemonContext);


    return (
        <div className="card-list-pokemon container">

            {allPokemons.map(pokemon => (<PokemonCard pokemon={pokemon} key={pokemon.id} /> ))}

        </div>
    );
}

export default PokemonList;