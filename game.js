window.onload = () => {
    const gameOverScreen = document.getElementById("gameOverScreen");
    gameOverScreen.style.display = "none"; // Oculta a tela no carregamento
};

const canvas = document.getElementById("snakeGame");
const context = canvas.getContext("2d");
const box = 20;
let snake = [{ x: 9 * box, y: 9 * box }];
let direction = "right";
let food = { x: Math.floor(Math.random() * 15) * box, y: Math.floor(Math.random() * 15) * box };

document.addEventListener("keydown", updateDirection);

function updateDirection(event) {
    if (event.key === "ArrowUp" && direction !== "down") direction = "up";
    if (event.key === "ArrowDown" && direction !== "up") direction = "down";
    if (event.key === "ArrowLeft" && direction !== "right") direction = "left";
    if (event.key === "ArrowRight" && direction !== "left") direction = "right";
}

function drawGame() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Fundo
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Cobra
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = "lime";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }

    // Comida
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction === "right") snakeX += box;
    if (direction === "left") snakeX -= box;
    if (direction === "up") snakeY -= box;
    if (direction === "down") snakeY += box;

    if (snakeX === food.x && snakeY === food.y) {
        food = { x: Math.floor(Math.random() * 15) * box, y: Math.floor(Math.random() * 15) * box };
    } else {
        snake.pop();
    }

    const newHead = { x: snakeX, y: snakeY };

    if (snakeX < 0 || snakeY < 0 || snakeX >= canvas.width || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(game);
        showGameOver();
    }

    snake.unshift(newHead);
}

function showGameOver() {
    const gameOverScreen = document.getElementById("gameOverScreen");
    gameOverScreen.style.display = "flex"; // Mostra a tela ao perder
}




function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

const game = setInterval(drawGame, 100);
