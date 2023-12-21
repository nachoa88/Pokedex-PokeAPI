import React, { createContext, useState, useEffect } from 'react';

// We create a new context to be used by the components that need the data.
export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    // This state is to set the state for the loading of the data so that other components wait for the data to be fetched.
    const [loading, setLoading] = useState(true);

    const [searchValue, setSearchValue] = useState('');

    // We declare a new state variable called "allPokemons" and setAllPokemons to update it.
    const [allPokemons, setAllPokemons] = useState([]);
    // This state is to set the state for the displayed pokemons in screen.
    const [displayedPokemons, setDisplayedPokemons] = useState([]);

    const [loadingMore, setLoadingMore] = useState(false);
    const [offset, setOffset] = useState(20);

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


    useEffect(() => {
        const loadPokemons = () => {
            setLoadingMore(true);
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=251`)
                .then(response => response.json())
                .then(data => {
                    setAllPokemons(data.results);
                    setDisplayedPokemons(data.results.slice(0, offset));
                    setLoading(false);
                    setLoadingMore(false);
                });
        };
        loadPokemons();
    }, [offset]);

    useEffect(() => {
        if (searchValue) {
            setDisplayedPokemons(
                allPokemons.filter(pokemon =>
                    pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
                )
            );
        } else {
            setDisplayedPokemons(allPokemons.slice(0, offset));
        }
    }, [searchValue, allPokemons, offset]);


    const loadMore = () => {
        if (!loadingMore) {
            setOffset(prevOffset => {
                const newOffset = prevOffset + 20;
                setDisplayedPokemons(allPokemons.slice(0, newOffset));
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


    return (
        <PokemonContext.Provider value={{ displayedPokemons, loading, loadMore, searchValue, setSearchValue, handleCheckbox }}>
            {children}
        </PokemonContext.Provider>
    );
};