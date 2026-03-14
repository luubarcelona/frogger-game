const canvas = document.getElementById("miCanvas")
const ctx = canvas.getContext("2d")
const speeds = 2
const cars = []
let animationId


const frogger = {
    positionX:700,
    positionY:550,
    width:50,
    height:30,
    lives: 3,
    direction: "up"
}


const carTemplate = {
    positionX: -150,
    positionY: 470,
    width: 120,
    height: 60,
    image: null,
}



const background = new Image()
background.src = "img/background.png"


const frogImages = {
    up: new Image(),
    down: new Image(),
    left: new Image(),
    right: new Image()
}
frogImages.up.src = "img/frogger-up.png"
frogImages.down.src = "img/frogger-down.png"
frogImages.left.src = "img/frogger-left.png"
frogImages.right.src = "img/frogger-right.png"


const carImages = {
    car1: new Image(),
    car2: new Image(),
    car3: new Image(),
    car4: new Image(),
    car5: new Image()
}
carImages.car1.src = "car/carOne.png"
carImages.car2.src = "car/carTwo.png"
carImages.car3.src = "car/carThree.png"
carImages.car4.src = "car/carFour.png"
carImages.car5.src = "car/carFive.png"



const winImage = new Image()
winImage.src = "img/you-win.png"

function showWinner() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
        winImage,
        canvas.width / 2 - 200,
        canvas.height / 2 - 150,
        400,
        350
    )
}

const gameOverImg = new Image()
gameOverImg.src = "img/game-over.png"

function showGameOver() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.drawImage(
        gameOverImg,
        canvas.width / 2 - 150,
        canvas.height / 2 - 150,
        400,
        350
    )
}




function drawLives() {
  ctx.font = "25px VT323"
    ctx.fillStyle = "#ffffff"
   ctx.fillText(`SCORE: ${frogger.lives}`, canvas.width - 120, 25);
}

function drawFrogger() {
    const image = frogImages[frogger.direction]
    if(image.complete){
        ctx.drawImage(
            image,
            frogger.positionX,
            frogger.positionY,
            frogger.width,
            frogger.height
        )
    }

}



function moveCars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if(background.complete){
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    }

    cars.forEach((carMovement) => {
        carMovement.positionX += carMovement.speed
        if(carMovement.image.complete){
            ctx.drawImage(
                carMovement.image,
                carMovement.positionX,
                carMovement.positionY,
                carMovement.width,
                carMovement.height
            )
        }
    })
}

setInterval(() => {
 cars.push({ ...carTemplate, positionY: 90, speed: 4, positionX: -150, image: carImages.car1})
}, 1200)

setInterval(() => {
 cars.push({ ...carTemplate, positionY: 190, speed: -3, positionX: canvas.width, image: carImages.car2 })
}, 1300)

setInterval(() => {
 cars.push({ ...carTemplate, positionY: 280, speed: 4, positionX: -150, image: carImages.car3 })
}, 1200)

setInterval(() => {
 cars.push({ ...carTemplate, positionY: 380, speed: -5, positionX: canvas.width, image: carImages.car4 })
}, 1000)

setInterval(() => {
 cars.push({ ...carTemplate, positionY: 490, speed: 3, positionX: -150, image: carImages.car5 })
}, 1300)


function colliding(frogger, cars) {
    
    const collition = cars.some(car => 
        frogger.positionX < car.positionX + car.width &&  
        frogger.positionX + frogger.width > car.positionX &&
        frogger.positionY < car.positionY + car.height && 
        frogger.positionY + frogger.height > car.positionY
    )

return collition
}



function drawGame() {

    if(frogger.positionY <= 10){
        cancelAnimationFrame(animationId)
        showWinner()
        return
    }

    if(colliding(frogger, cars)) {
        frogger.lives--
        console.log("¡Rana atropellada! Vidas restantes:", frogger.lives)
        frogger.positionX = 700
        frogger.positionY = 600
       
        if(frogger.lives === 0){
            moveCars()
            drawLives()   
            drawFrogger()
            cancelAnimationFrame(animationId)
            showGameOver()
            return
        }
    }
    moveCars()
    drawLives()
    drawFrogger()

    animationId = requestAnimationFrame(drawGame)
}
drawGame()








let froggerCanMove = false
setTimeout(() => {
    froggerCanMove = true
}, 4000)



document.addEventListener("keydown", function(event) {
    if (!froggerCanMove) return

    if(event.key === "ArrowUp" && frogger.positionY - 50 >= 0) {
        frogger.positionY -= 50;
        frogger.direction = "up"
    }
    if(event.key === "ArrowDown" && frogger.positionY + frogger.height +  50 <= canvas.height) {
        frogger.positionY += 50;
        frogger.direction = "down"
    }
    if(event.key === "ArrowRight" && frogger.positionX + frogger.width + 20 <= canvas.width) {
        frogger.positionX += 50;
        frogger.direction = "right"
    }
    if(event.key === "ArrowLeft" && frogger.positionX -  50 >= 0) {
        frogger.positionX -= 50;
        frogger.direction = "left"
    }
})