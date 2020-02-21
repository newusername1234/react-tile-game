import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square({ style }) {
    return (
        <div
            className="square" 
            style={style}
        />
    );
}
// add working reset button or add step back w/ redux
function DPad({onClick}) {
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
    
class Board extends React.Component {
    renderRow(x, y) {
        // console.log('board coords: ' + x + ', ' + y);
        // console.log('state coords: ' + this.props.xCoords + ', ' + this.props.yCoords);
        let myStyle;
        const myArr = [];   
        for (y; y < 11; y++) {
            switch(this.props.squares[x][y]) {
                case '':
                    myStyle = {backgroundColor: 'lightblue', border: '3px solid cornflowerblue'};
                    break;
                case 'X':
                    myStyle = {backgroundColor: 'grey', border: '3px solid black'};
                    break;
                case 'O':
                    x === this.props.yCoords && y === this.props.xCoords ? 
                        myStyle = {backgroundColor: 'yellow', border: '3px solid orange'} :
                        myStyle = {backgroundColor: 'rgb(224, 68, 68)', border: '3px solid rgb(151, 40, 40)'};
                    break;
                default:
                    break;
            }
            // this.props.squares[x][y] ? 
            //     myStyle = {backgroundColor: 'black'} :
            //     myStyle = {backgroundColor: 'white'};
                myArr.push(<Square key={y} style={myStyle}/>);
        }
        return myArr;
    }

    render() {
        const winCheck = calculateWinner(this.props.squares);
        // const loseCheck = calculateLoser(this.props.squares, this.props.xCoords, this.props.yCoords);
        return (
            <div>
                <div className="board-row">
                    {this.renderRow(0, 0)}
                </div>
                <div className="board-row">
                    {this.renderRow(1, 0)}
                </div>
                <div className="board-row">
                    {this.renderRow(2, 0)}
                </div>
                <div className="board-row">
                    {this.renderRow(3, 0)}
                </div>
                <div className="board-row">
                    {this.renderRow(4, 0)}
                </div>
                <div className="board-row">
                    {this.renderRow(5, 0)}
                </div>
                <div className="board-row">
                    {this.renderRow(6, 0)}
                </div>
                <div className="board-row">
                    {this.renderRow(7, 0)}
                </div>
                {winCheck && <h1>Winrar!</h1>}
                {/* {loseCheck && <h1>You suck at puzzles</h1>} */}
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [
                ['', 'X', 'X', '', '', 'O', '', '', '', '', ''],
                ['', '', '', '', '', 'X', '', '', '', 'X', ''],
                ['X', '', '', '', '', '', '', 'X', '', '', ''],
                ['', '', 'X', '', '', '', '', '', '', '', ''],
                ['', '', 'X', '', '', '', 'X', '', '', '', ''],
                ['X', '', '', '', 'X', '', '', '', '', '', 'X'],
                ['', '', '', '', '', '', '', '', 'X', '', ''],
                ['', '', '', '', '', '', 'X', '', '', '', '']
            ],
            xCoords: 5,
            yCoords: 0
        };
    }

    handleClick = (event) => {
        let squares = [...this.state.squares];
        let x = this.state.xCoords;
        let y = this.state.yCoords;

        switch(event.target.value) {
            case 'left':
                if (x > 0) {x -= 1};
                break;
            case 'right':
                if (x < squares[0].length - 1) {x += 1};
                break;
            case 'up':
                if (y > 0) {y -= 1};
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
            xCoords: x,
            yCoords: y
        }, () => console.table(this.state));
    }
    
    render() {
 
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={this.state.squares} xCoords={this.state.xCoords} yCoords={this.state.yCoords}/>
                    <DPad onClick={this.handleClick}/>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    for (let array of squares) {
        for (let item of array) {
            if (item === '') {
                return false;
            }
        }
    }
    return true;
}

// function calculateLoser(squares, x, y) {
//     if (squares[y + 1][x] && squares[y - 1][x] && squares[y][x + 1] && squares[y][x - 1]) {
//         return true;
//     }
//     return false;
// }

// ===============================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);