import React from 'react';
import divider from "../../Components/Img/OpenWorld/divider.svg";
import rachmatbw from "../../Components/Img/MeettheTeam/rachmatbw.png"
import eduardbw from "../../Components/Img/MeettheTeam/eduardbw.png"
import marvinbw from "../../Components/Img/MeettheTeam/marvinbw.png"
import adibw from "../../Components/Img/MeettheTeam/adibw.png"
import nickbw from "../../Components/Img/MeettheTeam/nickbw.png"
import "./Team.scss"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Team(props) {
    return (
        <div>
            <Header/>
            <div className="container-Team-contant-title">
                <h3>
                    Core Team
                </h3>
            </div>
            <div className="container-Team">
                <div className="team-max-width">
                    <div className="container-Team-contant">
                        <div className="container-Team-contant-card1">
                            <img src={nickbw} alt="nickbw"/>
                            <p className="container-Team-contant-card1-profession">Business Developer</p>
                            <p className="container-Team-contant-card1-name">Nick de Wit</p>
                            <div className="container-Team-contant-card1-text">
                                <p className="container-Team-contant-card1-text-1">Nick is responsible for overall strategy, implementation and oversee processes for increased productivity and growth. He designs daily operational programs, manages employee activity and provides suitable resources
                                    for the team. Next to that establishes relationships with appropriate and meaningful partners.</p>
                            </div>
                        </div>

                        <div className="container-Team-contant-card2">
                            <img src={adibw} alt="adibw"/>
                            <p className="container-Team-contant-card2-profession">Creative Director</p>
                            <p className="container-Team-contant-card2-name">Adi Denir</p>
                            <div className="container-Team-contant-card2-text">
                                <p className="container-Team-contant-card2-text-2">Adi spent 17+ years working in the creative field.
                                    He's been working for various tech companies. As a dreamer, his only goal is to deliver results exceeding all expectations with his skills and passion for game development.
                                </p>
                            </div>
                        </div>
                        <div className="container-Team-contant-card3">
                            <img src={marvinbw} alt="marvinbw"/>
                            <p className="container-Team-contant-card3-profession">CTO</p>
                            <p className="container-Team-contant-card3-name">Marvin Slegt</p>
                            <div className="container-Team-contant-card3-text">
                                <p className="container-Team-contant-card3-text-3">As a former CEO of a large cryptocurrency exchange, Eduard has a lot of experience when it comes to building ideas from the ground up and making them
                                    succeed. Now as a COO Eduard manages day-to-day operations and provides strategic advice.
                                </p>
                            </div>
                        </div>

                        <div className="container-Team-contant-card4">
                            <img src={rachmatbw} alt="rachmatbw"/>
                            <p className="container-Team-contant-card4-profession">CEO</p>
                            <p className="container-Team-contant-card4-name">Rachmat Sasongko</p>
                            <div className="container-Team-contant-card4-text">
                                <p className="container-Team-contant-card4-text-4">Rachmat makes major corporate decisions, manages the overall operations and resources of Arcomia and acts as the main point of
                                    communication between the DAO, board of directors (Arcomia Labs Ltd) and corporate operations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-Team-contant-card5">
                        <img src={eduardbw} alt="eduardbw"/>
                        <p className="container-Team-contant-card5-profession">COO</p>
                        <p className="container-Team-contant-card5-name">Eduard Driessen</p>
                        <div className="container-Team-contant-card5-text">
                            <p className="container-Team-contant-card5-text-5">Marvin is responsible for overseeing the development and dissemination of Arcomia's technology.
                                Marvin has experience with Javascript, Typescript, Solidity and C++ programming skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer noneimg/>
        </div>
    );
}

export default Team;