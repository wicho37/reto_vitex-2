import "./Card.css";
import supervisor from "../../assets/img/supervisor.svg"




const Card_1 = () => {

    return(
        <div className="container">
            <div className="body_card">
              <h3>supervisor</h3>
              <p>monitors activity to identify project roadblocks</p>
            </div>
            <div>
            <img src={supervisor} alt="" />

            </div>
        </div>
    )
}


export default Card_1