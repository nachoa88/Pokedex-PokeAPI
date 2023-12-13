import "./css/PokemonBody.css"

function PokemonBody() {
    return (
        <div className="header-main-pokemon">
            <span className="number-pokemon">#1</span>
            <div className="container-img-pokemon">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="pokemon bulbasaur" />
            </div>

            <div className="container-info-pokemon">
                <h1>Bulbasaur</h1>
                <div className="card-types">
                    <span className="grass">Grass</span>
                </div>
                <div className="info-pokemon">
                    <div className="group-info">
                        <p>Height</p>
                        <span>0.7m</span>
                    </div>
                    <div className="group-info">
                        <p>Weight</p>
                        <span>6.9Kg</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonBody;