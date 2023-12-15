import "./css/PokemonBody.css"

function PokemonBody({ pokemon }) {
    
    const primerMayuscula = (word) => {
        return word[0].toUpperCase() + word.substring(1)
    }
    
    return (
        <div className='header-main-pokemon'>
            <span className='number-pokemon'>#{pokemon.id}</span>
            <div className='container-img-pokemon'>
                <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={`Pokemon ${pokemon?.name}`}
                />
            </div>

            <div className='container-info-pokemon'>
                <h1>{primerMayuscula(pokemon.name)}</h1>
                <div className='card-types info-pokemon-type'>
                    {pokemon.types.map(type => (
                        <span key={type.type.name} className={`${type.type.name}`}>
                            {type.type.name}
                        </span>
                    ))}
                </div>
                <div className='info-pokemon'>
                    <div className='group-info'>
                        <p>Altura</p>
                        <span>{pokemon.height}</span>
                    </div>
                    <div className='group-info'>
                        <p>Peso</p>
                        <span>{pokemon.weight}KG</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonBody;