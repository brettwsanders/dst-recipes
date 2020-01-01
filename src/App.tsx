import React from 'react';
import Recipe from './components/Recipe';
import Header from './components/Header';
import './App.css';
import recipes from './recipes.json';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      {recipes.map((recipe) => (
        <Recipe
          name={recipe.name}
          health={recipe.health}
          sanity={recipe.sanity}
          hunger={recipe.hunger}
        />
      ))}
    </div>
  );
}

export default App;
