import"./Home.css"

export default function Home(){
    return(
        <div className="d-flex justify-content-center align-items-center">
            <div className="bg-white bg-home">
                <h1 className="text-center">Proyecto Rick & Morty</h1>
                <h2 className="text-center">Welcome to Rick & Morty proyect!</h2>
                <p className="text-center">This proyect was made for practising React and to made a functional website.</p>
                <p className="text-center">In this website you can know information of the characters from this animated series.</p>
                <p className="text-center">Also you can filter for diferent types of properties to find the character that you are looking for or send us a message for any concern or suggestion</p>
                <p className="text-center">Let´s go!</p>
                <button>Characters</button>
                <button>Contact</button>
            </div>
        </div>
    
    )
}