import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from './Loader.js';

import "./css/PokemonCard.css"

function PokemonCard({ pokemon }) {
	// We declare a new state variable called "details" to update the details of each pokemon.
	const [details, setDetails] = useState(null);
	// As the first fetch in PokemonProvider.js only returns the url and name of each pokemon, we need to fetch again to get the details of each pokemon.
	// We do this here so that this details are only fetched when the card is about to be rendered.
	useEffect(() => {
		if (!details) {
			fetch(pokemon.url)
				.then(response => response.json())
				.then(data => setDetails(data));
		}
	}, [pokemon, details]);
	
	// If the details are not fetched yet the Loader componet.
	if (!details) {
		return <Loader />; // Or a loading spinner
	}

	return (
		<Link to={`/pokemon/${details.name}`} className='card-pokemon'>
			<div className='card-img'>
				{/*como es JavaScript, no se puede poner 'official-artwork' sin más porque el guión da problemas, otras img serían: other.dream_world.front_default*/}
				<img src={details.sprites.other['official-artwork'].front_default} alt={`Pokemon ${pokemon.name}`} />
			</div>
			<div className='card-info'>
				<span className='pokemon-id'>N° {details.id}</span>
				<h3>{details.name}</h3>
				<div className='card-types'>
					{details.types.map(type => (
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