import {useState,useEffect} from 'react'; //importamos los métodos

import Card from "../Card/Card" //importamos el componente Card
import Filters from '../Filters/Filters';

import "./SectionCards.css";

export default function SectionCards(){

    let [listaPersonajes,setListaPersonajes]=useState([]);//genero un estado que inicia como un array vacio, luego lo modifico con la info que traigo de la API
    let [personajesCompleto,setPersonajesCompleto]=useState([])
    let [filtrosAplicados,setFiltrosAplicados]=useState([]);//lista que inicia vacía de todos los filtros que tenemos marcados para aplicar

    const traerPersonajes=async()=>{

        let info= await fetch("https://rickandmortyapi.com/api/character")//ejecutar la peticion a esa direccion
               .then((resp)=>{return resp.json()})//accionar si logra obtener la info
                //.json() -> metodo que evalua lo que le pasemos como JSON y lo parsea , lo transforma a una array|objeto
               .then((data)=>{ return data.results})
                   //siguiente accion que hacemos si todo salio bien.Esta API en particular devuelve la lista de personajes dentro de la propiedad "results" 
               .catch((error)=>{console.log(error)})//Acción si no logra obtener la info

          console.log(info) //muestro por consola la info que traje de la API

        setListaPersonajes(info)//cambio el estado de listaPersonajes, agrego a la lista todos los personajes que traemos de la API. Ahora se va a re-renderizar el componente (el setter actualiza el componente)

        setPersonajesCompleto(info)
        
    };

    const filterCharacter=(target)=>{
        //se fija si se "pulso" o "despulso" un filtro y arma la lista de todos los filtros a aplicar
        if(target.checked === true){
            //si se pulso (marcamos el checkbox) agrega a una lista el filtro aplicado
            setFiltrosAplicados([...filtrosAplicados,target.value])
        }else{
            //si "despulso" el filtro
            setListaPersonajes(personajesCompleto)
            let filtrosNuevos=filtrosAplicados.filter((filtro)=> filtro !== target.value);//saco el filtro aplicado de la lista
            setFiltrosAplicados(filtrosNuevos)//cambio los filtros aplicados
        }
    }


    useEffect(()=>{
        setListaPersonajes(personajesCompleto)
        console.log(filtrosAplicados)
        //por cada filtro que tiene pulsado, modifica la informacion de "listaPersonaje"
        filtrosAplicados.forEach((data)=>   {
            if(data === "Dead" || data ==="Alive"){
                let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.status === data); 
                setListaPersonajes(dataFiltrada)
            }else if(data === "Female" || data ==="Male"){
                let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.gender === data);
                setListaPersonajes(dataFiltrada)
            }else if(data === "Unknown"){
                let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.origin.name === "unknown");
                setListaPersonajes(dataFiltrada)
            }
        })
        
    },[filtrosAplicados])
    //este useEffect se ejecuta cada vez que ve que se modifica la lista de filtros a aplicar
    
    useEffect(()=>{

        traerPersonajes()
    },[]); //apenas se cargue por primera vez el componente "SectionCards",ejecuta la función traerPersonajes (porque los corchetes estan vacíos)
   
    return(
        <section>

            <Filters filterCharacter={filterCharacter}/>
            {/*Creamos una función que filtra entre los personajes que tenemos y se la pasamos al componente Filters; y esta ultima a su vez a cada filtro para que cuando se pulse dicho filtro se ejecute la función.
            El parametro "data" de la función filterCharacter contiene el "value" del input que se pulsó. Armamos un operador ternario para que en caso de que la lista de personajes filtrada este vacía, aparezca una advertencia.*/}
            <div className='display-cards'>
            {   
        listaPersonajes.length !== 0 ?
            listaPersonajes.map((personaje)=>{
                return <Card key={personaje.id} infoPersonaje={personaje}/>
            })
        :
            <div class="alert alert-success" role="alert">
                Sorry! There are no characters width all those properties.
            </div>
    }

            </div>
            
        </section>
    )
};