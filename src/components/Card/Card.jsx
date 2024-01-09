


 const Card = ({titulo, texto, img, BorderColor}) => {

    return (
        <div style={{bordertop:`5px solid ${BorderColor}`}}>
            <div>
               <h1>{titulo}</h1>
               <p>{texto}</p>
            </div>
             <div>
             <img className="icon" src={img} alt="" />
            </div>
        </div>
    )
}


export default Card