import React from 'react';
import box from "../../Components/Img/ArcomiaMetaverse/box.png"
import Village from "../../Components/Img/ArcomiaMetaverse/Village.png"
import city from "../../Components/Img/ArcomiaMetaverse/city.png"
import arcoscooter from "../../Components/Img/ArcomiaMetaverse/arcoscooter.png"
import "./ArcomiaMetaverse.scss";

function ArcomiaMetaverse(props) {
    return (
        <div className="container-metaverse">
            <div className="metaverse-max-width">
                <div className="container-metaverse-title">
                    <div className="container-metaverse-title">
                        <h2>ARCOMIA METAVERSE</h2>
                    </div>
                </div>
                <div className="container-metaverse-text">
                    <p>Arcomia is a metaverse (VR) platform powered by the Ethereum blockchain.
                        Users can create, experience, and monetize content and applications using RCM as the main
                        utility
                        token.</p>
                </div>
                <div className="container-metaverse-card">
                    <div className="container-metaverse-card-box">
                        <img src={box} alt="box"/>
                        <h2>PLAY 2 EARN</h2>
                        <p>
                            Earn rewards with real-world value by completing tasks, battling other players and progressing through various experiences.
                        </p>
                    </div>
                    <div className="container-metaverse-card-village">
                        <img src={Village} alt="Village"/>
                        <h2>EXPERIENCES</h2>
                        <p>Do things together in virtual experiences. They represent the wide range of 3D immersive
                            places -
                            from lobbies to virtual concerts - that people can enjoy together with their friends</p>
                    </div>
                    <div className="container-metaverse-card-city">
                        <img src={city} alt="city"/>
                        <h2>VERTICAL WORLD</h2>
                        <p>Land is identified by a set of coordinates (x,y,z) and thus scales vertical. This makes
                            exploration
                            and travelling fun and efficient.</p>

                    </div>
                    <div className="container-metaverse-card-arcoscooter">
                        <img src={arcoscooter} alt="arcoscooter"/>
                        <h2>NFT AS ASSETS</h2>
                        <p>Arcomians can use and interact with assets like vehicles, furniture, jewelery, character
                            customization and so forth. All registered on the Ethereum blockchain.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArcomiaMetaverse;