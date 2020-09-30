import React from 'react'
import AB from './AB';
import DPad from './DPad';
import Screen from './Screen';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'lightgrey', borderRadius: 5, padding: 20}}>
            <p style={{textAlign: 'center', fontSize: 20}}>
                The objective is to turn all the blue tiles red by clicking the dpad and moving your yellow tile over them.<br />
                Grey tiles are obstacles and cannot be moved over.<br />
                You are not allowed to move over the same tile twice.<br />
                If you get stuck you can click the b button to go back a turn.
            </p>
            <div style={{backgroundColor: 'grey', border: '2px solid black', padding: '5px', borderRadius: 5}}>
                <Link style={{color: 'black'}} to="/game/1">Start!</Link>
            </div>
        </div>
    )
}
