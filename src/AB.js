import React from 'react';

export default function AB({onClick}) {
    return (
        <div className="ab">
            <button className="a" value="a">a</button>
            <button className="b" value="b" onClick={onClick}>b</button>
        </div>
    )
}