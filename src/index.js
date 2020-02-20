import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square({ style, onClick }) {
    return (
        <button 
        className="square" 
        onClick={onClick}
        style={style}
        />
        );
    }
    
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(16).fill({backgroundColor: 'white'}),
            currentSquare: null
        };
    }

    handleClick(i) {
        const squares = [...this.state.squares];
        const currentIndex = this.state.currentSquare;
        
        if (calculateWinner(squares) || squares[i].backgroundColor === 'black') {
            return;
        }

        // movement logic for currentSquare indices
        // really dumb but works
        // change this to not be stupid
    
        // [
        //     0,  1,  2,  3,
        //     4,  5,  6,  7,
        //     8,  9, 10, 11,
        //    12, 13, 14, 15
        // ]

        // [
        //     [0, 1, 2, 3],
        //     [0, 1, 2, 3],
        //     [0, 1, 2, 3],
        //     [0, 1, 2, 3]
        // ]

        // squares[0]: 1, 4
        // squares[1]: 0, 2, 5
        // squares[2]: 1, 3, 6
        // squares[3]: 2, 7
        // squares[4]: 0, 5, 8
        // squares[5]: 1, 4, 6, 9
        // squares[6]: 2, 5, 7, 10
        // squares[7]: 3, 6, 11
        // squares[8]: 4, 9, 12
        // squares[9]: 5, 8, 10, 13
        // squares[10]: 6, 9, 11, 14
        // squares[11]: 7, 10, 15
        // squares[12]: 8, 13
        // squares[13]: 9, 12, 14
        // squares[14]: 10, 13, 15
        // squares[15]: 11, 14
        
        switch(currentIndex) {
            case 0:
                if (i !== 1 && i !== 4) {return};
                break;
            case 1:
                if (i !== 0 && i !== 2 && i !== 5) {return};
                break;
            case 2:
                if (i !== 1 && i !== 3 && i !== 6) {return};
                break;
            case 3:
                if (i !== 2 && i !== 7) {return};
                break;
            case 4:
                if (i !== 0 && i !== 5 && i !== 8) {return};
                break;
            case 5:
                if (i !== 1 && i !== 4 && i !== 6 && i !== 9) {return};
                break;
            case 6:
                if (i !== 2 && i !== 5 && i !== 7 && i !== 10) {return};
                break;
            case 7:
                if (i !== 3 && i !== 6 && i !== 11) {return};
                break;
            case 8:
                if (i !== 4 && i !== 9 && i !== 12) {return};
                break;
            case 9:
                if (i !== 5 && i !== 8 && i !== 10 && i !== 13) {return};
                break;
            case 10:
                if (i !== 6 && i !== 9 && i !== 11 && i !== 14) {return};
                break;
            case 11:
                if (i !== 7 && i !== 10 && i !== 15) {return};
                break;
            case 12:
                if (i !== 8 && i !== 13) {return};
                break;
            case 13:
                if (i !== 9 && i !== 12 && i !== 14) {return};
                break;
            case 14:
                if (i !== 10 && i !== 13 && i !== 15) {return};
                break;
            case 15:
                if (i !== 11 && i !== 14) {return};
                break;
            default:
                break;
            }
                
            squares[i] = {backgroundColor: 'black'};
            this.setState({squares, currentSquare: i});

    }
    
    renderSquare(i) {
        let style = this.state.squares[i];
        if (i === 1 || i === 5 || i === 6 || i === 12 || i === 13) {
            style = {backgroundColor: 'black'};
        }

        return (
            <Square 
            style={style}
                onClick={() => this.handleClick(i)}
            />
            );
    }
    
    render() {
        const winCheck = calculateWinner(this.state.squares);
        console.log(this.state.currentSquare);
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                </div>
                <div className="board-row">
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                </div>
                <div className="board-row">
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                </div>
                {winCheck ? <h1>You won!</h1> : <h1>You haven't won!</h1>}
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const winCon = squares.filter(square => square.backgroundColor === 'black');
    if (winCon.length === 16) {
        return true;
    }
    return false;
}

// ===============================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);