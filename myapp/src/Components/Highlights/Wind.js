import React from "react";


function Wind () {
    return(
        <div className="status">
            <div className="windy">
                <h3 className="windtxt">Wind status </h3>
                <h4 className="mph"> 7mph </h4>
                <div className="info">
                    <h2 className="finder">.</h2>
                    <i className="material-icons">near_me</i>
                </div>
                <h5 className="wsw"> WSW </h5>

            </div>

        </div>
    )

}

export default Wind;