import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext.js';

import "./css/LoadMoreBtn.css"

function LoadMoreBtn() {
    const {onClickLoadMore} = useContext(PokemonContext)
    
    return (
        <div className="container-btn-load-more container">
            <button className='btn-load-more' onClick={onClickLoadMore}>
                Load More
            </button>
        </div>
    );
};

export default LoadMoreBtn;