import React from 'react';
import divider from "../../Components/Img/OpenWorld/divider.svg";
import rachmatbw from "../../Components/Img/MeettheTeam/rachmatbw.png"
import eduardbw from "../../Components/Img/MeettheTeam/eduardbw.png"
import marvinbw from "../../Components/Img/MeettheTeam/marvinbw.png"
import adibw from "../../Components/Img/MeettheTeam/adibw.png"
import nickbw from "../../Components/Img/MeettheTeam/nickbw.png"
import "./MeettheTeam.scss"

function MeettheTeam(props) {
    return (
        <div className="container-meettheTeam">
            <div className="container-meettheTeam-contant">
                <div className="container-meettheTeam-contant-logo">
                    <img src={divider} alt="divider"/>
                </div>
                <div className="container-meettheTeam-contant-title">
                    <h3>
                        MEET THE <span>TEAM</span>
                    </h3>
                </div>
                <div className="container-meettheTeam-contant-flex">
                    <div className="container-meettheTeam-contant-flex-1">
                        <div className="container-meettheTeam-contant-card1">
                            <img src={rachmatbw} alt="rachmatbw"/>
                            <p className="container-meettheTeam-contant-card1-name">Rachmat Sasongko</p>
                            <p className="container-meettheTeam-contant-card1-profession">CEO</p>
                        </div>
                        <div className="container-meettheTeam-contant-card2">
                            <img src={eduardbw} alt="eduardbw"/>
                            <p className="container-meettheTeam-contant-card2-name">Eduard Driessen</p>
                            <p className="container-meettheTeam-contant-card2-profession">COO</p>
                        </div>
                    </div>
                    <div className="container-meettheTeam-contant-flex-2">
                        <div className="container-meettheTeam-contant-card3">
                            <img src={marvinbw} alt="marvinbw"/>
                            <p className="container-meettheTeam-contant-card3-name">Marvin Slegt</p>
                            <p className="container-meettheTeam-contant-card3-profession">CTO</p>
                        </div>
                        <div className="container-meettheTeam-contant-card4">
                            <img src={adibw} alt="adibw"/>
                            <p className="container-meettheTeam-contant-card4-name">Adi Denir</p>
                            <p className="container-meettheTeam-contant-card4-profession">Creative Director</p>
                        </div>
                    </div>
                    <div className="container-meettheTeam-contant-flex-3">
                        <div className="container-meettheTeam-contant-card5">
                            <img src={nickbw} alt="nickbw"/>
                            <p className="container-meettheTeam-contant-card5-name">Nick de Wit</p>
                            <p className="container-meettheTeam-contant-card5-profession">Business Developer</p>
                        </div>
                    </div>
                </div>
                <div className="container-meettheTeam-contant-button">
                    <button><a href="" target="">Meet Team</a></button>
                </div>
            </div>
        </div>
    );
}

export default MeettheTeam;