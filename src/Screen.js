import React from 'react';
import Square from './Square';

export default class Screen extends React.Component {
    renderRow(x, y) {
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
        this.props.winCheck(this.props.squares);
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
            </div>
        );
    }
}