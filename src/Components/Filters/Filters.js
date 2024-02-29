
//Creo un componente más pequeño que representa cada filtro pero le cambio el título
import Filter from "../Filter/Filter";

import "./Filters.css"

export default function Filters({filterCharacter}) {

    return(
        <section className="section-filters">
            <p className="titulo-filters">Filters</p>
            <form className="filtros">
                <Filter filterName="Alive" title="Character Alive" filterCharacter={filterCharacter}/>
                <Filter filterName="Dead" title="Character Dead" filterCharacter={filterCharacter}/>
                <Filter filterName="Female" title="Female" filterCharacter={filterCharacter}/>
                <Filter filterName="Male" title="Male" filterCharacter={filterCharacter}/>
                <Filter filterName="Unknown" title="Origin Unknown" filterCharacter={filterCharacter}/>
            </form>
        </section>
       
    )
}
/*Props:
- filterName es el id de cada filtro, al copiar de bootstrap borró los ids que son todos iguales y coloco filterName
- title es el titúlo que voy a mostrar para cada filtro
*/