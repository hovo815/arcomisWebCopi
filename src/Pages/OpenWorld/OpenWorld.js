import React, {useState} from 'react';
import omniatechVideo from "../../Components/Video/omniatechVideo.mp4";
import garden from "../../Components/Img/OpenWorld/garden.png";
import largepass from "../../Components/Img/OpenWorld/largepass.gif";
import platforms1 from "../../Components/Img/OpenWorld/platforms1.png";
import platforms2 from "../../Components/Img/OpenWorld/platforms2.png";
import cyberAvatar from "../../Components/Img/OpenWorld/cyberAvatar.png";
import divider from "../../Components/Img/OpenWorld/divider.svg";
import arrowRightSolid from "../../Components/Img/OpenWorld/arrowRightSolid.svg";
import Button from "../../Components/Button/Button";
import "./OpenWorld.scss";


function OpenWorld(props) {

    return (
        <div>
            <div className="openWorld-title-img">
                <img src={divider} alt="divider"/>
            </div>
            <div className="openWorld-title">
                <span>ABOUT</span><h2 className="openWorld-title-h2"> THE OPEN WORLD</h2>
            </div>
            <div className="main-openWorld">
                <div className="openWorld-max-width">
                    <div className="main-openWorld-contant">
                        <div className="main-openWorld-contant-video">
                            <video src={omniatechVideo} autoPlay loop muted/>
                        </div>
                        <div className="main-openWorld-contant-text">
                            <p className="main-openWorld-contant-text-1">CONTENT UPDATES</p>
                            <h2 className="main-openWorld-contant-text-title">FOLLOW OUR <h3>CONTENT</h3></h2>
                            <p className="main-openWorld-contant-text-2">Stay up-to-date about all the latest and
                                greatest stuff we are working on in our Discord.</p>
                            <Button text="Join Discord" widtha="174px"/>
                        </div>
                    </div>

                    <div className="main-openWorld-contant">
                        <div className="main-openWorld-contant-text" style={{padding: "0 0 0 0"}}>
                            <p className="main-openWorld-contant-text-1">A SCARCE ASSET</p>
                            <h2 className="main-openWorld-contant-text-title">OUR LAND IS<h3>VALUABLE</h3></h2>
                            <p className="main-openWorld-contant-text-2">The Arcomia Metaverse is composed of 175,000
                                Land
                                parcels. This number is finite, meaning that there will never be more. The genesis batch
                                contains 20,000 land. Land will be distributed through periodic vesting.</p>
                            <Button text="Join Discord" widtha="181px" src={arrowRightSolid}/>
                        </div>
                        <div className="main-openWorld-contant-garden">
                            <img src={garden} alt="garden"/>
                        </div>
                    </div>

                    <div className="main-openWorld-contant">
                        <div className="main-openWorld-contant-gif">
                            <img src={largepass} alt="largepass"/>
                        </div>
                        <div className="main-openWorld-contant-text padding">
                            <div className="padding">
                                <p className="main-openWorld-contant-text-1">LAND PASS</p>
                                <h2 className="main-openWorld-contant-text-title">LAND PASS<h3>GIVE-AWAY</h3></h2>
                                <p className="main-openWorld-contant-text-2">The land pass can be acquired through
                                    events,
                                    partnerships and giveaways. With the
                                    pass Arcomians can claim land parcel in the Arcomia Metaverse.</p>
                                <div className="main-openWorld-contant-text-largepass-button">
                                    <div><Button text="View in OPENSEA" src={arrowRightSolid} width="56%"/></div>
                                    <div><Button text="Join Discord" width="77%" widtha="108px"/></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-openWorld-contant">
                        <div className="main-openWorld-contant-text" style={{padding: "0 0 0 0px"}}>
                            <p className="main-openWorld-contant-text-1">CUSTOMIZABLE AVATARS</p>
                            <h2 className="main-openWorld-contant-text-title">Create your<h3>avatar</h3></h2>
                            <p className="main-openWorld-contant-text-2">Create your avatar and explore virtual worlds
                                with one consistent
                                identity. It's your passport to the metaverse.</p>
                            <div className="main-openWorld-contant-text-icon">
                                <div className="openWorld-flex">
                                    <div className="main-openWorld-contant-text-icon-img1">
                                        <img src={platforms1} alt=""/>
                                    </div>
                                    <p>Use your NFT's across multiple platforms</p>
                                </div>
                                <div className="openWorld-flex">
                                    <div className="main-openWorld-contant-text-icon-img2">
                                        <img src={platforms2} alt=""/>
                                    </div>
                                    <p>Trade or sell Avatars as NFTs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="main-openWorld-contant-cyberAvatar">
                            <img src={cyberAvatar} alt="cyberAvatar" width="50%"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default OpenWorld;