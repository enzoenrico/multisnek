import { getInputDirection } from "./input.js"
export const snakeSpeed = 4 //speed per second


const snakeBody = [{ x: 11, y: 12 },
{ x: 11, y: 13 },
{ x: 11, y: 14 }
]

export function update() {
    console.log('update snake')
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    const inputDirection = getInputDirection()
    snakeBody[0].x += inputDirection.x 
    snakeBody[0].y += inputDirection.y 
}

export function draw(board) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        board.appendChild(snakeElement)
    })
}