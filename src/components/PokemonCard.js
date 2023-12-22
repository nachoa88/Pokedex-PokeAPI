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
		<Link to={`/pokemon/${pokemon.name}`} className='card-pokemon'>
			<div className='card-img'>
				{/*In JavaScript, we cannot write 'official-artwork' because '-' gives problems, other sprites: other.dream_world.front_default*/}
				<img src={pokemon.sprites.other['official-artwork'].front_default} alt={`Pokemon ${pokemon.name}`} />
			</div>
			<div className='card-info'>
				<span className='pokemon-id'>N° {pokemon.id}</span>
				<h3>{primerMayuscula(pokemon.name)}</h3>
				<div className='card-types'>
					{pokemon.types.map(type => (
						<span key={type.type.name} className={type.type.name}>
							{type.type.name}
						</span>
					))}
				</div>

			</div>
		</Link>
	);
};

export default PokemonCard;