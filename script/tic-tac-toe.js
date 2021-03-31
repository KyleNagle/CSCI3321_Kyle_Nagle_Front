var gameOver = false;
var currentPlayer = 'X';
var totalMove = 0;
var tie = false;
function placeMarker(spotID){
    
if(!gameOver){
var spot = document.getElementById(spotID);
    if(spot.innerHTML ==='X'||spot.innerHTML === 'O'){
}
        else{
       spot.innerHTML = currentPlayer;
       totalMove++;
       
     if(currentPlayer === 'X'){
          currentPlayer = 'O';
          currentPlayerWon();
          updateGameStatus();  
        }
    else{
     currentPlayer = 'X';  
     currentPlayerWon();
     updateGameStatus();  
    }
}
}
else{
}
}
function currentPlayerWon(){
    var s1 = document.getElementById('s1');
    var s2 = document.getElementById('s2');
    var s3 = document.getElementById('s3');
    var s4 = document.getElementById('s4');
    var s5 = document.getElementById('s5');
    var s6 = document.getElementById('s6');
    var s7 = document.getElementById('s7');
    var s8 = document.getElementById('s8');
    var s9 = document.getElementById('s9');

    if (s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML || 
        s4.innerHTML === s5.innerHTML && s5.innerHTML === s6.innerHTML ||
     s7.innerHTML === s8.innerHTML && s8.innerHTML === s9.innerHTML ||
     s1.innerHTML === s4.innerHTML && s4.innerHTML === s7.innerHTML ||
     s2.innerHTML === s5.innerHTML && s5.innerHTML === s8.innerHTML ||
     s3.innerHTML === s6.innerHTML && s6.innerHTML === s9.innerHTML ||
     s1.innerHTML === s5.innerHTML && s5.innerHTML === s9.innerHTML ||
     s3.innerHTML === s5.innerHTML && s5.innerHTML === s7.innerHTML){
         gameOver=true;
     }
    else{
        if(totalMove ==='9'){
            gameOver=false;
        }

    }
    return gameOver;
}


function updateGameStatus(){
var statusBoard = document.getElementById('status');
if(gameOver){
     if(!tie){
            if(currentPlayer ==='O'){
                statusBoard.innerHTML = `Player X wins!`;}
                else{
                    statusBoard.innerHTML = `Player O wins!`;
                }
        }
        else{
            statusBoard.innerHTML = `Tie!`;
        }

    }
    else{
        if(totalMove ==='9'){
            statusBoard.innerHTML = `Tie!`;
        }
        else{
        statusBoard.innerHTML = `Player ${currentPlayer}'s turn ${totalMove}`;
    }
    }
}
