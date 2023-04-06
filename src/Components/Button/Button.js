import React from 'react';
import "./Button.scss";
import arrowRightSolid from "../Img/OpenWorld/arrowRightSolid.svg";

function Button({text,src,width,widtha}) {
    return (
        <div>
            <div className="button1">
                    <button style={{width:`${width}`}}><a style={{width: `${widtha}`}} href=""  target="_blank">{text}</a></button>
                { src ? <a href="" target="_blank"><img height="23px" width="23px" src={src} alt="arrowRightSolid"></img></a>:null}
            </div>
        </div>
    );
}

export default Button;