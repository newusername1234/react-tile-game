import React from 'react';
import Square from './Square';

export default class Screen extends React.Component {
    renderRow(x, y) {
        // console.log('board coords: ' + x + ', ' + y);
        // console.log('state coords: ' + this.props.xCoords + ', ' + this.props.yCoords);
        let myStyle;
        const myArr = [];   
        for (y; y < 13; y++) {
            switch(this.props.squares[x][y]) {
                case '':
                    myStyle = {backgroundColor: 'lightblue', border: '3px solid cornflowerblue'};
                    break;
                case 'X':
                    myStyle = {backgroundColor: 'grey', border: '3px solid black'};
                    break;
                case 'O':
                    x === this.props.yCoord && y === this.props.xCoord ? 
                        myStyle = {backgroundColor: 'yellow', border: '3px solid orange'} :
                        myStyle = {backgroundColor: 'rgb(224, 68, 68)', border: '3px solid rgb(151, 40, 40)'};
                    break;
                default:
                    break;
            }
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
                <div className="board-row">
                    {this.renderRow(8, 0)}
                </div>
                <div className="board-row">
                    {this.renderRow(9, 0)}
                </div>
                {winCheck && <h1>Winrar!</h1>}
                {/* {loseCheck && <h1>You suck at puzzles</h1>} */}
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