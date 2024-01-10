/* import React from "react"
import {Card} from "./components/Card/Card";
import img1 from "./assets/img/icon-supervisor.svg";
import img2 from "./assets/img/icon-team-builder.svg";
import img3 from "./assets/img/icon-Karma.svg";
import img4 from "./assets/img/icon-Calculator.svg"


function app() {

    return (
        <>

            <div>
                <div>
                    <h1>Realiabe, efficient delivery</h1>
                    <h2>Powered by tecnology</h2>
                </div>
                <div>
                    <p>Cut Artificial intelegence powered use millons of projet data</p>
                    <br />
                    <p>points to ensure that your projet is successful</p>
                </div>

                <div>
                    <Card
                        titulo="supervisor"
                        texto="monitors activity to identify project roadblocks"
                        img={img1}
                        borderColor="hsl(180,62%,55%)"
                    />
                </div>

                <div>
                    <div>
                        <Card
                            titulo="Team builder"
                            texto="Scans our talent networt to create the optimal team for your project"
                            img={img2}
                            borderColor="hsl(0,78%,62%)"


                    />
                    </div>
                    <div>
                        <Card
                            titulo="Karma"
                            texto="Regulary evaluates our talent to ensure quality"
                            img={img3}
                            borderColor="hsl(34,97%,64%)"

                    />
                    </div>
                </div>

                <div>
                    <Card
                        titulo="Calculator"
                        texto=" uses dat from past project to provide better delivery estimates"
                        img={img4}
                        borderColor="hsl(112,86%,64%)"
                    />
                </div>
            </div >
        </>
    )
}

export default app



/* */


import React from "react"
import Header  from "./components/Header/Header";
import Card_1  from "./components/Card_1/Card_1";
import Card_2  from "./components/Card_2/Card_2";
import Card_3  from "./components/Card_3/Card_3";
import Card_4  from "./components/Card_4/Card_4"






function app() {

    return (
        <div>
            <Header />
            <Card_1 />
            <div >
                <Card_2/>
                <Card_3 />
            </div>
            <Card_4 />

        </div>
    )
}

export default app  