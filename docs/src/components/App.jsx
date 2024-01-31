import Gamegrid from './Gamegrid'
import {useState} from 'react'
export default function App() {
  let pokemon_list = [1,2,3,4,5,6,7,8,9];
  let score = 0;
  let highscore = 0;
  let clickedpokemon = 0;
  let pokeclicked = {};

  for (let i=0; i<9; i++){
    pokeclicked[i] = false;
  }

  let [state, setState] = useState({pokemon_list, score, highscore, clickedpokemon, pokeclicked});


  return (
    <>
      <div className="header">
            <h2>Memory Game</h2>
            <h4>Score: {state.score} Highscore: {state.highscore}</h4>
            <p>Keep clicking on pokemon but dont click on the same one twice!</p>
        </div>
      <Gamegrid pokemon_list = {state.pokemon_list} setState={setState} state={state}/>
    </>
  )
}
