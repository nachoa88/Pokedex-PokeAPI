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
		return <Loader />;
	}

	const primerMayuscula = (word) => {
        return word[0].toUpperCase() + word.substring(1)
    }

	return (
		<Link to={`/pokemon/${details.name}`} className='card-pokemon'>
			<div className='card-img'>
				{/*In JavaScript, we cannot write 'official-artwork' because '-' gives problems, other sprites: other.dream_world.front_default*/}
				<img src={details.sprites.other['official-artwork'].front_default} alt={`Pokemon ${pokemon.name}`} />
			</div>
			<div className='card-info'>
				<span className='pokemon-id'>N° {details.id}</span>
				<h3>{primerMayuscula(details.name)}</h3>
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