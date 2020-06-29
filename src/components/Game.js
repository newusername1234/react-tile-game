import React from 'react';
import Screen from './Screen';
import DPad from './DPad';
import AB from './AB';
// <

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
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
                    yCoord: 0,
                },
            ],
            hasWon: false
        };
    }

    winCheck = (squares) => {
        for (let array of squares) {
            for (let item of array) {
                if (item === '') {
                    return;
                }
            }
        }
        this.setState({
            hasWon: true
        });
    }

    goBack = () => {
        if (this.state.history.length > 1 && !this.state.hasWon) {
            this.setState({
                history: this.state.history.slice(0, this.state.history.length - 1)
            });
        }
        return;
    }

    move = (event) => {
        console.log(event.target.id);
        const history = this.state.history;
        const current = history[history.length - 1];
        let squares = current.squares.map(arr => [...arr]);
        let x = current.xCoord;
        let y = current.yCoord;

        switch(event.target.id) {
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
                history: [
                    ...history,
                    {
                        squares,
                        xCoord: x,
                        yCoord: y
                    }    
                ]
        }, () => console.table(this.state));
        this.winCheck(squares);
    }
    
    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        console.table(this.state);
        return (
            <div className="game">
                <div className="game-board">
                    <DPad onClick={this.move}/>
                    <Screen
                        className="screen"
                        squares={current.squares} 
                        xCoord={current.xCoord} 
                        yCoord={current.yCoord}
                    />
                    <AB onClick={this.goBack} />
                </div>
                {this.state.hasWon && <div style={{border: '1px solid black', backgroundColor: 'white', padding: 20, margin: 10}}>Winner</div>}
            </div>
        );
    }
}
