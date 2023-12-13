import "./css/FilterBar.css"

function FilterBar() {
    return (
        <div className="container-filters">
            <div className="filter-by-type">
                <span>Type</span>

                <div className="group-type">
                    <input type="checkbox" name="grass" id="grass" />
                    <label for="grass">Grass</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="fire" id="fire" />
                    <label for="fire">Fire</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="bug" id="bug" />
                    <label for="bug">Bug</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="fairy" id="fairy" />
                    <label for="fairy">Fairy</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="dragon" id="dragon" />
                    <label for="dragon">Dragon</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="shadow" id="shadow" />
                    <label for="shadow">Shadow</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="ground" id="ground" />
                    <label for="ground">Ground</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="normal" id="normal" />
                    <label for="normal">Normal</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="psychic" id="psychic" />
                    <label for="psychic">Psychic</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="steel" id="steel" />
                    <label for="steel">Steel</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="dark" id="dark" />
                    <label for="dark">Dark</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="electric" id="electric" />
                    <label for="electric">Electric</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="fighting" id="fighting" />
                    <label for="fighting">Fighting</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="flying" id="flying" />
                    <label for="flying">Flying</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="ice" id="ice" />
                    <label for="ice">Ice</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="poison" id="poison" />
                    <label for="poison">Poison</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="rock" id="rock" />
                    <label for="rock">Rock</label>
                </div>
                <div className="group-type">
                    <input type="checkbox" name="water" id="water" />
                    <label for="water">Water</label>
                </div>
            </div>
        </div>
    );
}

export default FilterBar;