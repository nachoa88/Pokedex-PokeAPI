import "./css/PokemonAbilities.css"

function PokemonAbilities({ pokemonData }) {

    return (
        <div className="container pokemon-middle">
            <h3 className="experience-text">Base Experience: {pokemonData.base_experience}</h3>

            <div className="row">
                <div className="col-12 col-lg-3 col-sm-3">
                    <h3 className="ability-title">Abilities</h3>
                </div>

                <div className="col-12 col-lg-9 col-sm-9">
                    <div className="ability-types">
                        {pokemonData.abilities.map(ability => (
                            <span key={ability.ability.name} className={`${pokemonData.types[0].type.name}`}>
                                {ability.ability.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonAbilities;