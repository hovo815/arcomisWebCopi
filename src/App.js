import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Blog from "./Pages/Blog/Blog";
import BinancePitch from "./Pages/BinancePitch/BinancePitch";
import './App.scss';
import Team from "./Pages/Team/Team";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Main/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/binancePitchCard1" element={<BinancePitch card1/>}/>
                    <Route path="/binancePitchCard2" element={<BinancePitch card2/>}/>
                    <Route path="/binancePitchCard3" element={<BinancePitch card3/>}/>
                    <Route path="/binancePitchCard4" element={<BinancePitch card4/>}/>
                    <Route path="/team" element={<Team/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
