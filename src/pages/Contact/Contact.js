import Navegation from "../../Components/Navegation/Navegation"

import "./Contact.css"

export default function Contact(){
    return(
        <div>
            <Navegation hoja="Contact"/> 
            <div className="d-flex justify-content-center aling-items-center">
            <main className="bg-grey m-5 p-5 w-75 h-75">
                <h2 className="text-contact">Contact</h2>
                <p className="text-p-negro">Leave us your information so we can contact you</p>
                <form className="w-100" action="creo usuario en formspree y pego el link si quiero...">
                    <div className="formulario">
                        <div className="w-50">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control"  aria-label="First name" id="name"/>
                        </div>
                        <div className="w-50">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control"  aria-label="Last name" id="email"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message"></textarea>
                    </div>
                    <input className="btn boton-send" type="submit" value="Send"/>
                </form>
            </main>
            </div>
        </div>
    )
}