import './App.css';

import Pokedex from './Pokedex';
import data from './data';

function App() {
  return (
    <Pokedex pokemon={data}/>
  )
}

export default App;
