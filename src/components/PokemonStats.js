import "./css/PokemonStats.css"

function PokemonStats() {
    return (
        <div className="container-stats">
            <h1>Stats</h1>
            <div className="stats">
                <div className="stat-group">
                    <span>Hp</span>
                    <div className="progress-bar"></div>
                    <span className="counter-stat">45</span>
                </div>
                <div className="stat-group">
                    <span>Attack</span>
                    <div className="progress-bar"></div>
                    <span className="counter-stat">49</span>
                </div>
                <div className="stat-group">
                    <span>Defense</span>
                    <div className="progress-bar"></div>
                    <span className="counter-stat">49</span>
                </div>
                <div className="stat-group">
                    <span>Special Attack</span>
                    <div className="progress-bar"></div>
                    <span className="counter-stat">65</span>
                </div>
                <div className="stat-group">
                    <span>Special Defense</span>
                    <div className="progress-bar"></div>
                    <span className="counter-stat">65</span>
                </div>
                <div className="stat-group">
                    <span>Speed</span>
                    <div className="progress-bar"></div>
                    <span className="counter-stat">45</span>
                </div>
            </div>
        </div>
    );
}

export default PokemonStats;