import { useEffect, useState } from 'react';
import { PokemonContext } from './PokemonContext';
import useForm from '../components/hook/UseForm';

function PokemonProvider({ children }) {

    // Este useState es para guardar los pokemons. 
    const [allPokemons, setAllPokemons] = useState([]);
    // Este useState es para obtener TODOS los pokemons.
    const [globalPokemons, setGlobalPokemons] = useState([]);
    // El offset lo ponemos en 0, para que comience de ahí a buscar los pokemons.
    const [offset, setOffset] = useState(0);
    const [pageSize] = useState(50);

    // SIMPLE STATES para la aplicación. El primero para que siempre cargue al iniciar la página. El segundo para el filtro.
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);

    // Utilizar CustomHook - useForm
    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: '',
    });

    // Llamar a los primeros 50 pokemons de la API. El valor por defecto de limit lo ponemmos en 50.
    const getAllPokemons = async () => {
        const baseURL = 'https://pokeapi.co/api/v2/';
        
        const res = await fetch(`${baseURL}pokemon?limit=${pageSize}&offset=${offset}`);
        const data = await res.json();

        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });

        const results = await Promise.all(promises);
        // ... es el operador Spread, estamos convidando allPokemons con los results, agregando el result a allPokemons.
        setAllPokemons((prevPokemons) => [...prevPokemons, ...results]);
        // Una vez tiene los resultados, pasa el state de loading a false.
        setLoading(false);
    }

    // Llamar a TODOS los pokemons, no sólo a los primeros 50 para poder filtrar entre TODOS y no sólo 50.
    const getGlobalPokemons = async () => {
        const baseURL = 'https://pokeapi.co/api/v2/';
        
        // La url modelo para obtener todos los pokemones limite 100000, la da la misma página de la PokéAPI.
        const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
        const data = await res.json();

        const promises = data.results.map(async (pokemon) => {
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

    // Load More Btn.
    const onClickLoadMore = () => {
        setOffset((prevOffset) => prevOffset + pageSize);
    };

    // Filter Checkbox Function + useState for each item setted in false.
    const [typeSelected, setTypeSelected] = useState({
        grass: false,
        normal: false,
        fighting: false,
        flying: false,
        poison: false,
        ground: false,
        rock: false,
        bug: false,
        ghost: false,
        steel: false,
        fire: false,
        water: false,
        electric: false,
        psychic: false,
        ice: false,
        dragon: false,
        dark: false,
        fairy: false,
        unknow: false,
    });

    const [filteredPokemons, setFilteredPokemons] = useState([]);

    const handleCheckbox = (e) => {
        setTypeSelected({
            ...typeSelected,
            [e.target.name]: e.target.checked,
        });
    
        if (e.target.checked) {
            const filteredResults = globalPokemons.filter((pokemon) =>
                pokemon.types.map((type) => type.type.name).includes(e.target.name)
            );
            setFilteredPokemons([...filteredPokemons, ...filteredResults]);
        } else {
            // Para volver a filtrar, repetimos lo mismo que con el if pero tomando como base el filteredPokemons actual para "des-filtrar".
            const filteredResults = filteredPokemons.filter((pokemon) =>
                    !pokemon.types.map((type) => type.type.name).includes(e.target.name)
            );
            setFilteredPokemons([...filteredResults]);
        }
    };

    return (
        <PokemonContext.Provider value={{
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemons,
            globalPokemons,
            getPokemonByID,
            onClickLoadMore,
            // Componente Loader.
            loading,
            setLoading,
            // Filter Btn.
            active,
            setActive,
            // Filter Bar Checkbox.
            handleCheckbox,
            filteredPokemons
        }}>

            {children}
        </PokemonContext.Provider>
    );
};

export default PokemonProvider;