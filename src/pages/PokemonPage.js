import Header from '../components/Header.js';
import PokemonBody from '../components/PokemonBody.js';
import PokemonStats from '../components/PokemonStats.js';


function PokemonPage() {
    return (
        <>

            <Header />
            <main className="container main-pokemon">
                <PokemonBody />
                <PokemonStats />
            </main>
        </>
    );
}

export default PokemonPage;