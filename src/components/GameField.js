import {gameTiles} from "./FieldTiles.js";
import './GameField.css';

function GameField() {
     
    // console.log(gameTiles);
    const CreatedField = gameTiles.map((item, i) => (<img key={i} src={item.src} className="Game-tile-items"/>));
    console.log(CreatedField);
    
    return (
        <div className="Game-tile">
          {CreatedField}
        </div>
      );
    
  }
  
export default GameField