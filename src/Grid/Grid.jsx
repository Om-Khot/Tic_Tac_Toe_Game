import { useState } from "react";
import Card from "../Cards/cards";
import './Grid.css';
import isWinner from '.././Helpers/isWinner'
import isGameOver from "../Helpers/isGameOver";
function Grid({noOfCards}){

    const [board, setBoard] = useState(Array(noOfCards).fill(""));
    const [turn, setTurn] = useState(true); // true -> O fslse ->X
    const [winner,setWinner] = useState(null);
    const [gameOver, setGameOver] = useState(null);

    function play(index){

        if(turn){
            board[index] = 'O';
        }
        else{
            board[index] = 'X';
        }
        
        let win = isWinner(board, turn ? "O" : "X");
        if(win){
            setWinner(win);
        }

        let over = isGameOver(board);
        if(over){
            setGameOver(over);
        }

        setBoard([...board]);
        setTurn(!turn);
    }
    
    function reset(){
        setBoard(Array(noOfCards).fill(""));
        setTurn(true);
        setWinner(null);
        setGameOver(null);
    }
    return(

        <div className="grid-wrapper">    
            {
                winner && (
                    <>
                        <h1>Winner is : {winner}</h1>
                        <button onClick={reset}>Reset Game</button>
                    </>                    
                )
            }
            {
                gameOver && (
                    <>
                        <h1>Game is over!</h1>
                        <button onClick={reset}>Reset Game</button>
                    </>                    
                )
            }
            {
                !gameOver && !winner && (
                    <>
                        <h1>Current Turn:   {turn ? "O" : "X"}</h1>
                        <div className="grid">            
                            {board.map((ele,idx)=> <Card key={idx} gameEnd={(winner || gameOver) ? true : false} onPlay={play} player={ele} index={idx}/>)}
                        </div>
                    </>
                )
            }
            
        </div>
    );
}

export default Grid;