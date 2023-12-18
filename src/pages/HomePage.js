import FilterBtn from '../components/FilterBtn.js';
import PokemonList from '../components/PokemonList.js';
import FilterBar from '../components/FilterBar.js';
import LoadMoreBtn from '../components/LoadMoreBtn.js';


function HomePage() {
    
    return (
        <>
            
            <FilterBtn />
            <PokemonList />
            <FilterBar />
            <LoadMoreBtn />

        </>
    );
}

export default HomePage;