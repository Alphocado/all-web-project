board = [
  ['','',''],
  ['','',''],
  ['','','']
]

// ganjil = x
// genap = o
let player = 0;
let winX = 0;
let winY = 0;
let tekan = 1;

const cells = document.getElementsByClassName('cell');
// var allNotEmpty = true;
// console.log(board[2][0]);

function ulang(){
  location.reload();
}

let players;
function choosePlayer(p){
  if(p == 'X'){
    player = 1;
    players = {
      'X': 'Player 1',
      'O': 'Player 2'
    }
  } else if(p == 'O'){
    player = 2;
    players = {
      'O': 'Player 1',
      'X': 'Player 2'
    }
  }
  let papan = document.getElementById('board').style
  papan.pointerEvents = 'all';
  papan.opacity = 1;


}

function move(boardPlace){
  // console.log(tekan);
  square = document.getElementById(boardPlace);
  boardPlaceSplit = boardPlace.split('-').map(Number);
  
  if(player % 2 == 1){
    slash = 'X';
  } else {
    slash = 'O';
  }
  if (board[boardPlaceSplit[0]-1][boardPlaceSplit[1]-1] == ''){
    square.innerHTML = slash;
    board[boardPlaceSplit[0]-1][boardPlaceSplit[1]-1] = slash;
  } else {
    player--;
    tekan--;
  }
  // console.log(board);
  kondisi = pemenang(slash);
  if(kondisi) champion(players[slash]);
  player++;
  tekan++;
  if(tekan == 10){
    champion("Seri")
  }
}

function champion(who){
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.pointerEvents = 'none';
  }
  document.querySelector('h1').innerHTML = "Pemenang: <br>" + who;
  document.getElementById('ulang').style.display = "inline";
}

function pemenang(PW){
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
      if(board[i][j] === PW && !(!board[i][j] && board[i][j] !== 0 && board[i][j] !== '')){

        winX++;
        if(winX == 3){
          return true;
        }
      } else {
        winX = 0;
      }
    }
    for(let k = 0; k < board[i].length; k++){
      if(board[k][i] === PW && !(!board[i][k] && board[i][k] !== 0 && board[i][k] !== '')){
        winY++;
        if(winY == 3){
          return true;
        }
      } else {
        winY = 0;
      }
    }
    winX = 0;
    winY = 0;

    // diagonal
    if(board[0][0] === PW && board[1][1] === PW && board[2][2] === PW){
      return true;
    } else if (board[0][2] === PW && board[1][1] === PW && board[2][0] === PW){
      return true;
    }
  }
}