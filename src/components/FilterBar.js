import React, { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonProvider.js";

import "./css/FilterBar.css"

function FilterBar({ onClick, isActive }) {
    const { handleCheckbox } = useContext(PokemonContext);

    return (
        // If the state isActive is true, add the class "active" to the div
        <div className={`container-filters ${isActive ? 'active' : ''}`}>
            <button onClick={onClick} className="closeButton" aria-label="Close Sidebar">
                <i className="fa fa-times fa-2x" aria-hidden="true"></i>
            </button>
            <div className="filter-by-type">
                <span>Type</span>

                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="grass" id="grass" />
                    <label htmlFor="grass">Grass</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="fire" id="fire" />
                    <label htmlFor="fire">Fire</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="bug" id="bug" />
                    <label htmlFor="bug">Bug</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="fairy" id="fairy" />
                    <label htmlFor="fairy">Fairy</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="dragon" id="dragon" />
                    <label htmlFor="dragon">Dragon</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="ghost" id="ghost" />
                    <label htmlFor="ghost">Ghost</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="ground" id="ground" />
                    <label htmlFor="ground">Ground</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="normal" id="normal" />
                    <label htmlFor="normal">Normal</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="psychic" id="psychic" />
                    <label htmlFor="psychic">Psychic</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="steel" id="steel" />
                    <label htmlFor="steel">Steel</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="dark" id="dark" />
                    <label htmlFor="dark">Dark</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="electric" id="electric" />
                    <label htmlFor="electric">Electric</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="fighting" id="fighting" />
                    <label htmlFor="fighting">Fighting</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="flying" id="flying" />
                    <label htmlFor="flying">Flying</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="ice" id="ice" />
                    <label htmlFor="ice">Ice</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="poison" id="poison" />
                    <label htmlFor="poison">Poison</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="rock" id="rock" />
                    <label htmlFor="rock">Rock</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" onChange={handleCheckbox} name="water" id="water" />
                    <label htmlFor="water">Water</label>
                </div>
            </div>
        </div>
    );
}

export default FilterBar;