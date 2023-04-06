import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import bnbchainevent from "../../Components/Img/blog/bnbchainevent.jpeg"
import eduardbw from "../../Components/Img/blog/eduardbw.png"
import imageFlying from "../../Components/Img/blog/imageFlying.png"
import blogheader from "../../Components/Img/blog/blogheader.png"
import "./Blog.scss";

function Blog(props) {
    const navigate = useNavigate()
    function click1 (){
        navigate("/binancePitchCard1")
    }
    function click2 (){
        navigate("/binancePitchCard2")
    }
    function click3 (){
        navigate("/binancePitchCard3")
    }
    function click4 (){
        navigate("/binancePitchCard4")
    }
    return (
        <div>
            <Header/>
            <div className="container-blog">
                <div className="container-blog-max-width">
                    <div className="container-blog-max-width-contant">
                        <h2 className="container-blog-max-width-contant-title">Blog</h2>
                        <div className="container-blog-max-width-contant-card-people">
                            <div className="container-blog-max-width-contant-card-people-img">
                                <img onClick={click1} src={bnbchainevent} alt="bnbchainevent" />
                            </div>
                            <div className="container-blog-max-width-contant-card-people-text">
                                <p onClick={click1} className="container-blog-max-width-contant-card-people-text-data">Announcements<span>7 Dec 2022</span>
                                </p>
                                <h2 onClick={click1} className="container-blog-max-width-contant-card-people-text-title">Binance Pitch
                                    Event
                                    NYC</h2>
                                <p className="container-blog-max-width-contant-card-people-text-characterize">Last week
                                    we
                                    had been selected to
                                    pitch at BNB Chain Innovation Pitch Day NYC 3th of December. Therefore part of our
                                    team
                                    is flew
                                    over from Amsterdam, to present our metaverse to the East Coast.</p>
                                <div className="container-blog-max-width-contant-card-people-text-img">
                                    <div>
                                        <img src={eduardbw} alt="eduardbw"/>
                                    </div>
                                    <div>
                                        <p>Eduard Driessen</p>
                                        <p>COO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-blog-max-width-contant-card-development">
                            <div className="container-blog-max-width-contant-card-development-1">
                                <img onClick={click2} className="container-blog-max-width-contant-card-development-1-img"
                                     src={imageFlying} alt="imageFlying"/>
                                <p onClick={click2} className="container-blog-max-width-contant-card-development-1-data">Developer
                                    Updates<span>22 Nov 2022</span></p>
                                <h2 onClick={click2} className="container-blog-max-width-contant-card-development-1-title">Development
                                    Diary #2</h2>
                                <p className="container-blog-max-width-contant-card-development-1-text">A new
                                    development diary is now available on YouTube. We cover the vertical
                                    approach of our open world, land plot sizes and the flying mount.</p>
                            </div>
                            <div className="container-blog-max-width-contant-card-development-2">
                                <img onClick={click3} className="container-blog-max-width-contant-card-development-1-img"
                                     src={blogheader} alt="blogheader"/>
                                <p className="container-blog-max-width-contant-card-development-1-data" onClick={click3}>Announcements<span>15 Nov 2022</span>
                                </p>
                                <h2 onClick={click3} className="container-blog-max-width-contant-card-development-1-title">A letter for
                                    the better</h2>
                                <p className="container-blog-max-width-contant-card-development-1-text">This week, we
                                    had an important meeting with our executive committee to discuss the
                                    context and instability of the market.
                                    We have been hoping for a return of the bull run until the last minute.</p>
                            </div>
                            <div className="container-blog-max-width-contant-card-development-3">
                                <img onClick={click4} className="container-blog-max-width-contant-card-development-1-img"
                                     src={blogheader} alt="blogheader"/>
                                <p className="container-blog-max-width-contant-card-development-1-data" onClick={click4}>Developer
                                    Updates<span>22 Sept 2022</span></p>
                                <h2 className="container-blog-max-width-contant-card-development-1-title" onClick={click4}>Shifting
                                    Chains</h2>
                                <p className="container-blog-max-width-contant-card-development-1-text">As of today, our
                                    core team decided to improve growth efficiency significantly by shifting
                                    from Cardano to Ethereum (and Polygon) blockchain while we are still in the early
                                    stage
                                    of development. Such a move would bring significant economies of scale through the
                                    vast
                                    range of Ethereum developer tools, features, applications, partnerships and target
                                    audience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Blog;