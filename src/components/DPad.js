import React from 'react';

export default function DPad({onClick}) {
    return (
        <div id="dpad">
            <div id="top">
                <div className="empty"></div>
                <div id="up" onClick={onClick}>&#9651;</div>
                <div className="empty"></div>
            </div>
            <div id="mid">
                <div id="left" onClick={onClick}>&#9665;</div>
                <div id="center">&#9711;</div>
                <div id="right" onClick={onClick}>&#9655;</div>
            </div>
            <div id="bottom">
                <div className="empty"></div>
                <div id="down" onClick={onClick}>&#9661;</div>
                <div className="empty"></div>
            </div>
            {/* <button value="reset" onClick={onClick}>reset</button> */}
        </div>
    );
}