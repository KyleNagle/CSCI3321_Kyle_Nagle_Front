var gameOver = false;
var currentPlayer = 'X';
var totalMove = 0;
function placeMarker(spotID){
if(!gameOver){
var spot = document.getElementById(spotID);
    //if(spot ==!'X'||spot==!'O'){
        spot.innerHTML = 'X';
      //  }

// if(currentPlayerWon()){
//     updateGamestatus()}
//   else {
//    spot.innerHTML = currentPlayer;
//  totalMove++
//     if(currentPlayer === 'X'){
//          currentPlayer = 'O';}
    //else{
    // currentPlayer = 'X'    
    //}
// else, do nothing
    }
}


function currentPlayerWon(){
    var s1 = document.getElementById('1');
    var s2 = document.getElementById('2');
    var s3 = document.getElementById('3');
    var s4 = document.getElementById('4');
    var s5 = document.getElementById('5');
    var s6 = document.getElementById('6');
    var s7 = document.getElementById('7');
    var s8 = document.getElementById('8');
    var s9 = document.getElementById('9');

    if (s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML || 
        s4.innerHTML === s5.innerHTML && s5.innerHTML === s6.innerHTML ||
     s7.innerHTML === s8.innerHTML && s8.innerHTML === s9.innerHTML ||
     s1.innerHTML === s4.innerHTML && s4.innerHTML === s7.innerHTML ||
     s2.innerHTML === s5.innerHTML && s5.innerHTML === s8.innerHTML ||
     s3.innerHTML === s6.innerHTML && s6.innerHTML === s9.innerHTML ||
     s1.innerHTML === s5.innerHTML && s5.innerHTML === s9.innerHTML ||
     s3.innerHTML === s5.innerHTML && s5.innerHTML === s3.innerHTML){
         gameOver=true;
     }
    
    // 
    //else {gameOver = false}
    // if(!gameOver){
    // We need to check for tie. 
    // check the counter : totalMove ===9 then tie  
    // if it's a tie then gameOver = true
    //}
    return gameOver;
}


function updateGameStatus(){
var statusBoard = document.getElementById('status');
//if(gameOver){
// some message  
//}
//else{
//   if not a tie prompt user to make a move
// else display message   
//}

}
