import React, { createContext, useState, useEffect } from 'react';

// We create a new context to be used by the components that need the data.
export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    // Loading is the state that will be used to know if the data is being loaded.
    const [loading, setLoading] = useState(true);
    // Offset is the number of pokemons that will be displayed in the screen.
    const [offset, setOffset] = useState(20);
    // Pokemons is the state that will be used to store the data from the API.
    const [pokemons, setPokemons] = useState([]);
    // DisplayedPokemons is used to store the pokemons that will be displayed in the screen, not all the pokemons loaded are being displayed.
    const [displayedPokemons, setDisplayedPokemons] = useState([]);
    // SearchValue is the value that will be used to filter the pokemons by name.
    const [searchValue, setSearchValue] = useState('');
    // TypeSelected is the value that will be used to filter the pokemons by type, setted to boolean:false.
    const [typeSelected, setTypeSelected] = useState({
        grass: false, normal: false, fighting: false, flying: false, poison: false, ground: false, 
        rock: false, bug: false, ghost: false, steel: false, fire: false, water: false,
        electric: false, psychic: false, ice: false, dragon: false, dark: false, fairy: false, unknow: false,
    });


    useEffect(() => {
        const loadPokemons = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=251`);
            const data = await response.json();

            const pokemonDetailsPromises = data.results.map(async (pokemon) => {
                const response = await fetch(pokemon.url);
                return response.json();
            });

            const pokemonDetails = await Promise.all(pokemonDetailsPromises);

            setPokemons(pokemonDetails);
            setDisplayedPokemons(pokemonDetails.slice(0, offset));
            setLoading(false);
        };

        loadPokemons();
    }, [offset]);

    const loadMore = () => {
        if (!loading) {
            setLoading(true);
            setOffset(prevOffset => {
                const newOffset = prevOffset + 20;
                setDisplayedPokemons(pokemons.slice(0, newOffset));
                setLoading(false);
                return newOffset;
            });
        }
    };

    const handleCheckbox = (event) => {
        setTypeSelected({
            ...typeSelected,
            [event.target.name]: event.target.checked
        });
    };


    useEffect(() => {
        const selectedTypes = Object.keys(typeSelected).filter(type => typeSelected[type]);
        let filteredPokemons = pokemons;

        // Filter by type if any types are selected
        if (selectedTypes.length > 0) {
            filteredPokemons = filteredPokemons.filter(pokemon =>
                pokemon.types.some(pokemonType => selectedTypes.includes(pokemonType.type.name))
            );
        }

        // Filter by search value if a search value is entered
        if (searchValue) {
            filteredPokemons = filteredPokemons.filter(pokemon =>
                pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
            );
        }

        setDisplayedPokemons(filteredPokemons.slice(0, offset));
    }, [typeSelected, pokemons, offset, searchValue]);


    return (
        <PokemonContext.Provider value={{ displayedPokemons, loading, loadMore, searchValue, setSearchValue, handleCheckbox }}>
            {children}
        </PokemonContext.Provider>
    );
};