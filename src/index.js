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

function DPad({onClick}) {
    return (
        <div className="dpad">
            <LeftButton onClick={onClick}/>
            <UpButton onClick={onClick}/>
            <RightButton onClick={onClick}/>
            <DownButton onClick={onClick}/>
        </div>
    );
}

function LeftButton({onClick}) {
    return (
        <button
            value="left"
            onClick={onClick}
        >left
        </button>
    );
}

function UpButton({onClick}) {
    return (
        <button
            value="up"
            onClick={onClick}
        >up
        </button>
    );
}

function RightButton({onClick}) {
    return (
        <button
            value="right"
            onClick={onClick}
        >right
        </button>
    );
}

function DownButton({onClick}) {
    return (
        <button
            value="down"
            onClick={onClick}
        >down
        </button>
    );
}
    
class Board extends React.Component {
    
    renderSquare(i, j) {
        let myStyle;
        this.props.squareState[i][j] ? 
            myStyle = {backgroundColor: 'black'} :
            myStyle = {backgroundColor: 'white'};
        return (
            <Square
                style={myStyle}
            />
        );
    }
            
    render() {
        const winCheck = calculateWinner(this.props.squareState);

        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0, 0)}
                    {this.renderSquare(0, 1)}
                    {this.renderSquare(0, 2)}
                    {this.renderSquare(0, 3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(1, 0)}
                    {this.renderSquare(1, 1)}
                    {this.renderSquare(1, 2)}
                    {this.renderSquare(1, 3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(2, 0)}
                    {this.renderSquare(2, 1)}
                    {this.renderSquare(2, 2)}
                    {this.renderSquare(2, 3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3, 0)}
                    {this.renderSquare(3, 1)}
                    {this.renderSquare(3, 2)}
                    {this.renderSquare(3, 3)}
                </div>
                {winCheck && <h1>You won!</h1>}
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: [
                ['filled', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
                ['', '', '', ''],
            ],
            xCoords: 0,
            yCoords: 0
        };
    }

    handleClick = (event) => {
        const squares = [...this.state.squares];
        let xCoords = this.state.xCoords;
        let yCoords = this.state.yCoords;

        switch(event.target.value) {
            case 'left':
                if (xCoords > 0) {xCoords -= 1};
                break;
            case 'right':
                if (xCoords < squares[0].length - 1) {xCoords += 1};
                break;
            case 'up':
                if (yCoords > 0) {yCoords -= 1};
                break;
            case 'down':
                if (yCoords < squares.length - 1) {yCoords += 1};
                break;
            default:
                break;
        };

        if (squares[yCoords][xCoords]) {
            return;
        }

        squares[yCoords][xCoords] = 'filled';


        // console.log(xCoords + ', ' + yCoords);
        this.setState({
            squares,
            xCoords,
            yCoords
        }, () => console.table(this.state));
    }
    
    render() {
 
        return (
            <div className="game">
                <div className="game-board">
                    <Board squareState={this.state.squares}/>
                    <DPad onClick={this.handleClick}/>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    for (let array of squares) {
        for (let item of array) {
            if (item !== 'filled') {
                return false;
            }
        }
    }
    return true;
}

// ===============================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);