import { useState } from 'react';
import Description from '../Description/Description';
import "./Card.css"

export default function Card({infoPersonaje}) {

    let [hide,setHide]=useState(true); //el estado arranca en true por eso oculta el componente Description

    const showMore=()=>{
        setHide(false) //si hago click en el botón me actualiza el estado a false y me muestra el componente Description
    }

    return(
       <div className="rounded card p-2">
            <div className='tarjeta'>
                <img src={infoPersonaje.image} alt='Imagen personaje'/>
                <p className='info-personaje'>{infoPersonaje.name}</p>
                <button className="btn w-50 p-2 btn-know-more" onClick={showMore}>Know More...</button>
            </div>

            {   //operador ternario condicion?accion-true:accion-false;
                hide === false? <Description status={infoPersonaje.status} especie={infoPersonaje.species} genero={infoPersonaje.gender} origen={infoPersonaje.origin.name} setHide={setHide}/>:''//Si el estado es false me muestra el componente Description, si es true lo oculta
            }

       </div>
    )
    
}

//le pasamos algo de informacion de cada personaje al componente "Description" la informacion que necesita para la lista 

//para lograr que se oculte o aparezca cuando se clickean los botones, vamos a usar eventos y operador ternario