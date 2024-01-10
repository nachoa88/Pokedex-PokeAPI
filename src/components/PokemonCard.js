import { Link } from 'react-router-dom';
import { Loader } from './Loader.js';

import "./css/PokemonCard.css"

function PokemonCard({ pokemon }) {

	if (!pokemon) {
		return <Loader />;
	}

	const primerMayuscula = (word) => {
		return word[0].toUpperCase() + word.substring(1)
	}

	return (
		<Link to={`/pokemon/${pokemon.name}`} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 card-body" id={pokemon.name}>
			<div className="card-pokemon">
				<div className="card-img">
					{/*In JavaScript, we cannot write 'official-artwork' because '-' gives problems, other sprites: other.dream_world.front_default*/}
					<img src={pokemon.sprites.other['official-artwork'].front_default} alt={`Pokemon ${pokemon.name}`} />
				</div>
				<div className="card-info">
					<p className="pokemon-id">N° {pokemon.id}</p>
					<p className="pokemon-name">{primerMayuscula(pokemon.name)}</p>
					<div className="card-types">
						{pokemon.types.map(type => (
							<span key={type.type.name} className={type.type.name}>
								{type.type.name}
							</span>
						))}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default PokemonCard;