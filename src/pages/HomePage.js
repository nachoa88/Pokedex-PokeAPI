import Filter from '../components/Filter.js';
import PokemonList from '../components/PokemonList.js';
import FilterBar from '../components/FilterBar.js';


function HomePage() {
    return (
        <>
            
            <Filter />
            <PokemonList />
            <FilterBar />

        </>
    );
}

export default HomePage;