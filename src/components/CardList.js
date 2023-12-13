import "./css/CardList.css"

function CardList() {
    return (
        <main className="card-list-pokemon container">
                <a href="pokemon.html" className="card-pokemon">
                    <div className="card-img">
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="pokemon bulbasaur" />
                    </div>
                    <div className="card-info">
                        <span className="pokemon-id">N° 1</span>
                        <h3>Bulbasaur</h3>
                        <div className="card-types">
                            <span className="grass">Planta</span>
                            <span className="poison">Veneno</span>
                        </div>
                    </div>
                </a>

                <a href="pokemon.html" className="card-pokemon">
                    <div className="card-img">
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png" alt="pokemon ivysaur" />
                    </div>
                    <div className="card-info">
                        <span className="pokemon-id">N° 2</span>
                        <h3>Ivysaur</h3>
                        <div className="card-types">
                            <span className="grass">Planta</span>
                            <span className="poison">Veneno</span>
                        </div>
                    </div>
                </a>

                <a href="pokemon.html" className="card-pokemon">
                    <div className="card-img">
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png" alt="pokemon venusaur" />
                    </div>
                    <div className="card-info">
                        <span className="pokemon-id">N° 3</span>
                        <h3>Venusaur</h3>
                        <div className="card-types">
                            <span className="grass">Planta</span>
                            <span className="poison">Veneno</span>
                        </div>
                    </div>
                </a>

                <a href="pokemon.html" className="card-pokemon">
                    <div className="card-img">
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" alt="pokemon charmander" />
                    </div>
                    <div className="card-info">
                        <span className="pokemon-id">N° 4</span>
                        <h3>Charmander</h3>
                        <div className="card-types">
                            <span className="fire">Fuego</span>
                        </div>
                    </div>
                </a>

                <a href="pokemon.html" className="card-pokemon">
                    <div className="card-img">
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png" alt="pokemon charmeleon" />
                    </div>
                    <div className="card-info">
                        <span className="pokemon-id">N° 5</span>
                        <h3>Charmeleon</h3>
                        <div className="card-types">
                            <span className="fire">Fuego</span>
                        </div>
                    </div>
                </a>

                <a href="pokemon.html" className="card-pokemon">
                    <div className="card-img">
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png" alt="pokemon charizard" />
                    </div>
                    <div className="card-info">
                        <span className="pokemon-id">N° 6</span>
                        <h3>Charizard</h3>
                        <div className="card-types">
                            <span className="fire">Fuego</span>
                            <span className="flying">Volador</span>
                        </div>
                    </div>
                </a>

                <a href="pokemon.html" className="card-pokemon">
                    <div className="card-img">
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" alt="pokemon squirtle" />
                    </div>
                    <div className="card-info">
                        <span className="pokemon-id">N° 7</span>
                        <h3>Squirtle</h3>
                        <div className="card-types">
                            <span className="water">Agua</span>
                        </div>
                    </div>
                </a>

                <a href="pokemon.html" className="card-pokemon">
                    <div className="card-img">
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png" alt="pokemon Wartortle" />
                    </div>
                    <div className="card-info">
                        <span className="pokemon-id">N° 8</span>
                        <h3>Wartortle</h3>
                        <div className="card-types">
                            <span className="water">Agua</span>
                        </div>
                    </div>
                </a>

                <a href="pokemon.html" className="card-pokemon">
                    <div className="card-img">
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png" alt="pokemon blastoise" />
                    </div>
                    <div className="card-info">
                        <span className="pokemon-id">N° 9</span>
                        <h3>Blastoise</h3>
                        <div className="card-types">
                            <span className="water">Agua</span>
                        </div>
                    </div>
                </a>

                <a href="pokemon.html" className="card-pokemon">
                    <div className="card-img">
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png" alt="pokemon caterpie" />
                    </div>
                    <div className="card-info">
                        <span className="pokemon-id">N° 10</span>
                        <h3>Caterpie</h3>
                        <div className="card-types">
                            <span className="bug">Bicho</span>
                        </div>
                    </div>
                </a>

                <a href="pokemon.html" class="card-pokemon">
                    <div className="card-img">
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png" alt="pokemon metapod" />
                    </div>
                    <div className="card-info">
                        <span className="pokemon-id">N° 11</span>
                        <h3>Metapod</h3>
                        <div className="card-types">
                            <span className="bug">Bicho</span>
                        </div>
                    </div>
                </a>

                <a href="pokemon.html" className="card-pokemon">
                    <div className="card-img">
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png" alt="pokemon butterfree" />
                    </div>
                    <div className="card-info">
                        <span className="pokemon-id">N° 12</span>
                        <h3>Butterfree</h3>
                        <div className="card-types">
                            <span className="bug">Bicho</span>
                            <span className="flying">Volador</span>
                        </div>
                    </div>
                </a>
            </main>
    );
}

export default CardList;