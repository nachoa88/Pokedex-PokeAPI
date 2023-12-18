import React from 'react';
import { Link } from 'react-router-dom';

import "./css/PokemonCard.css"

function PokemonCard({ pokemon }) {
	return (
		<Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>
			<div className='card-img'>
				<img
					// como es JavaScript, no se puede poner 'official-artwork' sin más porque el guión da problemas, otras img serían: other.dream_world.front_default
					src={pokemon.sprites.other['official-artwork'].front_default}
					alt={`Pokemon ${pokemon.name}`}
				/>
			</div>
			<div className='card-info'>
				<span className='pokemon-id'>N° {pokemon.id}</span>
				<h3>{pokemon.name}</h3>
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