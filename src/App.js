import Routing from './routing/Routing.js';

import PokemonProvider from './context/PokemonProvider.js';

import './App.css';


function App() {
  return (
    <PokemonProvider>
      <Routing />
    </PokemonProvider>


  );
}

export default App;
