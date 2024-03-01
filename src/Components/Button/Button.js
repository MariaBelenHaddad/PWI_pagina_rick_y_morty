import "./Button.css";
import {Link} from 'react-router-dom';

export default function Button({nombre, pasaje}){
    return(
        <Link className="btn btn-lg boton" to={pasaje}>{nombre}</Link>
    )
}