import React from 'react';
import './Recipe.css';
import fishsticks from '../images/fishsticks.png';

type RecipeProps = {
  name: string,
  hunger: number,
  health: number,
  sanity: number,
}

const Recipe: React.FC<RecipeProps> = ({ name, hunger, health, sanity }) => {
  return (
    <div className="recipe">
      <img src={fishsticks} className="recipe-thumbnail" alt="fishsticks" />
      <div className="recipe-trait">{name}</div>
      <div className="recipe-trait">{hunger}</div>
      <div className="recipe-trait">{health}</div>
      <div className="recipe-trait">{sanity}</div>
    </div>
  );
}

export default Recipe;
