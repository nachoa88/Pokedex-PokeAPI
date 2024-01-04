import "./css/PokemonStats.css"

function PokemonStats({ pokemonData }) {

    return (
        <div className="container pokemon-bottom">
            <h2>Stats</h2>
            <div className="pokemon-stats">
                <div className="stat-group">
                    <span>Hp</span>
                    <div className="progress-bar">
                        <div className="progress-bar-filled" style={{ width: `${(pokemonData.stats[0].base_stat / 255) * 100}%` }}></div>
                    </div>
                    <span className="counter-stat">{pokemonData.stats[0].base_stat}</span>
                </div>
                <div className="stat-group">
                    <span>Attack</span>
                    <div className="progress-bar" >
                        <div className="progress-bar-filled" style={{ width: `${(pokemonData.stats[1].base_stat / 255) * 100}%` }}></div>
                    </div>
                    <span className="counter-stat">{pokemonData.stats[1].base_stat}</span>
                </div>
                <div className="stat-group">
                    <span>Defense</span>
                    <div className="progress-bar" >
                        <div className="progress-bar-filled" style={{ width: `${(pokemonData.stats[2].base_stat / 255) * 100}%` }}></div>
                    </div>
                    <span className="counter-stat">{pokemonData.stats[2].base_stat}</span>
                </div>
                <div className="stat-group">
                    <span>Special Attack</span>
                    <div className="progress-bar" >
                        <div className="progress-bar-filled" style={{ width: `${(pokemonData.stats[3].base_stat / 255) * 100}%` }}></div>
                    </div>
                    <span className="counter-stat">{pokemonData.stats[3].base_stat}</span>
                </div>
                <div className="stat-group">
                    <span>Special Defense</span>
                    <div className="progress-bar" >
                        <div className="progress-bar-filled" style={{ width: `${(pokemonData.stats[4].base_stat / 255) * 100}%` }}></div>
                    </div>
                    <span className="counter-stat">{pokemonData.stats[4].base_stat}</span>
                </div>
                <div className="stat-group">
                    <span>Speed</span>
                    <div className="progress-bar" >
                        <div className="progress-bar-filled" style={{ width: `${(pokemonData.stats[5].base_stat / 255) * 100}%` }}></div>
                    </div>
                    <span className="counter-stat">{pokemonData.stats[5].base_stat}</span>
                </div>
            </div>
        </div>
    );
}

export default PokemonStats;