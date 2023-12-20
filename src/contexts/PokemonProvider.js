import React, { createContext, useState, useEffect } from 'react';

// We create a new context to be used by the components that need the data.
export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    // This state is to set the state for the loading of the data so that other components wait for the data to be fetched.
    const [loading, setLoading] = useState(true);

    // We declare a new state variable for our filter.
    const [search, setSearch] = useState('');

    // We declare a new state variable called "allPokemons" and setAllPokemons to update it.
    const [allPokemons, setAllPokemons] = useState([]);
    // This state is to set the state for the displayed pokemons in screen.
    const [displayedPokemons, setDisplayedPokemons] = useState([]);

    const [loadingMore, setLoadingMore] = useState(false);
    const [offset, setOffset] = useState(0);

    const loadPokemons = (offset) => {
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

    const loadMore = () => {
        if (!loadingMore) {
            setOffset(prevOffset => {
                const newOffset = prevOffset + 20;
                if (search) {
                    const filteredPokemons = allPokemons.filter(pokemon =>
                        pokemon.name.toLowerCase().includes(search.toLowerCase())
                    );
                    if (newOffset >= filteredPokemons.length) {
                        return prevOffset;
                    }
                    setDisplayedPokemons(filteredPokemons.slice(0, newOffset));
                } else {
                    loadPokemons(newOffset);
                }
                return newOffset;
            });
        }
    };

    useEffect(() => {
        loadPokemons(offset);
    }, []);

    useEffect(() => {
        setDisplayedPokemons(
            allPokemons.filter(pokemon =>
                pokemon.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search]);

    useEffect(() => {
        loadMore();
    }, []);

    return (
        <PokemonContext.Provider value={{ displayedPokemons, loading, loadMore, search, setSearch }}>
            {children}
        </PokemonContext.Provider>
    );
};