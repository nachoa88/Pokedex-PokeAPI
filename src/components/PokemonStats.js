import "./css/PokemonStats.css"

function PokemonStats({ pokemon }) {
    return (
        <div className='container-stats'>
            <h1>Estadísticas</h1>
            <div className='stats'>
                <div className='stat-group'>
                    <span>Hp</span>
                    <div className='progress-bar'></div>
                    <span className='counter-stat'>
                        {pokemon.stats[0].base_stat}
                    </span>
                </div>
                <div className='stat-group'>
                    <span>Attack</span>
                    <div className='progress-bar'></div>
                    <span className='counter-stat'>
                        {pokemon.stats[1].base_stat}
                    </span>
                </div>
                <div className='stat-group'>
                    <span>Defense</span>
                    <div className='progress-bar'></div>
                    <span className='counter-stat'>
                        {pokemon.stats[2].base_stat}
                    </span>
                </div>
                <div className='stat-group'>
                    <span>Special Attack</span>
                    <div className='progress-bar'></div>
                    <span className='counter-stat'>
                        {pokemon.stats[3].base_stat}
                    </span>
                </div>
                <div className='stat-group'>
                    <span>Special Defense</span>
                    <div className='progress-bar'></div>
                    <span className='counter-stat'>
                        {pokemon.stats[4].base_stat}
                    </span>
                </div>
                <div className='stat-group'>
                    <span>Speed</span>
                    <div className='progress-bar'></div>
                    <span className='counter-stat'>
                        {pokemon.stats[5].base_stat}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PokemonStats;