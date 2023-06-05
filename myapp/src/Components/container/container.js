import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";
import Gps from "./gps";
import Back from "./background";
import Updateweather from "./updateweather";
import Celts from "./Celts";
import Display from "./display";
import Current from "./Current";
import Search from "./Search/search";






function Container () {
    
    return(
        <div className="container">
                 <Search/>
                <Gps/>
                <Back/>
                <Updateweather/>
                <Celts />
                <Display />
                <Current/>
               
                
            
        </div>
    )
}
export default Container;