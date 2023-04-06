import React from 'react';
import marketwatch from "../../Components/Img/CriptoCards/marketwatch.png";
import yahoofinance from "../../Components/Img/CriptoCards/yahoofinance.png";
import digitaljournal from "../../Components/Img/CriptoCards/digitaljournal.png";
import cryptonewsz from "../../Components/Img/CriptoCards/cryptonewsz.png";
import coingape from "../../Components/Img/CriptoCards/coingape.png";
import "./CriptoCards.scss";

function CriptoCards(props) {
    return (
        <div>
            <div className="container-centre">
                <div className="container-max-width">
                    <div className="criptoCards-logo">
                        <div className="criptoCards-logo-section">
                            <div className="criptoCards-logo-section-inline">
                                <img src={marketwatch} alt="marketwatch"></img>
                            </div>
                            <div className="criptoCards-logo-section-inline">
                                <img src={yahoofinance} alt="yahoofinance"></img>
                            </div>
                        </div>
                        <div className="criptoCards-logo-section">
                            <div className="criptoCards-logo-section-inline">
                                <img src={digitaljournal} alt="digitaljournal"></img>
                            </div>
                            <div className="criptoCards-logo-section-inline">
                                <img src={cryptonewsz} alt="cryptonewsz"></img>
                            </div>
                        </div>
                        <div className="criptoCards-logo-section-last">
                            <div className="criptoCards-logo-section-last-inline">
                                <img src={coingape} alt="coingape"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CriptoCards;