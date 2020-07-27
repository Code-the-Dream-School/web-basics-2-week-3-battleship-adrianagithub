const battleship = () => { 
  return 'The winner is...?'
}
  var player1 = {
  name : '',
  shipCount: 4,
  gameBoard: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
};
var player2 = {
  name : '',
  shipCount: 4,
  gameBoard: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
};
var x;
var y;
function getRandomNumber() {
  var valmin=0; 
  var valmax=4;  
  var num = Math.floor(Math.random() * (+valmax - +valmin)) + +valmin; 
  return num;
}
function createShip(player, ships) {
  let i = 0;
  do {
    const x = getRandomNumber();
    const y = getRandomNumber();
    if (player.gameBoard[x][y] !== 1) {
      player.gameBoard[x][y] = 1;
      i++;
    }
  } while (i < ships)
}
console.log("Player 1 " + JSON.stringify(player1.gameBoard));
console.log("Player 2 " + JSON.stringify(player2.gameBoard));
//Function to shot and count ships
function disparar(player,x,y){
  if (player.gameBoard[x][y] === 1){
    alert ("You hit your opponent has one less ship");
    player.gameBoard[x][y] = 0;
    player.shipCount -- ;
  }else{
    alert("Sorry you did not hit your opponent");
  }
  return player;
}
// Create a function to give turns to the Players
function turnos (currentplayer){//always starts with player1 by default
var winner
  do{
     if (currentplayer === player1) {
          var x= prompt("Player1 Introduce the coordenates x of your opponent ship", "0");
          var y = prompt("Player1 Introduce the coordenates y of your opponent ship", "0"); 
          player2 = disparar(player2,x,y);
          currentplayer = player2 //change turn to player2
       } else {
          var x = prompt ( "Player 2 Introduce the coordenates x of your opponent ship", "0");
          var y = prompt ( "Player 2 Introduce the coordenates y of your opponent ship", "0"); 
          player1 = disparar (player1,x,y);    
          currentplayer = player1; //change turn to player1       
        }
   } while (player2.shipCount > 0 && player1.shipCount > 0)
   //(player2.shipCount !== 0 && player1.shipCount !== 0)  
    if (player1.shipCount === 0){
      winner = player2.name;
    } else {
      winner = player1.name;
    } 
    //Checking the boards
//    console.log("Player 1 " + JSON.stringify(player1.gameBoard));
//    console.log("Player 2 " + JSON.stringify(player2.gameBoard));
//////Do until one of the ships of one side are sunk
return winner;
alert (`The winner of this game is ${winner}`);//winner
}//end function turnos
// Get names of my players
player1.name = prompt ('Welcome, what is your name?');
player2.name = prompt ('Welcome, what is your name?');
alert ("We will play the Battleship Game");
alert ("You will have one turn at the time");
// Generate the boards
createShip(player1, player1.shipCount);
console.log(player1.gameBoard);
createShip(player2, player2.shipCount);
console.log(player2.gameBoard);
alert (player1.gameBoard);
alert (player2.gameBoard);
const gameResult = turnos(player1);//Showing the winner in the screen
//const gameResult = battleship()
const htmlTarget = document.getElementById('result');
htmlTarget.innerHTML = gameResult;

