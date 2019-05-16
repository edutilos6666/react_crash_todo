import React from 'react';
// import Chessboard from './Chessboard';

export default function ChessGame() {
    // return (
    //     // <Chessboard knightPosition={[7, 4]} />
    // );
}


// export function observe(receive) {
//     const randPos = () => Math.floor(Math.random()* 8);
//     setInterval(()=> receive([randPos(), randPos()]), 1000);
// }

let knightPosition = [1, 7];
let observer = null;

function emitChange() {
    observer(knightPosition)
}

export function observe(o) {
    if(observer) {
        throw new Error("Multiple observers not implemented.")
    }

    observer = o;
    emitChange();
}


export function moveKnight(toX, toY) {
    knightPosition = [toX, toY]
    emitChange()
}


export function canMoveKnight(toX, toY) {
    const  [x, y] = knightPosition
    const dx = toX - x
    const dy = toY - y
    return (
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2) 
    ) 
}