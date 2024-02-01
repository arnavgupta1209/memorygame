

export default function Pokecard({pokemon, setState, state}) {
    const shuffle = (array) => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
      }; 

    const handleClickwrap = (id) => {
        return (e) => {
            e.preventDefault();
            console.log(id);
            const newstate = {...state};
            if (state.pokeclicked[id]){
                newstate.score = 0;
                newstate.clickedpokemon = 0;
                newstate.pokemon_list = shuffle(state.pokemon_list);
                for (let i=0; i<9; i++){
                    newstate.pokeclicked[i] = false;
                }
                setState(newstate);

            } else{
                console.log("here");
                newstate.pokeclicked[id] = true;
                if (newstate.score+1 > newstate.highscore){newstate.highscore = newstate.score+1}
                if (newstate.score+1 == 9){
                    newstate.highscore = 0; 
                    newstate.score = 0; 
                    alert("Max Score Reached!");
                    for (let i=0; i<9; i++){
                        newstate.pokeclicked[i] = false;
                    }
                    newstate.score = -1;
                }
                newstate.score += 1;
                newstate.clickedpokemon = id;
                newstate.pokemon_list = shuffle(state.pokemon_list);
                console.log(newstate);
                setState(newstate);
            }

        };
    }
    return (
        <div className="card" onClick={handleClickwrap(pokemon.id)}>
            <img src={pokemon.img} />
        </div>
    );
}

