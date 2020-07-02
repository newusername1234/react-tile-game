import React from 'react';

export default function DPad({onClick}) {
    return (
        <div className="noselect" id="dpad">
            <div id="top">
                <div className="empty"></div>
                <div id="up" onClick={onClick}>&#9650;</div>
                <div className="empty"></div>
            </div>
            <div id="mid">
                <div id="left" onClick={onClick}>&#9664;</div>
                <div id="center">&#9679;</div>
                <div id="right" onClick={onClick}>&#9654;</div>
            </div>
            <div id="bottom">
                <div className="empty"></div>
                <div id="down" onClick={onClick}>&#9660;</div>
                <div className="empty"></div>
            </div>
            {/* <button value="reset" onClick={onClick}>reset</button> */}
        </div>
    );
}