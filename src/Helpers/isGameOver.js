function isGameOver(board){

    console.log("Game over hit")
    for(let i = 0; i < 9; i++){
        if(board[i] == "") return false;
    } 
    return true;
}

export default isGameOver;