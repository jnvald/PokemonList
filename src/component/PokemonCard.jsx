import React from "react";

export default function PokemonCard (props){
    return (
    <div>
        <hr/>
        <h2>Propiedades de Pokemon</h2>
            <div className="container">
                <h2>Nombre :<strong>{props.nombre}</strong></h2>
                <h3>Id: {props.identificador}</h3>
                <h3>Tipo: {props.tipo.join(",")}</h3>
            </div>
    </div>
     );
    }



