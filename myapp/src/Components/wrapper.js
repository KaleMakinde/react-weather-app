import React from "react";
import Cards from "./Cards";
import Temperature from "./temperature";
import Today from "./Highlights/Today";




function Wrapper () {
    return (
        <div className="wrapper">
            <Temperature/>
            <Cards/>
            <Today/>

            </div>
    )
}

export default Wrapper;