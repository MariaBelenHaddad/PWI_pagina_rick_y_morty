import "./Description.css"

export default function Description({status,especie,genero,origen,setHide}) {

    const ocultar=()=>{
        setHide(true)
    }
    return(
        <div className="tarjeta-know-more">
            <button className="btn btn-x" onClick={ocultar}>X</button>
            <ul> 
                <li className="list-group-item fw-bold">Character Status: <br></br>{status}</li>
                <li className="list-group-item fw-bold"><span className="fw-normal">Species<br></br></span>{especie}</li>
                <li className="list-group-item fw-bold"><span className="fw-normal">Origin<br></br></span>{origen}</li>
                <li className="list-group-item fw-bold "><span className="fw-normal">Gender<br></br></span>{genero}</li>
            </ul>        
        </div>

    )
}

//recibimos del componente Card, el setter setHide() y lo usamos en el boton de este componente para cambiar el estado hide de false a true. De esta manera, deja de renderizar el componente Description.