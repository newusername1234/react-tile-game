import React from 'react';

export default function DPad({onClick}) {
    return (
        <div className="dpad">
            <button className="left" value="left" onClick={onClick}>left</button>
            <button className="right" value="right" onClick={onClick}>right</button>
            <button className="up" value="up" onClick={onClick}>up</button>
            <button className="down" value="down" onClick={onClick}>down</button>
            {/* <button value="reset" onClick={onClick}>reset</button> */}
        </div>
    );
}