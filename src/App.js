import React from "react";
import PokemonCard from "./component/PokemonCard";

function App() {
  let pokemonDB = [
    { id: 1, name: "Bulbasaur", types: ["poison", "grass"], bg: "green" },
    { id: 5, name: "Charmeleon", types: ["fire"], bg: "red" },
    { id: 9, name: "Blastoise", types: ["water"], bg: "blue" },
    { id: 12, name: "Butterfree", types: ["bug", "flying"], bg: "white" },
    { id: 16, name: "Pidgey", types: ["normal", "flying"], bg: "white" },
    { id: 23, name: "Ekans", types: ["poison"], bg: "purple" },
    { id: 24, name: "Arbok", types: ["poison"], bg: "purple" },
    { id: 25, name: "Pikachu", types: ["electric"], bg: "yellow" },
    { id: 37, name: "Vulpix", types: ["fire"], bg: "red" },
    { id: 52, name: "Meowth", types: ["normal"], bg: "white" },
    { id: 63, name: "Abra", types: ["psychic"], bg: "grey" },
    { id: 67, name: "Machamp", types: ["fighting"], bg: "brown" },
    { id: 72, name: "Tentacool", types: ["water", "poison"], bg: "blue" },
    { id: 74, name: "Geodude", types: ["rock", "ground"], bg: "brown" },
    { id: 87, name: "Dewgong", types: ["water", "ice"], bg: "blue" },
    { id: 98, name: "Krabby", types: ["water"], bg: "blue" },
    { id: 115, name: "Kangaskhan", types: ["normal"], bg: "white" },
    { id: 122, name: "Mr. Mime", types: ["psychic"], bg: "purple" },
    { id: 133, name: "Eevee", types: ["normal"], bg: "white" },
    { id: 144, name: "Articuno", types: ["ice", "flying"], bg: "white" },
    { id: 145, name: "Zapdos", types: ["electric", "flying"], bg: "yellow" },
    { id: 146, name: "Moltres", types: ["fire", "flying"], bg: "red" },
    { id: 148, name: "Dragonair", types: ["dragon"], bg: "silver" },
  ];

  let tipo =[
    {types: "fire", color: "red"},
    {types: "electric", color: "yellow"},
    {types: "dragon", color: "silver"},
    {types: "flying", color: "white"},
    {types: "normal", color: "white"},
    {types: "ice", color: "white"},
    {types: "rock", color: "brown"},
    {types: "water", color: "blue"},
    {types: "psychic", color: "purple"},
    {types: "poison", color: "purple"},
    {types: "grass", color: "green"},
  ]

  const PokeAppStyles = {
    display: "grid",
    gridAutoRows: "15rem",
    gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
  };

  return (
    <div className="Poke-app" style={PokeAppStyles}>
      {pokemonDB.map((unPokemon) => (
        <PokemonCard
          id={unPokemon.id}
          name={unPokemon.name}
          types={unPokemon.types.toString()}
          bg={tipo.filter((unTipo) => (unTipo.types == unPokemon.types[0])).map((tipoElegido) => (tipoElegido.color))}
        ></PokemonCard>
      ))}
    </div>
  );
}

export default App;
