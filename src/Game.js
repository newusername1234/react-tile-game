import React from 'react';
import Screen from './Screen';
import DPad from './DPad';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [
                ['X', 'X', 'X', 'X', 'X', 'X', 'O', 'X', 'X', 'X', 'X', 'X', 'X'],
                ['X', '', 'X', 'X', '', '', '', '', '', '', '', '', 'X'],
                ['X', '', '', '', '', '', 'X', '', '', '', 'X', '', 'X'],
                ['X', 'X', '', '', '', '', '', '', 'X', '', '', '', 'X'],
                ['X', '', '', 'X', '', '', '', '', '', '', '', '', 'X'],
                ['X', '', '', 'X', '', '', '', 'X', '', '', '', '', 'X'],
                ['X', 'X', '', '', '', 'X', '', '', '', '', '', 'X', 'X'],
                ['X', '', '', '', '', '', '', '', '', 'X', '', '', 'X'],
                ['X', '', '', '', '', '', '', 'X', '', '', '', '', 'X'],
                ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
            ],
            xCoord: 6,
            yCoord: 0
        };
    }

    handleClick = (event) => {
        let squares = [...this.state.squares];
        let x = this.state.xCoord;
        let y = this.state.yCoord;

        switch(event.target.value) {
            case 'left':
                if (x > 1) {x -= 1};
                break;
            case 'right':
                if (x < squares[0].length - 1) {x += 1};
                break;
            case 'up':
                if (y > 1) {y -= 1};
                break;
            case 'down':
                if (y < squares.length - 1) {y += 1};
                break;
            default:
                break;
        };

        if (squares[y][x]) {
            return;
        }

        squares[y][x] = 'O';

        this.setState({
            squares,
            xCoord: x,
            yCoord: y
        }, () => console.table(this.state));
    }
    
    render() {
 
        return (
            <div className="game">
                <div className="game-board">
                    <Screen squares={this.state.squares} xCoord={this.state.xCoord} yCoord={this.state.yCoord}/>
                    <DPad onClick={this.handleClick}/>
                </div>
            </div>
        );
    }
}