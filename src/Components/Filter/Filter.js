import "./Filter.css"

export default function Filter({title,filterName,filterCharacter}) {
   
    return(
        <div className="form-switch sw-verde">
            <input className="form-check-input" type="checkbox" role="switch" id={filterName} value={filterName} onClick={(event)=>filterCharacter(event.target)} />
            <label className="form-check-label" htmlFor={filterName}>{title}</label>
        </div>
    )
}
//checkbox