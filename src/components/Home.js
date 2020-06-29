import React from 'react'
import AB from './AB';
import DPad from './DPad';
import Screen from './Screen';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>Welcome to the game page</h1>
            <Link to="/game/1">Go to game 1</Link>            
        </div>
    )
}
