import "./Card.css";


 const Card = ({titulo, texto, img, border}) => {

    return (
        < div className="container" style={{borderTop:`5px solid ${border}`}}>
            <div className="card_origen">
               <h1>{titulo}</h1>
               <p>{texto}</p>
            </div>
            <img className="icon" src={img} alt="" />
        </div>
    )
}


export default Card