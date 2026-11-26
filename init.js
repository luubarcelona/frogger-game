
const canvas = document.getElementById("miCanvas")
const ctx = canvas.getContext("2d")

// Tamaño del tablero
const tileSize = 110
const rows = 14
const columns = 14

let animationId

// Minero
const miner = {
    positionX: 15,
    positionY: 5,
    width: 70,
    height: 90,
    direction: "right",
    currentFrame: 0
}

// Imágenes del minero
const minerImages = {
    up: [new Image(), new Image()],
    down: [new Image(), new Image()],
    left: [new Image(), new Image()],
    right: [new Image(), new Image()]
}

// Cargar sprites
minerImages.up[0].src = "img/miner-up-1.png"
minerImages.up[1].src = "img/miner-up-2.png"

minerImages.down[0].src = "img/miner-down-1.png"
minerImages.down[1].src = "img/miner-down-2.png"

minerImages.left[0].src = "img/miner-left-1.png"
minerImages.left[1].src = "img/miner-left-2.png"

minerImages.right[0].src = "img/miner-right-1.png"
minerImages.right[1].src = "img/miner-right-2.png"


// Fondo de arena
function drawBackground() {
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            const x = column * tileSize
            const y = row * tileSize

            ctx.fillStyle = (row + column) % 2 === 0
                ? "#e9c58f"
                : "#c49866"

            ctx.fillRect(x, y, tileSize, tileSize)
        }
    }
}


// Dibujar minero
function drawMiner() {
    const images = minerImages[miner.direction]
    const image = images[miner.currentFrame]

    if (image.complete && image.naturalWidth > 0) {
        ctx.drawImage(
            image,
            miner.positionX,
            miner.positionY,
            miner.width,
            miner.height
        )
    }
}


// Dibujar juego
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawBackground()
    drawMiner()

    animationId = requestAnimationFrame(drawGame)
}


// Movimiento del minero
document.addEventListener("keydown", function(event) {
    if (event.repeat) return

    let moved = false

    if (event.key === "ArrowUp" && miner.positionY - tileSize >= 5) {
        miner.positionY -= tileSize
        miner.direction = "up"
        moved = true
    }

    if (event.key === "ArrowDown" && miner.positionY + tileSize + miner.height <= canvas.height - 5) {
        miner.positionY += tileSize
        miner.direction = "down"
        moved = true
    }

    if (event.key === "ArrowRight" && miner.positionX + tileSize + miner.width <= canvas.width - 15) {
        miner.positionX += tileSize
        miner.direction = "right"
        moved = true
    }

    if (event.key === "ArrowLeft" && miner.positionX - tileSize >= 15) {
        miner.positionX -= tileSize
        miner.direction = "left"
        moved = true
    }

    if (moved) {
        miner.currentFrame = miner.currentFrame === 0 ? 1 : 0
    }
})


// Iniciar juego
drawGame()
