import React, { useState } from 'react';

import PokemonList from '../components/PokemonList.js';
import LoadMoreButton from '../components/LoadMoreButton.js';
import FilterButton from '../components/FilterButton.js';
import FilterBar from '../components/FilterBar.js';

function HomePage() {
    // Set the state of the filter bar to false
    const [showFilterBar, setShowFilterBar] = useState(false);
    // Toggle the state of the filter bar
    const toggleFilterBar = () => {
        setShowFilterBar(!showFilterBar);
    };

    return (
        <>
            <FilterButton onClick={toggleFilterBar} />
            <FilterBar onClick={toggleFilterBar} isActive={showFilterBar}/>
            <PokemonList />
            <LoadMoreButton />
        </>
    );
}

export default HomePage;