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
//Function to shot and count ships
function disparar(player,x,y){
  if (player.gameBoard[x][y] === 1){
    console.log("estas disparando")
    console.log(player)
    //alert ("You hit your opponent has one less ship")
    player.gameBoard[x][y] = 0
    player.shipCount --
  }else{
    console.log ("lo siento no estas hundiendo barcos de tu oponente")
    //alert("Sorry you did not hit your opponent")
    console.log(player)
  }
  return player
}
// Create a function to give turns to the Players
function turnos (currentplayer){//always starts with player1 by default
var winner
  do{
     if (currentplayer === player1) {
          var x= prompt("Player1 Introduce the coordenates x of your opponent ship", "0");
          var y = prompt("Player1 Introduce the coordenates y of your opponent ship", "0"); 
          player2 = disparar(player2,x,y);//aqui es donde no entiendo bien
          console.log(player2.gameBoard);//aqui cuento numero de ships tambien
          //alert(`${player1.name} tiene ships${player1.shipCount}`);
          //pasar turno player2
          currentplayer = player2 //pasar turno a player2
          //if ((player1.shipCount !== 0) || (player2.shipCount !== 0)) {
          //  break
          //}
          console.log ('termino en if')         
           console.log (player2.name)
           console.log (player2.gameBoard)
           console.log (player2.shipCount)
           console.log (currentplayer)
       }
     else  {
        var x = prompt ( "Player 2 Introduce the coordenates x of your opponent ship", "0")
        var y = prompt ( "Player 2 Introduce the coordenates y of your opponent ship", "0") 
        player1 = disparar (player1,x,y)
        //alert (player1.gameBoard)    
        console.log(player1.shipCount)
        //alert (`${player2.name}tiene ships${player2.shipCount}`)
        //regresar turno a player1
        console.log('termino en else')
        currentplayer = player1 //pasar turno a player1
        // console.log (player1.name)
         console.log (player1.gameBoard)
         console.log (player1.shipCount)
         console.log (currentplayer)         
        }
   } while (player2.shipCount > 0 && player1.shipCount > 0)
   //(player2.shipCount !== 0 && player1.shipCount !== 0)  
    if (player1.shipCount === 0)
    {
      winner = player2.name;
      console.log(player2.name)
    }
    else {
      winner = player1.name;
      console.log(player1.name)
    } 
 
// //   //Do until one of the ships of one side are sunk
// // falta agregar winner en funcion del jugador que tenga shipCount!=0
//} while (player1.shipCount !== 0 || player2.shipCount !== 0)
//into
// } while (player1.shipCount !== 0 && player2.shipCount !== 0)
 return winner//winner
 }//end function turnos


// Get names of my players
player1.name = prompt ('Welcome, what is your name?')
player2.name = prompt ('Welcome, what is your name?')
alert ("We will play the Battleship Game")
alert ("You will have one turn at the time")
// Generate the boards
createShip(player1, player1.shipCount)
console.log(player1.gameBoard)
createShip(player2, player2.shipCount)
console.log(player2.gameBoard)
alert (player1.gameBoard)
alert (player2.gameBoard)

const gameResult = turnos(player1)

//const gameResult = battleship()
const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult

//} while (player1.shipCount !== 0 || player2.shipCount !== 0)
//into
// } while (player1.shipCount !== 0 && player2.shipCount !== 0)  

