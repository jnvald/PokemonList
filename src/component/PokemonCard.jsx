import React,{useState} from "react";

const PokemonCard = (props) => {
  
  const [luchando, setLuchando] = useState(false);

  const yoteElijo = () => {
    luchando == false ? setLuchando(true): setLuchando(false);//if de hacker de Fernando :)
  };

  const PokeStyles = {
    border: "1px solid black",
    backgroundColor: "" + props.bg + "",
    width: "200px",
    margin: "auto",
    textAlign: "center",
  };

  const pokeImgname =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/";
  const pokeImgNumber = props.id;
  const pokeImg = pokeImgname + pokeImgNumber + ".png";

  return (
    <div className="pokemoncard" style={PokeStyles}>
      <p>{props.name}</p>
      <p>{props.id}</p>
      <p>{props.types}</p>
      <img src={pokeImg} />
      <button onClick={yoteElijo}>state: {luchando.toString()}</button>
    </div>
  );
};

export default PokemonCard;


