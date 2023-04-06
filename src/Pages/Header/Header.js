// import React from 'react';
// import { Outlet, Link } from "react-router-dom";
// // import {useNavigate} from "react-router-dom";
// import {useState, useEffect} from "react";
// import twitter from "../../Components/Img/header/twitter.svg";
// import discord from "../../Components/Img/header/discord.svg";
// import arcomia from "../../Components/Img/header/arcomia.png";
// import burgerMenu from "../../Components/Img/header/burgerMenu.svg"
// import xIcon from "../../Components/Img/header/xIcon.svg"
// import "./Header.scss";
//
//
// function Header(props) {
//     const [open, setOpen] = useState(false)
//
//     function click() {
//         setOpen(!open)
//     }
//
//     return (
//         <div className="container-header-centre">
//             <header className="header">
//                 <div className="header-logo">
//                     <a href="" target="_blank"><img src={arcomia} alt="arcomia"/></a>
//                 </div>
//                 <nav className="header-nav">
//                     <ul>
//                         <li><Link to="/">Roadmap</Link></li>
//                         <li><Link to="/Team">Team</Link></li>
//                         <li><Link to="/">What's new</Link></li>
//                         <li><Link to="/Blog">Blog</Link></li>
//                         <li><Link to="/">Whitepaper</Link></li>
//                         <li><Link to="/">FAQ</Link></li>
//                     </ul>
//                 </nav>
//                 <div className="main-container-social">
//                     <div className="main-container-social-icon">
//                         <div>
//                             <img src={twitter} alt="telegram"></img>
//                         </div>
//                         <div className="main-container-social-icon-discord">
//                             <img src={discord} alt="discord"></img>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="header-button">
//                     <button><a href="" target="_blank">Buy Token Arcomia</a></button>
//                 </div>
//             </header>
//             <div className="header-mobile">
//                 <div className="header-mobile-container-button">
//                     <div className="header-mobile-container-button-logo">
//                         <a href="" target="_blank"><img src={arcomia} alt="arcomia"/></a>
//                     </div>
//                     <div>
//                         <button className="header-mobile-container-button-2" >
//                             <img height="40px" src={burgerMenu}/>
//                         </button>
//                     </div>
//                 </div>
//
//                 {open ? <div className="main-container">
//                     <div className="mobil-max-width">
//                         <div className="header-mobile-container-button">
//                             <div className="header-mobile-container-button-logo">
//                                 <a href="" target="_blank"><img src={arcomia} alt="arcomia"/></a>
//                             </div>
//                             <div>
//                                 <button className="header-mobile-container-button-2"><img height="35px"
//                                                                                                           src={xIcon}/>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     <nav className="main-container-navbar">
//                         <ul>
//                             <li><Link to="/">Roadmap</Link></li>
//                             <li><Link to="/Team">Team</Link></li>
//                             <li><Link to="/">What's new</Link></li>
//                             <li><Link to="/Blog">Blog</Link></li>
//                             <li><Link to="/">Whitepaper</Link></li>
//                             <li><Link to="/">FAQ</Link></li>
//                         </ul>
//                     </nav>
//
//                 </div> : null}
//             </div>
//         </div>
//
//     );
// }
//
// export default Header;


import React from 'react';
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import twitter from "../../Components/Img/header/twitter.svg";
import discord from "../../Components/Img/header/discord.svg";
import arcomia from "../../Components/Img/header/arcomia.png";
import burgerMenu from "../../Components/Img/header/burgerMenu.svg"
import xIcon from "../../Components/Img/header/xIcon.svg"
import "./Header.scss";


function Header(props) {
    const [open, setOpen] = useState(false)

    function click() {
        setOpen(!open)
    }
    //
    // function clicMi() {
    //     navigation("/blog")
    // }
    //
    // function clich2() {
    //     navigation("/team")
    // }

    return (
        <div className="container-header-centre">
            <header className="header">
                <div className="header-logo">
                    <a href="" target="_blank"><img src={arcomia} alt="arcomia"/></a>
                </div>
                <nav className="header-nav">
                    <ul>
                         <li><a href="" target="_blank">Roadmap</a></li>
                         <li><Link to="/Team">Team</Link></li>
                         <li><a href="" target="_blank">What's new</a></li>
                         <li><Link to="/Blog">Blog</Link></li>
                         <li><a href="" target="_blank">Whitepaper</a></li>
                         <li><a href="" target="_blank">FAQ</a></li>
                    </ul>
                </nav>
                <div className="main-container-social">
                    <div className="main-container-social-icon">
                        <div>
                            <img src={twitter} alt="telegram"></img>
                        </div>
                        <div className="main-container-social-icon-discord">
                            <img src={discord} alt="discord"></img>
                        </div>
                    </div>
                </div>
                <div className="header-button">
                    <button><a href="" target="_blank">Buy Token Arcomia</a></button>
                </div>
            </header>
            <div className="header-mobile">
                <div className="header-mobile-container-button">
                    <div className="header-mobile-container-button-logo">
                        <a href="" target="_blank"><img src={arcomia} alt="arcomia"/></a>
                    </div>
                    <div>
                        <button className="header-mobile-container-button-2" onClick={click}>
                            <img height="40px" src={burgerMenu}/>
                        </button>
                    </div>
                </div>

                {open ? <div className="main-container">
                    <div className="mobil-max-width">
                        <div className="header-mobile-container-button">
                            <div className="header-mobile-container-button-logo">
                                <a href="" target="_blank"><img src={arcomia} alt="arcomia"/></a>
                            </div>
                            <div>
                                <button className="header-mobile-container-button-2" onClick={click}><img height="35px"
                                                                                                          src={xIcon}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <nav className="main-container-navbar">
                        <ul>
                            <li><a href="" target="_blank">Roadmap</a></li>
                            <li><Link to="/Team">Team</Link></li>
                            <li><a href="" target="_blank">What's new</a></li>
                            <li><Link to="/Blog">Blog</Link></li>
                            <li><a href="" target="_blank">Whitepaper</a></li>
                            <li><a href="" target="_blank">FAQ</a></li>
                        </ul>
                    </nav>

                </div> : null}
            </div>
        </div>

    );
}

export default Header;