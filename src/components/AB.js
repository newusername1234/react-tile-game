import React from 'react';

export default function AB({onClick}) {
    return (
        <div className="ab">
            <button className="b" value="b" onClick={onClick}>b</button>
            <button className="a" value="a">a</button>
        </div>
    )
}