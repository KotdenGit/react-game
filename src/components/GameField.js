import {gameTiles} from "./FieldTiles.js";

function GameField() {
     
    // console.log(gameTiles);
    const CreatedField = gameTiles.map((item, i) => (<img key={i} src={item.src}/>));
    console.log(CreatedField);
    return (
        <div className="Title">
          {CreatedField}
        </div>
      );
    
  }
  
export default GameField