import React from "react"
import Card from "./components/Card/Card"
import img2 from "./assets/team-builder.svg";
import img1 from "./assets/supervisor.svg";
import img3 from "./assets/Karma.svg";
import img4 from "./assets/Calculator.svg"
import "./App.css"


function app() {

    return (
        <>

            <div>
                <div>
                    <div className="tittle_one">
                       <h1>Realiabe, efficient delivery</h1>
                       <h2>Powered by tecnology</h2>
                    </div>
                    <div className="tittle-secund">
                       <p>Cut Artificial intelegence powered use millons of projet data</p>
                       <br />
                       <p>points to ensure that your projet is successful</p>
                    </div>
                </div>
            <div className="container_cards">

                <div className="container_1">
                    <Card
                        titulo="supervisor"
                        texto="monitors activity to identify project roadblocks"
                        img={img1}
                        borderColor="hsl(180,62%,55%)"
                    />
                </div>

                <div>
                    <div className="container-medium">
                        <Card
                            titulo="Team builder"
                            texto="Scans our talent networt to create the optimal team for your project"
                            img={img2}
                            borderColor="hsl(0,78%,62%)"


                    />
                    </div>
                    <div className="card_medium-2">
                        <Card
                            titulo="Karma"
                            texto="Regulary evaluates our talent to ensure quality"
                            img={img3}
                            borderColor="hsl(34, 97%, 64%)"

                    />
                    </div>
                </div>

                <div className="container_1">
                    <Card
                        titulo="Calculator"
                        texto=" uses dat from past project to provide better delivery estimates"
                        img={img4}
                        borderColor="hsl(212,86%,64%)"
                    />
                </div>
            </div>
            </div >
        </>
    )
}

export default app



/* 


import React from "react"
import Header from "./components/Header/Header";
import Card_1 from "./components/Card_1/Card_1";
import Card_2 from "./components/Card_2/Card_2";
import Card_3 from "./components/Card_3/Card_3";
import Card_4 from "./components/Card_4/Card_4"
import "./app.css" 






function app() {

    return (
        <div>
            <Header />
            
            <div className="cards">
                <div>
                    <Card_1 />
                </div>
                    <div className="medium_card">
                        <Card_2 />
                        <Card_3 />
                    </div>
                <div>
                    <Card_4 />
                </div>
            </div>

        </div>
    )
}

export default app  */