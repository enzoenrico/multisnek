import { update as snakeUpdate, draw as snakeDraw, snakeSpeed } from './snake.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('board')

function main(currentTime) {
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 0.5 / snakeSpeed) return


  lastRenderTime = currentTime

  update()
  draw()
}


function update() {
    snakeUpdate()
}
function draw() {
    gameBoard.innerHTML = ''
    snakeDraw(gameBoard)
}

window.requestAnimationFrame(main);