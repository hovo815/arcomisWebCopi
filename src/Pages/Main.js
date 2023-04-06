import React from 'react';
import Header from "./Header/Header"
import CriptoCards from "./CriptoCards/CriptoCards";
import VideoPages from "./VideoPages/VideoPages";
import ArcomiaMetaverse from "./ArcomiaMetaverse/ArcomiaMetaverse";
import OpenWorld from "./OpenWorld/OpenWorld";
import TheRoadmap from "./TheRoadmap/TheRoadmap";
import MeettheTeam from "./MeettheTeam/MeettheTeam";
import Footer from "./Footer/Footer";
import "./Main.scss";


function Main(props) {
    return (
        <div>
            <Header/>
            <VideoPages/>
            <CriptoCards/>
            <ArcomiaMetaverse/>
            <OpenWorld/>
            <TheRoadmap/>
            <MeettheTeam/>
            <Footer noneimg/>
        </div>
    );
}

export default Main;