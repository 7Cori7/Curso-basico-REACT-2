import { useEffect, useState } from 'react';
import './tictactoe.css';

// se puede hacer un componente dentro de otro componente...sin tener que exportarlo ni importarlo:
function Square({value, onClick}){

    return <button onClick={onClick} className='square'>{value}</button>
}

// 0 1 2
// 3 4 5
// 6 7 8

//* Componente principal:
export default function TicTacToe(){

    const [squares, setSquares] = useState(Array(9).fill('')); //<--un arreglo con los 9 espacios del board
    const [xTurn, setXturn] = useState(true);
    const [status, setStatus] = useState('');
    const [endGame, setEndGame] = useState(false);

    function handleClick(index){

        let copySquares = [...squares];

        if(getWinner(copySquares) || copySquares[index]) return; //<-- si ya el espacio está lleno o si hay un ganador retorna nada. Osea ya no se pueden cambiar los valores

        copySquares[index] = xTurn ? 'X' : 'O';

        setXturn(!xTurn);

        setSquares(copySquares);
    }

    function getWinner(squares){

        const winningPatterns = [
            [0,1,2], // horizontal
            [3,4,5], // horizontal
            [6,7,8], // horizontal
            [0,3,6], // vertical
            [1,4,7], // vertical
            [2,5,8], // vertical
            [0,4,8], // diagonal
            [2,4,6]  // diagonal
        ];

        for(let i = 0; i < winningPatterns.length; i++){

            const [x,y,z] = winningPatterns[i]; // <--este arreglo se refiere a las filas (3 elementos c/u)

            // comparación entre filas:
            if(squares[x] && squares[x] === squares[y] && squares[x] === squares[z]){

                return squares[x];
            }
        }

        return null;
    }

    function restart(){
        
        setSquares(squares.fill(''));
        setStatus(`Next player is ${xTurn ? 'X' : 'O'}`);
        setXturn(true);
        setEndGame(false);
    }

    useEffect(()=>{

        if(!getWinner(squares) && squares.every(i => i !== '')){ // Si es un empate:

            setStatus('is a draw!');
            setEndGame(true);

        }else if(getWinner(squares)){ // Si hay un ganador:

            setStatus(`The winner is ${getWinner(squares)}`)
            setEndGame(true);

        }else{ // Si todavía no acaba el juego:

            setStatus(`Next player is ${xTurn ? 'X' : 'O'}`);
        }

    }, [squares, xTurn]);
   
    console.log(squares)
    return <div className="tictactoe-body">

        <h1>Tic Tac Toe</h1>

        <div className='tictactoe-container'>
            <div className='row'>
                <Square value={squares[0]} onClick={()=>handleClick(0)} />
                <Square value={squares[1]} onClick={()=>handleClick(1)} />
                <Square value={squares[2]} onClick={()=>handleClick(2)} />
            </div>
            <div className='row'>
                <Square value={squares[3]} onClick={()=>handleClick(3)} />
                <Square value={squares[4]} onClick={()=>handleClick(4)} />
                <Square value={squares[5]} onClick={()=>handleClick(5)} />
            </div>
            <div className='row'>
                <Square value={squares[6]}  onClick={()=>handleClick(6)}/>
                <Square value={squares[7]}  onClick={()=>handleClick(7)}/>
                <Square value={squares[8]}  onClick={()=>handleClick(8)}/>
            </div>
        </div>
        <h2>{status}</h2>
        { endGame && <button onClick={restart} className='restart-btn'>Restart Game</button> }
    </div>
}