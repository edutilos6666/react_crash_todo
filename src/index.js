import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Chessboard from './components/chessboard/Chessboard';
import {observe} from './components/chessboard/ChessGame';
import Container from './components/dnd/Container';


// const ContainerWrapper =  DragDropContext(HTML5Backend)(Container)
const root = document.getElementById('root');
// observe(knightPosition => 
//     ReactDOM.render(<Chessboard knightPosition={knightPosition} />, root)
// );

ReactDOM.render(<Container />, root)