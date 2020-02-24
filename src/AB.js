import React from 'react';

export default function AB({onClick}) {
    return (
        <div>
            <button value="a">a</button>
            <button value="b" onClick={onClick}>b</button>
        </div>
    )
}