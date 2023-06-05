import React from "react";
import Wind from "./Wind";
import Humidity from "./Humidity";
import Visibilty from "./Visibility";
import Airpressure from "./Airpressure";




function Today (){
    return(
        <div className="highlight">
            <h2 className="txtlight"> Today's Highlight </h2>
            <Wind/>
            <Humidity/>
            <Visibilty/>
            <Airpressure/>
        </div>
    )
}





export default Today;