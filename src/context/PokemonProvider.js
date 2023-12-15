import { useEffect, useState } from 'react';
// import { useForm } from '../hook/useForm';
import { PokemonContext } from './PokemonContext';
import useForm from '../components/hook/UseForm';

function PokemonProvider({ children }) {

    // Este useState es para guardar los pokemons. 
    const [allPokemons, setAllPokemons] = useState([]);
    // Este useState es para obtener TODOS los pokemons.
    const [globalPokemons, setGlobalPokemons] = useState([]);
    // El offset lo ponemos en 0, para que comience de ahí a buscar los pokemons.
    const [offset, setOffset] = useState(0);

    // Utilizar CustomHook - useForm
    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: '',
    });

    // SIMPLE STATES para la aplicación. El primero para que siempre cargue al iniciar la página. El segundo para el filtro.
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);

    // Llamar a los primeros 50 pokemons de la API. El valor por defecto de limit lo ponemmos en 50.
    const getAllPokemons = async (limit = 50) => {
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
        const data = await res.json();

        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        })

        const results = await Promise.all(promises);

        // ... es el operador Spread, estamos convidando allPokemons con los results, agregando el result a allPokemons.
        setAllPokemons([...allPokemons, ...results]);
        // Una vez tiene los resultados, pasa el state de loading a false.
        setLoading(false);
    }

    // Llamar a TODOS los pokemons, no sólo a los primeros 50 para poder filtrar entre TODOS y no sólo 50.
    const getGlobalPokemons = async () => {
        const baseURL = 'https://pokeapi.co/api/v2/';
        // La url modelo para obtener todos los pokemones limite 100000, la da la misma página de la PokéAPI.
        const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
        const data = await res.json();

        const promises = data.results.map(async pokemon => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });
        const results = await Promise.all(promises);

        setGlobalPokemons(results);
        // Una vez tiene los resultados, pasa el state de loading a false.
        setLoading(false);
    };

    // Llamar a un pokemon por ID
    const getPokemonByID = async id => {
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`${baseURL}pokemon/${id}`);
        const data = await res.json();
        return data;
    };


    useEffect(() => {
        getAllPokemons()
    }, [offset])

    useEffect(() => {
        getGlobalPokemons();
    }, []);


    return (
        <PokemonContext.Provider value={{
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemons,
            globalPokemons,
            getPokemonByID
        }}>
            
            {children}
        </PokemonContext.Provider>
    );
};

export default PokemonProvider;