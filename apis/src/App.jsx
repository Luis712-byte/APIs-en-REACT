import API from "./Component/API";
import Buttom from "./Component/Buttom";
import Card from "./Component/Card";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { useState, useEffect } from "react";
import "./sass/Apps.scss";

function App() {
  const [pokemonID, setPokemonID] = useState(1);
  const [pokemonEvolution, setpokemonEvolution] = useState([]);

  useEffect(() => {
    getEvolution(pokemonID);
  }, [pokemonID]);

  async function getEvolution(id) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    );
    const data = await response.json();

    let PokemonEvoArray = [];
    let PokemonLv1 = data.chain.species.name;
    let PokemonLv1Imagen = await getPokemonImgs(PokemonLv1);
    PokemonEvoArray.push([PokemonLv1, PokemonLv1Imagen]);

    if (data.chain.evolves_to.length !== 0) {
      let PokemonLv2 = data.chain.evolves_to[0].species.name;
      let PokemonLv2Imagen = await getPokemonImgs(PokemonLv2);
      PokemonEvoArray.push([PokemonLv2, PokemonLv2Imagen]);

      if (data.chain.evolves_to[0].evolves_to.length !== 0) {
        let PokemonLv3 = data.chain.evolves_to[0].evolves_to[0].species.name;
        let PokemonLv3Imagen = await getPokemonImgs(PokemonLv3);
        PokemonEvoArray.push([PokemonLv3, PokemonLv3Imagen]);
        
      }
    }
    setpokemonEvolution(PokemonEvoArray);
  }
  async function getPokemonImgs(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const data = await response.json();
    return data.sprites.other["official-artwork"].front_default;
  }

  function Incrementar() {
    setPokemonID(pokemonID + 1);
  }

  function Decrementar() {
    setPokemonID(pokemonID === 1 ? 1 : pokemonID - 1);
  }

  return (
    <div className="app">
      <div className={`card-container card${pokemonEvolution.length}`}>
        {pokemonEvolution.map((pokemon) => (
          <Card key={pokemon[0]} name={pokemon[0]} img={pokemon[1]} />
        ))}
      </div>
      <div className="btn-container">
        <Buttom icon={<TiArrowLeftThick />} handleClick={Decrementar} />
        <Buttom icon={<TiArrowRightThick />} handleClick={Incrementar} />
      </div>
    </div>
  );
}

export default App;
