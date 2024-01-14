import { useState, useEffect } from "react";

function API() {
  let [PokemonNumber, setPokemonNumber] = useState(1);
  let [PokemonName, setPokemonName] = useState("");

  function increaseNumber() {
    setPokemonNumber(PokemonNumber + 1);
    console.log(PokemonNumber);
  }

  useEffect(() => {
    //console.log("Valor al Acualizar el estado:" +PokemonNumber)
    //fetch(`https://pokeapi.co/api/v2/ability/${PokemonNumber}/`)
    //.then((result) => result.json())
    //.then((data) => setPokemonName(data.name));


    searchPokemon(PokemonNumber)
  }, [PokemonNumber]);

  let searchPokemon =  async PokemonNumber=>{
    const response= await fetch(`https://pokeapi.co/api/v2/ability/${PokemonNumber}/`)
    const data = await response.json()
    setPokemonName(data.name)
  }

  return (
    <div className="API">
      <button onClick={increaseNumber}>Next</button>
      <div>
        {PokemonNumber}-{PokemonName}
      </div>
    </div>
  );
}
export default API;
