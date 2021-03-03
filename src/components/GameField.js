import React, { useState } from "react";
import {gameTiles} from "./FieldTiles.js";
import './GameField.css';

function GameField() {

  const ShuffleTiles = shuffle(gameTiles);
  
  const [tiles, setTiles] = useState([...ShuffleTiles]);
  
  let contRaund = 1;
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
    
  function handleClick(position, title) {
    console.log(position, title);
  }

  return (
      <div className="Game-tile">
        {tiles.map((item, i) => (
        <img onClick={() => handleClick(item, i)} key={i} 
        src={item.src} alt={item.features + item.plants} 
        className="Game-tile-item"/>))}
        
      </div>
    );
    
  }
  
export default GameField