import"./Home.css"
import Button from "../../Components/Button/Button"

export default function Home(){
    return(
        <header className="d-flex justify-content-center aling-items-center vh-100">
            <div className="d-flex align-self-center flex-column justify-content-center bg-home">
                <h1 className="text-center texto-h1">Proyecto Rick & Morty</h1>
                <h2 className="text-center texto-h2">Welcome to Rick & Morty proyect!</h2>
                <p className="text-center texto">This proyect was made for practising React and to made a functional website.</p>
                <p className="text-center texto">In this website you can know information of the characters from this animated series.</p>
                <p className="text-center texto">Also you can filter for diferent types of properties to find the character that you are looking for or send us a message for any concern or suggestion</p>
                <h2 className="text-center texto-h2">Let´s go!</h2>
                <div className="d-flex flex-row justify-content-center align-items-center">   
                    <Button nombre="Characters" pasaje="/characters"/>
                    <Button nombre="Contact" pasaje="/contact"/>
                </div>
            </div>
        </header>
    
    )
}