import React, { useState } from 'react';

import PokemonList from '../components/PokemonList.js';
import LoadMoreButton from '../components/LoadMoreButton.js';
import FilterButton from '../components/FilterButton.js';
import FilterBar from '../components/FilterBar.js';

function HomePage() {
    const [showFilterBar, setShowFilterBar] = useState(false);

    const toggleFilterBar = () => {
        setShowFilterBar(!showFilterBar);
    };

    return (
        <>
            <FilterButton onClick={toggleFilterBar} />
            {showFilterBar && <FilterBar onClick={toggleFilterBar}/>}
            <PokemonList />
            <LoadMoreButton />
        </>
    );
}

export default HomePage;