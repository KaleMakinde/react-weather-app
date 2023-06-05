import React from "react";
import Sleet from './weather-app-master/Sleet.png';
import Clear from './weather-app-master/Clear.png';
import Thunderstorm from './weather-app-master/Thunderstorm.png';
import LightCloud from './weather-app-master/LightCloud.png';
import HeavyRain from './weather-app-master/HeavyRain.png';





function Cards (){
    return(
        <div className="cardy">
            
            <div className="card1">
                    <h2 className="cardtxt">Tomorrow</h2>
                    <div className="ModSleetSwrsDay">
                        
                        <div className="iconwrap">
                        <div><img className="clearpng" src={Clear} alt="clear" /></div>
                        <div><img className="sleetpng" src={Sleet} alt="sleet"></img></div>
                        </div>

                    <div className="ade">
                        <div className="capcelts1"><h3 className="celts16"> 16°C</h3></div>
                        <div className="capcelts2"><h4 className="celts11"> 11°C</h4></div>
                    </div>
                    
                    </div>
{/* -----------------------------------------------------------------card2-----------------------------------  */}

                </div>
                <div className="card2">
                <h2 className="cardtxt2">Sun, 7 Jun </h2>
                    <div className="ModSleetSwrsDay2">
                        
                        <div className="iconwrap2">
                        <div><img className="clearpng1" src={Clear} alt="clear" /></div>
                        <div><img className="sleetpng1" src={Sleet} alt="sleet"></img></div>
                        </div>

                    <div className="hade">
                        <div className="papecelts1"><h3 className="selts16"> 16°C</h3></div>
                        <div className="papecelts2"><h4 className="selts11"> 11°C</h4></div>
                    </div>
                    
                    </div>
                    
                </div>

{/* ---------------------------------------------------card3------------------------------------------ */}
                <div className="card3">
                <h2 className="cardtxt3">Monday, 8 Jun</h2>
                    <div className="ModSleetSwrsDay3">
                        
                        <div className="iconwrap3">
                        <div><img className="clearpng2" src={Clear} alt="clear" /></div>
                        <div><img className="sleetpng2" src={Thunderstorm} alt="sleet"></img></div>
                        </div>

                    <div className="fade">
                        <div className="qapcelts1"><h3 className="velts16"> 16°C</h3></div>
                        <div className="wapcelts2"><h4 className="belts11"> 11°C</h4></div>
                    </div>
                    
                    </div>
                    
                </div>
{/* ------------------------------------------------------card4-------------------------------------------- */}
                <div className="card4">
                <h2 className="cardtxt4">Tuesday, 9 Jun </h2>
                    <div className="ModSleetSwrsDay4">
                        
                        <div className="iconwrap4">
                        <div><img className="lightcloud" src={LightCloud} alt="sleet"></img></div>
                        </div>

                    <div className="tade">
                        <div className="lapcelts1"><h3 className="qelts16"> 16°C</h3></div>
                        <div className="lapcelts2"><h4 className="welts11"> 11°C</h4></div>
                    </div>
                    
                    </div>
                    
                </div>

{/*  ------------------------------------------------------card5------------------------------- */}
                <div className="card5">
                <h2 className="cardtxt5"> Wednesday, 10 Jun </h2>
                    <div className="ModSleetSwrsDay5">
                        
                        <div className="iconwrap5">
                        <div><img className="heavyrain" src={HeavyRain} alt="sleet"></img></div>
                        </div>

                    <div className="dade">
                        <div className="napcelts1"><h3 className="vibes16"> 16°C</h3></div>
                        <div className="napcelts2"><h4 className="vibes11"> 11°C</h4></div>
                    </div>
                    
                    </div>
                    
                </div>

        </div>
    )
}

export default Cards;