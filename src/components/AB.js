import React from 'react';

export default function AB({onClick}) {
    return (
        <div className="ab">
            <button className="b" value="b" onClick={onClick}>B</button>
            <button className="a" value="a">A</button>
        </div>
    )
}