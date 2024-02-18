import "./Button.css";

export default function Button({nombre}){
    return(
        <button className="btn btn-lg boton">{nombre}</button>
    )
}