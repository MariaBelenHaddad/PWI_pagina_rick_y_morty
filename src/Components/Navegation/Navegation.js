import {Link} from 'react-router-dom';

import "./Navegation.css";

export default function Navegation({hoja}){

    return(
        <nav className="navbar navbar-expand-lg sticky">
            <div className="container-fluid barra-superior">
                <Link to={"/"}><h1 className="navbar-brand barra-texto" >Rick & Morty</h1></Link>
                <button className="navbar-toggler barra-texto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon barra-texto"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                    <ul className="navbar-nav align-items-center text-center">
                        <li>
                            <Link className= {hoja === "Characters" ? "nav-link s-active":"nav-link n-active"} aria-current="page" to={"/characters"}>Characters</Link>
                        </li>
                        <li>
                            <Link  className= {hoja === "Contact" ? "nav-link s-active":"nav-link n-active"} to={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    )
}