let $ = document;
let startBtn = $.querySelector(".start");
let scores = $.querySelector(".score");
let squares = $.querySelectorAll("div");
let snakeCurent = [3, 2, 1];
let appleCurent = null;
let way = +1;
let squareWidth = 10;
let map = document.querySelector(".map");
let score = 0;
scores.innerHTML = score;
let x = null;

// startgame

function indexSnake() {
  for (let i = 0; i < snakeCurent.length; i++) {
    x = snakeCurent[i];
    squares[x].classList.add("snake");
  }
}
function startGame() {
  startBtn.style.display = "none";
  snakeCurent = [3, 2, 1];
  appleCurent = null;
  way = +1;
  indexSnake();
  moveSquares();
  createApple();
}
function moveSquares() {
  let movePS = setInterval(() => {
    let headSnake = snakeCurent[0];
    let firstSquare = snakeCurent.pop();
    squares[firstSquare].classList.remove("snake");
    snakeCurent.unshift(headSnake + way);
    console.log(snakeCurent);
    indexSnake();

    if (headSnake == appleCurent) {
      score += 1;
      scores.innerHTML = score;
      squares[appleCurent].classList.remove("apple");
      snakeCurent.push(headSnake + way);
      createApple();
    }

    let ofsetLeftSquares = squares[10].offsetLeft - 5;
    console.log(ofsetLeftSquares);

    if (snakeCurent[0] + 10 >= 100) {
      clearInterval(movePS);
    } else if (snakeCurent[0] % 10 == 0) {
      clearInterval(movePS);
    } else if ((snakeCurent[0] - 1) % 10 == 0) {
      clearInterval(movePS);
    } else if (snakeCurent[0] - 10 < 0 && way === -10) {
      clearInterval(movePS);
    } else if (squares[snakeCurent[0] + way].classList.contains('snake')){
      clearInterval(movePS);
    }
  }, 1000);
}
function moveSnake(e) {
  switch (e.code) {
    case "KeyD":
      way = 1;
      break;
    case "KeyS":
      way = squareWidth;
      break;
    case "KeyA":
      way = -1;
      break;
    case "KeyW":
      way = -squareWidth;
      break;
  }
}

function createApple() {
  appleCurent = Math.floor(Math.random() * 100);
  squares[appleCurent].classList.add("apple");
}
window.addEventListener("keyup", moveSnake);
startBtn.addEventListener("click", startGame);
