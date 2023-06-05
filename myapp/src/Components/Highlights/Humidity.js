import React from "react";



function Humidity  () {
    return(
        <div className="humid">
            <div className="box-humid">
                <h2 className="txt-humid"> Humidity </h2>
                <h3 className="numb-humid"> 84% </h3>

                <div className="bar">
                <h1 className="zero"> 0 </h1>
                <h2 className="fifty"> 50 </h2>
                <h3 className="hundred"> 100 </h3>
                <div className="line-bar"></div>
                <div className="line-bar2"></div>
                <h4 className="percent"> % </h4>
            </div>
            </div>

        </div>
    )

}

export default Humidity;