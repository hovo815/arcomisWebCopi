import React from 'react';
import omniatechVideo from "../../Components/Video/omniatechVideo.mp4";
import "./VideoPages.scss";

function VideoPages(props) {
    return (
        <div>
            <div className="container-video">
                <div className="container-video-text">
                    <h2 className="container-video-text-title-1">Welcome to</h2>
                    <h2 className="container-video-text-title-2">Arcomia</h2>
                    <div className="container-video-text-centre">
                        <p>Your Ethereum Metaverse where creators can build and monetize their assets and virtual experiences vertically.</p>
                    </div>
                    <button><a href="" target="_blank">Join Discord</a></button>
                </div>
                <video src={omniatechVideo} autoPlay loop muted/>
            </div>
        </div>
    );
}

export default VideoPages;