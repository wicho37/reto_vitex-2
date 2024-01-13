import "./Card.css";


 const Card = ({titulo, texto, img}) => {

    return (
        < div className="container" style={{bordertop:`5px solid `}}>
            <div className="card_origen">
               <h1>{titulo}</h1>
               <p>{texto}</p>
            </div>
            <img className="icon" src={img} alt="" />
        </div>
    )
}


export default Card