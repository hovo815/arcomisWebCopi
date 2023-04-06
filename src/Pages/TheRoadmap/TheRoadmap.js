import React from 'react';
import divider from "../../Components/Img/OpenWorld/divider.svg";
import "./TheRoadmap.scss";

function TheRoadmap(props) {
    return (
        <div className="container-roadmap">
            <div className="roadmap-max-width">
                <div className="container-roadmap-title">
                    <div className="container-roadmap-title-img">
                        <img src={divider} alt="divider"/>
                    </div>
                    <div className="container-roadmap-title-text">
                        <h2>THE
                            <span>Roadmap</span>
                        </h2>
                    </div>
                </div>
                <div className="container-roadmap-card">
                    <div className="container-roadmap-card-contant">
                        <div className="container-roadmap-card-contant-q">
                            <div className="container-roadmap-card-contant-q-left">
                                <div className="container-roadmap-card-contant-q-left-card">
                                    <div className="container-roadmap-card-contant-q-left-card-panel">
                                        <p>PHASE 01</p>
                                        <h3>Q1 - 2022</h3>
                                        <ul>
                                            <li>• Brainstorming and ideation</li>
                                            <li>• Research & idea screening</li>
                                            <li>• Create founding team and governance</li>
                                            <li>• Registeration web domain arcomia.io</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-roadmap-card-contant-q">
                            <div className="container-roadmap-card-contant-q-right"></div>
                        </div>
                    </div>
                     {/*<hr className="roadmap-hr"/>*/}
                    <div className="container-roadmap-card-contant">
                        <div className="container-roadmap-card-contant-q">
                            <div className="container-roadmap-card-contant-q-right"></div>
                        </div>
                        <div className="container-roadmap-card-contant-q">
                            <div className="container-roadmap-card-contant-q-left">
                                <div className="container-roadmap-card-contant-q-left-card">
                                    <div className="container-roadmap-card-contant-q-left-card-panel even">
                                        <p>PHASE 03</p>
                                        <h3>Q3-2022</h3>
                                        <ul>
                                            <li>• Ongoing Research &amp; Development</li>
                                            <li>• Creating Go-to-Market Strategy</li>
                                            <li>• Social Awareness</li>
                                            <li>• Proof of Concept (POC)</li>
                                            <li>• Promotional videos</li>
                                            <li>• Company registration (Ltd)</li>
                                            <li>• Designing &amp; Implementing Arcomia Avatars
                                                (Arcomians) &amp; Character Customization Module
                                            </li>
                                            <li>• Designing &amp; Implementing Arcomia Genesis Assets</li>
                                            <li>• Start Alpha Build Unreal Engine 5.0</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-roadmap-card-contant">
                        <div className="container-roadmap-card-contant-q">
                            <div className="container-roadmap-card-contant-q-left">
                                <div className="container-roadmap-card-contant-q-left-card">
                                    <div className="container-roadmap-card-contant-q-left-card-panel">
                                        <p>PHASE 05</p>
                                        <h3>Q1-2023</h3>
                                        <ul>
                                            <li>• Ongoing Research &amp; Development</li>
                                            <li>• Getting VCs onboard (Ongoing Private Sales)</li>
                                            <li>• User Chat Implementation</li>
                                            <li>• Finalizing Alpha Build #1</li>
                                            <li>• Testing Alpha Build #1 (internal)</li>
                                            <li>• Testing Alpha Build #1 (external)</li>
                                            <li>• Token Generation Event</li>
                                            <li>• Development Staking Mechanism RCM</li>
                                            <li>• NFT smart contract development</li>
                                            <li>• Creation &amp; Sale Genesis NFTs</li>
                                            <li>• Expansion partnerships</li>
                                            <li>• Ongoing Dev Diary Series</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-roadmap-card-contant-q">
                            <div className="container-roadmap-card-contant-q-right"></div>
                        </div>
                    </div>
                    <div className="container-roadmap-card-contant">
                        <div className="container-roadmap-card-contant-q">
                            <div className="container-roadmap-card-contant-q-right"></div>
                        </div>
                        <div className="container-roadmap-card-contant-q">
                            <div className="container-roadmap-card-contant-q-left">
                                <div className="container-roadmap-card-contant-q-left-card">
                                    <div className="container-roadmap-card-contant-q-left-card-panel even">
                                        <p>PHASE 07</p>
                                        <h3>Q3-2023</h3>
                                        <ul>
                                            <li>• Ongoing Research &amp; Development</li>
                                            <li>• Metamask Wallet Integration</li>
                                            <li>• Implementation Vertical Scaling</li>
                                            <li>• Finalizing Alpha Build #3</li>
                                            <li>• Testing Alpha Build #3 (internal)</li>
                                            <li>• Testing Alpha Build #3 (external)</li>
                                            <li>• NFT Land Sale</li>
                                            <li>• NFT Asset Sale</li>
                                            <li>• Implementation Arcomia DAO</li>
                                            <li>• Forge new partnerships with leading firms</li>
                                            <li>• Ongoing Dev Diary Serie</li>
                                            <li>• DEX &amp; CEX Listing(s)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-roadmap-card-contant">
                        <div className="container-roadmap-card-contant-q">
                            <div className="container-roadmap-card-contant-q-left">
                                <div className="container-roadmap-card-contant-q-left-card">
                                    <div className="container-roadmap-card-contant-q-left-card-panel">
                                        <p>PHASE 02</p>
                                        <h3>Q2-2022</h3>
                                        <ul>
                                            <li>• Creating the Arcomia brand</li>
                                            <li>• (Concept) Art &amp; Prototyping</li>
                                            <li>• Product &amp; Development Research for Arcomia Assets</li>
                                            <li>• Arcomia Map Development</li>
                                            <li>• Blockchain research</li>
                                            <li>• Initial Webdesign &amp; Implementation</li>
                                            <li>• Start Development Friend System</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-roadmap-card-contant-q">
                            <div className="container-roadmap-card-contant-q-right"></div>
                        </div>
                    </div>
                    <div className="container-roadmap-card-contant">
                        <div className="container-roadmap-card-contant-q">
                            <div className="container-roadmap-card-contant-q-right"></div>
                        </div>
                        <div className="container-roadmap-card-contant-q">
                            <div className="container-roadmap-card-contant-q-left">
                                <div className="container-roadmap-card-contant-q-left-card">
                                    <div className="container-roadmap-card-contant-q-left-card-panel even">
                                        <p>PHASE 04</p>
                                        <h3>Q4-2022</h3>
                                        <ul>
                                            <li>• Development of Legal Structure</li>
                                            <li>• Pre-Seed Round</li>
                                            <li>• Getting VCs onboard (Start Private Sales)</li>
                                            <li>• Ongoing Research &amp; Development</li>
                                            <li>• Start Dev Diary Series</li>
                                            <li>• Start Sneak Previews</li>
                                            <li>• Alpha Build Optimization</li>
                                            <li>• Multiplayer implementation</li>
                                            <li>• Minting NFT Landpasses</li>
                                            <li>• Building partnerships &amp; onboarding advisors</li>
                                            <li>• NFT Whitelist Signup</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-roadmap-card-contant">
                        <div className="container-roadmap-card-contant-q">
                            <div className="container-roadmap-card-contant-q-left">
                                <div className="container-roadmap-card-contant-q-left-card">
                                    <div className="container-roadmap-card-contant-q-left-card-panel">
                                        <p>PHASE 06</p>
                                        <h3>Q2-2023</h3>
                                        <ul>
                                            <li>• Ongoing Research &amp; Development</li>
                                            <li>• Added character interaction (sitting, dancing, jumping etc.)
                                            </li>
                                            <li>• Finalizing Alpha Build #2</li>
                                            <li>• Testing Alpha Build #2 (internal)</li>
                                            <li>• Testing Alpha Build #2 (external)</li>
                                            <li>• Start Development Vertical Scaling</li>
                                            <li>• RCM Staking Implementation</li>
                                            <li>• Expansion Development Team</li>
                                            <li>• NFT Land Sale</li>
                                            <li>• NFT Asset Sale</li>
                                            <li>• Start Research &amp; Development Arcomia DAO</li>
                                            <li>• Start Research &amp; Development Arcomia Marketplace</li>
                                            <li>• Ongoing Dev Diary Series</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-roadmap-card-contant-q">
                            <div className="container-roadmap-card-contant-q-right"></div>
                        </div>
                    </div>
                    <div className="container-roadmap-card-contant">

                        <div className="container-roadmap-card-contant-q">
                            <div className="container-roadmap-card-contant-q-right"></div>
                        </div>

                        <div className="container-roadmap-card-contant-q">
                            <div className="container-roadmap-card-contant-q-left">
                                <div className="container-roadmap-card-contant-q-left-card">
                                    <div className="container-roadmap-card-contant-q-left-card-panel even">
                                        <p>PHASE 08</p>
                                        <h3>Q4-2023</h3>
                                        <ul>
                                            <li>• Ongoing Research &amp; Development</li>
                                            <li>• Multiple Avatar Selection</li>
                                            <li>• Optimization &amp; integration across multiple devices (Windows
                                                / MacOS)
                                            </li>
                                            <li>• Game Optimization</li>
                                            <li>• Public Testing Alpha Build - The Open World</li>
                                            <li>• NFT Asset Sale</li>
                                            <li>• Expanding DEX &amp; CEX Listing(s)</li>
                                            <li>• User Voice Chat Implementation</li>
                                            <li>• Kick off mainstream marketing</li>
                                            <li>• Research &amp; Development Smart Contracts RCM Revenue
                                                Streams
                                            </li>
                                            <li className="uk-flex-middle">• Start Development Friend System</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
        ;
}

export default TheRoadmap;