import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PokemonBody from '../components/PokemonBody.js';
import PokemonStats from '../components/PokemonStats.js';

import { PokemonContext } from '../context/PokemonContext.js';
import { Loader } from '../components/Loader.js';
// import { primerMayuscula } from '../helper/helper';


function PokemonPage() {
    const { getPokemonByID } = useContext(PokemonContext);

    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState({});

    const { id } = useParams();

    const fetchPokemon = async id => {
        const data = await getPokemonByID(id);
        setPokemon(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchPokemon(id);
    }, []);

    return (

        <main className="container main-pokemon">
            {loading ? (
                <Loader />
            ) : (
                <>
                    <PokemonBody pokemon={pokemon} />
                    <PokemonStats pokemon={pokemon} />
                </>
            )}
        </main>
        
    );
}

export default PokemonPage;