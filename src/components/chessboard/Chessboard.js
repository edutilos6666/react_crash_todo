import React from 'react';
import Knight from './Knight';
import BoardSquare from './BoardSquare';
import { moveKnight, canMoveKnight } from './ChessGame';
import  {DragDropContextProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

export default function Chessboard({knightPosition}) {
    const squares = [];
    for(let i = 0; i < 64; ++i) {
        squares.push(renderSquare(i, knightPosition));
    }
    console.log(squares);
    return (
        <DragDropContextProvider backend={HTML5Backend}>
            <div
                style= {{
                    width: '500px',
                    height: '500px', 
                    display: 'flex', 
                    flexWrap: 'wrap'
                }}
            >
                {squares}
            </div>
        </DragDropContextProvider>
    );
}

function renderSquare(i, knightPosition) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%'}}>
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, knightPosition)}
            </BoardSquare>
        </div>
    );
}


// const squareTagret = {
//     drop(props, monitor) {
//         moveKnight(props.x, props.y)
//     }
// }

function handleSquareClick(toX, toY)  {
    if(canMoveKnight(toX, toY)) 
        moveKnight(toX, toY);
}

function renderPiece(x,y, [knightX, knightY]) {
    if(x === knightX && y === knightY) 
        return <Knight />
}