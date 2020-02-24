import React from 'react';

export default function DPad({onClick}) {
    return (
        <div className="dpad">
            <button value="left" onClick={onClick}>left</button>
            <button value="right" onClick={onClick}>right</button>
            <button value="up" onClick={onClick}>up</button>
            <button value="down" onClick={onClick}>down</button>
            {/* <button value="reset" onClick={onClick}>reset</button> */}
        </div>
    );
}