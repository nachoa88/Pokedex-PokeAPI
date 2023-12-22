import { PokemonProvider } from './contexts/PokemonProvider.js';
import Routing from './routing/Routing.js';

import './App.css';


function App() {

  return (
    <div className="App">
      {/*We use PokemonProvider to pass the information of the pokemons from the API to the childs*/}
      <PokemonProvider>
        <Routing />
      </PokemonProvider>
    </div>
  );
}

export default App;
