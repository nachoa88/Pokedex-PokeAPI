import { Loader } from "./Loader";

import "./css/PokemonBody.css"

function PokemonBody({ pokemonData, loadNextPokemon, loadPreviousPokemon }) {
    if (!pokemonData) {
        return <Loader />;
    }

    const primerMayuscula = (word) => {
        return word[0].toUpperCase() + word.substring(1)
    }


    return (
        <div className="container pokemon-top">
            <div className="buttons">
                <button className="previous-button" onClick={loadPreviousPokemon} disabled={pokemonData.id <= 1}>Previous</button>
                <button className="next-button" onClick={loadNextPokemon}>Next</button>
            </div>
            <hr className="divider" />

            <div className="row">
                <div className="col-12 col-sm-6 order-sm-2 pokemon-img">
                    <img src={pokemonData.sprites.other['official-artwork'].front_default}
                        alt={`Pokemon ${pokemonData?.name}`} />
                </div>

                <div className="col-12 col-sm-6 order-sm-1 pokemon-description">
                    {/* The number of the pokemon is converted to String and, if it is less than 3 digits, it's filled with zeros */}
                    <span className="pokemon-number">#{String(pokemonData.id).padStart(3, '0')}</span>
                    <div className="small-card">
                        <h1 className="pokemon-page-name">{primerMayuscula(pokemonData.name)}</h1>
                        {/*We get the css style from the crads in the PokemonCard component*/}
                        <div className="card-types">
                            {pokemonData.types.map(type => (
                                <span key={type.type.name} className={`${type.type.name}`}>
                                    {type.type.name}
                                </span>
                            ))}
                        </div>

                        <div className="pokemon-info">
                            {/*This data is divided by ten because in the API height is in decimeters and weight in hectograms*/}
                            <div className="group-info">
                                <p>Height</p>
                                <span>{pokemonData.height / 10}M</span>
                            </div>
                            <div className="group-info">
                                <p>Weight</p>
                                <span>{pokemonData.weight / 10}KG</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonBody;