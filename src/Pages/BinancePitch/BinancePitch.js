import React from 'react';
import {Link} from "react-router-dom";
import svgviewer from "../../Components/Img/BinancePitch/svgviewer.svg";
import bnbchainevent from "../../Components/Img/blog/bnbchainevent.jpeg";
import imageFlying from "../../Components/Img/blog/imageFlying.png";
import blogheader from "../../Components/Img/blog/blogheader.png";
import twitter from "../../Components/Img/blog/twitter.png";
import facebook from "../../Components/Img/blog/facebook.png";
import email from "../../Components/Img/blog/email.png";
import eduardbw from "../../Components/Img/blog/eduardbw.png";
import letter from "../../Components/Img/blog/letter.png";
import divider from "../../Components/Img/BinancePitch/divider.svg";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import "./BinancePitch.scss";

function BinancePitch({card1, card2, card3, card4}) {
    return (
        <div>
            <Header/>
            <div className="container-binancePitch">
                <div className="container-binancePitch-max-width">
                    <div className="container-binancePitch-max-width-text">
                        <div className="binancePitch-centre">
                            <p className="container-binancePitch-max-width-text-navigate">
                                <div><img src={svgviewer} alt="svgviewer"/></div>
                                <Link to="/blog" style={{color:"white", textDecoration:"none"}}>
                                Back to
                                previous page
                                </Link>
                            </p>
                        </div>
                        <p className="container-binancePitch-max-width-text-data">Announcements<span>7 Dec 2022</span>
                        </p>
                        <h2 className="container-binancePitch-max-width-text-title">Binance Pitch Event</h2>
                        <h2 className="container-binancePitch-max-width-text-title">NYC</h2>
                    </div>
                    {card1 ? <div className="container-binancePitch-max-width-card1">
                        <img src={bnbchainevent} alt="bnbchainevent"/>
                        <div className="container-binancePitch-max-width-card1-text">
                            <p>Last week were selected to pitch at BNB Chain Innovation Pitch Day NYC 3th of December.
                                Therefore
                                part of our team flew over from Amsterdam to present our metaverse to the East Coast.
                                The event contained 45 investors, 10 media outlets and the BNB Labs team. It was such a
                                humbling
                                and meaningful experience and we have spoken with amazing other builders in the field
                                that
                                will
                                pave the way forward when it comes to developing the future of Web3.
                                Thank you BNB Chain for selecting us and giving us this amazing opportunity 🎉 </p>
                        </div>
                    </div> : null}

                    {card2 ? <div className="container-binancePitch-max-width-card1">
                        <img src={imageFlying} alt="bnbchainevent"/>
                        <div className="container-binancePitch-max-width-card1-text">
                                <p>A new development diary is now available on YouTube. We cover the
                                    vertical approach of our open world, land plot sizes and our Jollywagon NFT, which
                                    is
                                    our
                                    first
                                    flying mount.🎉
                                    <div className="card2-video">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/oC-CeKECnq4"
                                                title="YouTube video player" frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
                                    </div></p>

                        </div>
                    </div> : null}

                    {card3 ? <div className="container-binancePitch-max-width-card1">
                        <img src={blogheader} alt="bnbchainevent"/>
                        <div className="container-binancePitch-max-width-card1-text">
                            <p>This week, we had an important meeting with our executive committee to discuss the
                                context
                                and
                                instability of the market. We have been hoping for a return of the bull run until the
                                last
                                minute.

                                After consulting with our advisors, partners and launchpads with whom we discussed the
                                listing
                                in parallel with the DEX, it seems smarter to postpone our public sale until further
                                notice
                                hoping for a more suitable and flourishing market where people love to invest in new
                                projects.

                                For many macro-economic reasons (Quantitative Easing, central bank rates, monetary
                                inflation,
                                massive adoption, institutional investment, etc) we absolutely believe that crypto and
                                in
                                particular the metaverse is here to stay. But for now, the market is recharging and
                                contracting.
                                It is therefore better to let this period pass. You can be sure that we base our
                                decisions
                                exclusively on the interests of the project and thereby of all our investors.

                                We do need to stay in line with current launchpad/dex requirements, and to keep the pace
                                of
                                ongoing development there are changes needed:

                                Tokenomics

                                The IDO landscape and more particularly, the way many projects tokenomics have matured
                                in
                                the
                                last years needs an overhaul. Trust has been disrupted by the general public and more
                                strict
                                rules around tokenomics are now required. We will be raising more funds through private
                                rounds
                                with strict vesting schedules rather than public sales. This way we can continue
                                development
                                whilst not being reliant on public market sentiment. Our new tokenomics increase trust,
                                stability and transparency. Something our partners and the public are looking for. To
                                make
                                sure
                                our current investors, who were expecting different tokenomics don’t feel duped, we will
                                find
                                ways to compensate.

                                NFT sales instead of token sales

                                We have decided to postpone any public token sale due to market sentiment until further
                                notice.
                                To keep our team and the community engaged and excited about Arcomia, we will organize
                                smaller
                                NFT sales. This way we want to give our first fellows the opportunity to reserve the
                                most
                                awesome NFT items without being forced to wait for our future token sale. The dates for
                                our
                                NFT
                                sales will be announced shortly.

                                More motivated than ever

                                Up until this point we have been working on this project for 2+ years now and want the
                                best
                                for
                                its token launch. Nobody wants to see the price of the token decrease just after launch.
                                Our
                                aims and our incentive are the same as before and we keep building no matter what.
                                Arcomia
                                is
                                one of the rarest Metaverse projects with the largest amount of interesting features and
                                potential. You won’t find anything equivalent and we are glad to have you around. Again,
                                we
                                base
                                the above decisions exclusively on the interests of the project and thereby of all our
                                investors.

                                Development progress

                                To keep our investors and community involved with development progress, we have started
                                development diaries. Our first development diary is already online and can be seen on
                                our
                                youtube channel. Furthermore sneak previews are constantly being posted in our discord
                                server as
                                well as our social media channels:

                                {/*Discord: https://discord.gg/Ssts6ZD43G*/}

                                {/*Youtube: https://www.youtube.com/channel/UC3lmnNE8q-hKtxUaUkx6qOw*/}

                                {/*Twitter: https://twitter.com/officialarcomia*/}

                                Thank you for bearing with us. If you have any questions, don’t hesitate to contact our
                                team
                                through discord or mail.

                                Much love,

                                Arcomia Team 🎉 </p>
                        </div>
                    </div> : null}

                    {card4 ? <div className="container-binancePitch-max-width-card1">
                        <img src={blogheader} alt="bnbchainevent"/>
                        <div className="container-binancePitch-max-width-card1-text">
                            <p>This week, we had an important meeting with our executive committee to discuss the
                                context
                                and
                                instability of the market. We have been hoping for a return of the bull run until the
                                last
                                minute.
                                After consulting with our advisors, partners and launchpads with whom we discussed the
                                listing
                                in parallel with the DEX, it seems smarter to postpone our public sale until further
                                notice
                                hoping for a more suitable and flourishing market where people love to invest in new
                                projects.
                                For many macro-economic reasons (Quantitative Easing, central bank rates, monetary
                                inflation,
                                massive adoption, institutional investment, etc) we absolutely believe that crypto and
                                in
                                particular the metaverse is here to stay. But for now, the market is recharging and
                                contracting.
                                It is therefore better to let this period pass. You can be sure that we base our
                                decisions
                                exclusively on the interests of the project and thereby of all our investors.
                                We do need to stay in line with current launchpad/dex requirements, and to keep the pace
                                of
                                ongoing development there are changes needed:
                                Tokenomics
                                The IDO landscape and more particularly, the way many projects tokenomics have matured
                                in
                                the
                                last years needs an overhaul. Trust has been disrupted by the general public and more
                                strict
                                rules around tokenomics are now required. We will be raising more funds through private
                                rounds
                                with strict vesting schedules rather than public sales. This way we can continue
                                development
                                whilst not being reliant on public market sentiment. Our new tokenomics increase trust,
                                stability and transparency. Something our partners and the public are looking for. To
                                make
                                sure
                                our current investors, who were expecting different tokenomics don’t feel duped, we will
                                find
                                ways to compensate.
                                NFT sales instead of token sales
                                We have decided to postpone any public token sale due to market sentiment until further
                                notice.
                                To keep our team and the community engaged and excited about Arcomia, we will organize
                                smaller
                                NFT sales. This way we want to give our first fellows the opportunity to reserve the
                                most
                                awesome NFT items without being forced to wait for our future token sale. The dates for
                                our
                                NFT
                                sales will be announced shortly.
                                More motivated than ever
                                Up until this point we have been working on this project for 2+ years now and want the
                                best
                                for
                                its token launch. Nobody wants to see the price of the token decrease just after launch.
                                Our
                                aims and our incentive are the same as before and we keep building no matter what.
                                Arcomia
                                is
                                one of the rarest Metaverse projects with the largest amount of interesting features and
                                potential. You won’t find anything equivalent and we are glad to have you around. Again,
                                we
                                base
                                the above decisions exclusively on the interests of the project and thereby of all our
                                investors.
                                Development progress
                                To keep our investors and community involved with development progress, we have started
                                development diaries. Our first development diary is already online and can be seen on
                                our
                                youtube channel. Furthermore sneak previews are constantly being posted in our discord
                                server as
                                well as our social media channels:
                                {/*Discord: https://discord.gg/Ssts6ZD43G*/}
                                {/*Youtube: https://www.youtube.com/channel/UC3lmnNE8q-hKtxUaUkx6qOw*/}
                                {/*Twitter: https://twitter.com/officialarcomia*/}
                                Thank you for bearing with us. If you have any questions, don’t hesitate to contact our
                                team
                                through discord or mail.
                                Much love,
                                Arcomia Team 🎉 </p>
                        </div>
                    </div> : null}
                    <div className="container-binancePitch-max-width-data">
                        <div className="binancePitch-width">
                            <div className="container-binancePitch-max-width-data-center">
                                <p className="container-binancePitch-max-width-data-center-type">#Announcements</p>
                                <div className="container-binancePitch-max-width-data-center-icon">
                                    <div className="container-binancePitch-max-width-data-center-icon-img"><img
                                        src={facebook} alt="facebook"/></div>
                                    <div className="container-binancePitch-max-width-data-center-icon-img"><img
                                        src={twitter} alt="twitter"/></div>
                                    <div className="container-binancePitch-max-width-data-center-icon-img-email"><img
                                        src={email} alt="email"/></div>
                                </div>
                            </div>
                            <div className="container-binancePitch-max-width-data-avter">
                                <div className="container-binancePitch-max-width-data-avter-width">
                                    <div className="container-binancePitch-max-width-data-avter-width-user">
                                        <div className="container-binancePitch-max-width-data-avter-width-user-logo">
                                            <img src={eduardbw} alt="eduardbw"/>
                                        </div>
                                        <div className="container-binancePitch-max-width-data-avter-width-user-name">
                                            <p>Eduard Driessen</p>
                                            <p>COO</p>
                                        </div>
                                    </div>
                                    <div className="container-binancePitch-max-width-data-avter-width-img">
                                        <img src={letter} alt="letter"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-binancePitch-max-width-img">
                        <img src={divider} alt=""/>
                    </div>
                </div>
            </div>
            <Footer noneimg/>
        </div>
    );
}

export default BinancePitch;