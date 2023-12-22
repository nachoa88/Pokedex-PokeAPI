import { Loader } from "./Loader";

import "./css/PokemonBody.css"

function PokemonBody({ pokemonData }) {

    if (!pokemonData) {
		return <Loader />;
	}

    const primerMayuscula = (word) => {
        return word[0].toUpperCase() + word.substring(1)
    }

    return (
        <div className='header-main-pokemon'>
            <span className='number-pokemon'>#{pokemonData.id}</span>
            <div className='container-img-pokemon'>
                <img src={pokemonData.sprites.other['official-artwork'].front_default}
                    alt={`Pokemon ${pokemonData?.name}`} />
            </div>
            <div className='container-info-pokemon'>
                <h1>{primerMayuscula(pokemonData.name)}</h1>
                <div className='card-types info-pokemon-type'>
                    {pokemonData.types.map(type => (
                        <span key={type.type.name} className={`${type.type.name}`}>
                            {type.type.name}
                        </span>
                    ))}
                </div>
                <div className='info-pokemon'>
                    <div className='group-info'>
                        <p>Height</p>
                        <span>{pokemonData.height}</span>
                    </div>
                    <div className='group-info'>
                        <p>Weight</p>
                        <span>{pokemonData.weight}KG</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonBody;