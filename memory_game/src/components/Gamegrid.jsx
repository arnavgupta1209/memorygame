import Pokecard from "./Pokecard";

export default function Gamegrid({pokemon_list, setState, state}){
    
    let pokemonobj_list = [];
    for (let i=0; i<9; i++){
        pokemonobj_list.push({id:pokemon_list[i], img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon_list[i]}.png`})
    }
    return (
        <>
            <div className="grid">
                {pokemonobj_list.map(pokemon => <Pokecard key={pokemon.id} pokemon={pokemon} setState={setState} state={state}/>)}
            </div>
        </>
    );
}

