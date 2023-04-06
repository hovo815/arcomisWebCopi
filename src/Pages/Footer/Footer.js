import React from 'react';
import sneakpeak from "../../Components/Img/footer/sneakpeak.png";
import chevron from "../../Components/Img/footer/chevron.svg";
import twitter from "../../Components/Img/footer/twitter.svg";
import discord from "../../Components/Img/footer/discord.svg";
import instagram from "../../Components/Img/footer/instagram.svg";
import youtube from "../../Components/Img/footer/youtube.svg";
import "./Footer.scss";

function Footer({noneimg}) {
    return (
        <div className="container-footer">
            {noneimg ? <div className="container-footer-discord">
                <div className="container-footer-discord-centre">
                    <div className="container-footer-discord-centre-text">
                        <h2>JOIN
                            <span>DISCORD</span>
                        </h2>
                        <p>Stay up-to-date, participate in events and give-aways.</p>
                        <div className="container-footer-discord-centre-text-button">
                            <button><a href="" target="_blank">Join Discord</a></button>
                        </div>
                    </div>
                </div>
                <div className="container-footer-discord-img" style={{backgroundImage: `url(${sneakpeak})`}}>
                </div>
            </div>:null}

            <div className="container-footer-socset">
                <div className="container-footer-socset-logo">
                    <div className="container-footer-socset-logo-img">
                        <img src={twitter} alt="twitter"/>
                        <img src={discord} alt="discord"/>
                        <img src={instagram} alt="instagram"/>
                        <img src={youtube} alt="youtube"/>
                    </div>
                </div>
                <div className="container-footer-socset-text">
                            <div className="container-footer-socset-text-border">
                                <hr/>
                            </div>
                            <div className="container-footer-socset-text-button">
                                <div className="container-footer-socset-text-button-contant">
                                    <p>© 2022 Arcomia Labs Ltd. All rights reserved.</p>
                                    <ul className="container-footer-socset-text-button">
                                        <li><a href="" target="_blank">Contact us <img src={chevron} alt="chevron"/></a>
                                        </li>
                                    </ul>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;