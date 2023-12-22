import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonProvider.js';

import "./css/LoadMoreButton.css"

function LoadMoreButton() {
    const { loadMore } = useContext(PokemonContext);
    
    return (
        <div className="container-button-load-more container">
            <button className="button-load-more loading" onClick={loadMore}>
                Load More
            </button>
        </div>
    );
};

export default LoadMoreButton;