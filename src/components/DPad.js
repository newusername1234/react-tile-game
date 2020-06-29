import React from 'react';

export default function DPad({onClick}) {
    return (
        <div className="dpad">
            <div className="top">
                <div className="empty"></div>
                <button className="up" value="up" onClick={onClick}>&#9651;</button>
                <div className="empty"></div>
            </div>
            <div className="mid">
                <button className="left" value="left" onClick={onClick}>&#9665;</button>
                <div className="center">&#9711;</div>
                <button className="right" value="right" onClick={onClick}>&#9655;</button>
            </div>
            <div className="bottom">
                <div className="empty"></div>
                <button className="down" value="down" onClick={onClick}>&#9661;</button>
                <div className="empty"></div>
            </div>
            {/* <button value="reset" onClick={onClick}>reset</button> */}
        </div>
    );
}