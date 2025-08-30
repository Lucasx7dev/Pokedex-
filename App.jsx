
import React from 'react';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="app">
      <Header title="Pokédex" />
      <PokemonList />
    </div>
  );
}

export default App;
