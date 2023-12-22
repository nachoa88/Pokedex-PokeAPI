import { useContext, useState } from 'react';
import { PokemonContext } from '../contexts/PokemonProvider.js';

import "./css/Header.css"

function Header() {
    const { setSearchValue } = useContext(PokemonContext);
    const [inputValue, setInputValue] = useState(''); // local state for the input field

    const handleSearchSubmit = (event) => {
        event.preventDefault(); // prevent the form from being submitted
        setSearchValue(inputValue); // update searchValue only when the form is submitted
        setInputValue(''); // clear the input field
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value); // update inputValue on every keystroke
    };

    return (
            <header className="container" >
                {/*We use a href because we want the HomePage to be reloaded fully, in the first state when app runs. Link mantains the state of application. */}
                <a href="/" className="logo">
                    <img src="img/pokedex_logo.png" alt="Logo Pokedex"></img>
                </a>
                <form onSubmit={handleSearchSubmit}>
                    <div className="form-group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-search">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input type="search" name="searchValue" id='' placeholder="Search Pokemon's name" aria-label="Search Pokemon's name" value={inputValue} onChange={handleInputChange} />
                    </div>

                    <button type="submit" className="btn-search">Search</button>

                </form>
            </header>
    );
}

export default Header;