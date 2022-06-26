let $ = document;
let startBtn = $.querySelector(".start");
let score = $.querySelector(".score");
let squares = $.querySelectorAll("div");
let snakeCurent = [1,2,3]
let appleCurent = null
let way = +1
let squareWidth =10
let map = document.querySelector('.map')
// startgame

function indexSnake() {
  let x = null
  for (let i = 0; i < snakeCurent.length; i++) {
    x = snakeCurent[i]
    squares[x].classList.add('snake');   
  }
}
function startGame() {
  startBtn.style.display = 'none'
  snakeCurent = [3,2,1]
  appleCurent = null
  way = +1
  indexSnake()
  moveSquares()
}
function moveSquares() {
  setInterval(() => {
    let firstSquare = snakeCurent.pop()
    squares[firstSquare].classList.remove('snake')
    snakeCurent.unshift(snakeCurent[0] + way)
    console.log(snakeCurent);
    indexSnake()
    if (snakeCurent[0] % 10 == 0 || snakeCurent[0] < 0) {
      map.style.display = 'none'
      
    }
  }, 1000);
}
function moveSnake(e) {
  
  switch (e.code) {
    case "KeyD":
      way = +1;
      moveSquares()
      break;
    case "KeyS":
      way = +squareWidth;
      break;
    case "KeyA":
      way = -1;
      break;
    case "KeyW":
      way = -squareWidth;
      break;
  }
}
window.addEventListener("keyup", moveSnake);
startBtn.addEventListener("click", startGame);
