import {useState,useEffect} from 'react'; //importamos los métodos
import "./SectionCards.css";
import Card from "../Card/Card" //importamos el componente Card

export default function SectionCards(){

    let [listaPersonajes,setListaPersonajes]=useState([]);//genero un estado que inicia como un array vacio, luego lo modifico con la info que traigo de la API

    const traerPersonajes=async()=>{

        let info= await fetch("https://rickandmortyapi.com/api/character")//ejecutar la peticion a esa direccion
               .then((resp)=>{return resp.json()})//accionar si logra obtener la info
                //.json() -> metodo que evalua lo que le pasemos como JSON y lo parsea , lo transforma a una array|objeto
               .then((data)=>{ return data.results})
                   //siguiente accion que hacemos si todo salio bien.Esta API en particular devuelve la lista de personajes dentro de la propiedad "results" 
               .catch((error)=>{console.log(error)})//Acción si no logra obtener la info

          console.log(info) //muestro por consola la info que traje de la API

        setListaPersonajes(info)//cambio el estado de listaPersonajes, agrego a la lista todos los personajes que traemos de la API. Ahora se va a re-renderizar el componente (el setter actualiza el componente)
        
    };
    
    useEffect(()=>{

        traerPersonajes()
    },[]); //apenas se cargue por primera vez el componente "SectionCards",ejecuta la función traerPersonajes (porque los corchetes estan vacíos)
   
    return(
        <section>
            
            {
                listaPersonajes.map((personaje)=>{
                    return <Card key={personaje.id} infoPersonaje={personaje}/>
                })
            }
            
        </section>
    )
};