import React from "react";

function Current (){
    return(
        <div className="display-date">
            <h3 className="curr-date"> Today
            <p className="sub-curr">. Fri, 5 Jun </p>
            </h3>
            <div className="loc-finder">
                <div className="mapper"><i class="material-icons">place</i></div>
                <h2 className="mapper-place"> Helsinki </h2>
            </div>
        </div>
    )
}

export default Current;