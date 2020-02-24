import React from 'react';
import Screen from './Screen';
import DPad from './DPad';
import AB from './AB';

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
                    yCoord: 0
                },
            ]
        };
    }

    goBack = () => {
        if (this.state.history.length > 1) {
            this.setState({
                history: this.state.history.slice(0, this.state.history.length - 1)
            });
        }
        return;
    }

    handleClick = (event) => {
        // let squares = [[...this.state.squares[0]], [...this.state.squares[1]], [...this.state.squares[2]], [...this.state.squares[3]], [...this.state.squares[4]], [...this.state.squares[5]], [...this.state.squares[6]], [...this.state.squares[7]], [...this.state.squares[8]], [...this.state.squares[9]]];
        const history = this.state.history;
        const current = history[history.length - 1];
        let squares = current.squares.map(arr => arr.slice());
        console.log(squares);
        let x = current.xCoord;
        let y = current.yCoord;

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
                history: [
                    ...history,
                    {
                        squares,
                        xCoord: x,
                        yCoord: y
                    }    
                ]
        }, () => console.table(this.state));
    }
    
    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        console.table(history);
        console.table(current);
        return (
            <div className="game">
                <div className="game-board">
                    <Screen squares={current.squares} xCoord={current.xCoord} yCoord={current.yCoord}/>
                    <DPad onClick={this.handleClick}/>
                    <AB onClick={this.goBack} />
                </div>
            </div>
        );
    }
}