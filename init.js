const canvas = document.getElementById("miCanvas")
const ctx = canvas.getContext("2d")
const speeds = 2
const cars = []
let vida = 0
const frogger = {
    positionX:700,
    positionY:540,
    width:50,
    height:50,
    lives: 1,
}

const carTemplate = {
    positionX: -150,
    positionY: 470,
    width: 120,
    height: 60,
    color: "blue", 
}

function drawLives() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "#edf0f1";
    ctx.fillText("Lives: " + frogger.lives, canvas.width - 90, 23);
}

function drawFrogger() {
    ctx.fillStyle = "red"
    ctx.fillRect(frogger.positionX, frogger.positionY, frogger.width, frogger.height)
}

function moveCars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    cars.forEach((carMovement) => {
        carMovement.positionX += speeds
        ctx.fillStyle = carMovement.color
        ctx.fillRect(carMovement.positionX, carMovement.positionY, carMovement.width, carMovement.height)
    })
}
setInterval(() => {
    cars.push({ ...carTemplate})
}, 2500)

function colliding(frogger, cars) {
    const collition = cars.some(car => 
        frogger.positionX <= car.positionX + car.width &&  
        frogger.positionX + frogger.width >= car.positionX &&
        frogger.positionY <= car.positionY + car.height && 
        frogger.positionY + frogger.height >= car.positionY
    )
    frogger.lives =-1
    return collition

}



function drawGame (){

    if(colliding(frogger, cars)) {
    console.log("¡Rana atropellada!")
    cancelAnimationFrame(drawGame)  
    }else{
    moveCars()
    drawLives()
    drawFrogger()
    requestAnimationFrame(drawGame)
    }
}
drawGame ()

document.addEventListener("keydown", function(event) {
    if(event.key === "ArrowUp" && frogger.positionY - 60 >= 0) {
        frogger.positionY -= 60
    }

    if(event.key === "ArrowDown" && frogger.positionY + frogger.height + 60 <= canvas.height) {
        frogger.positionY += 60
    }

    if(event.key === "ArrowRight" && frogger.positionX + frogger.width + 60 <= canvas.width) {
        frogger.positionX += 60
    }

    if(event.key === "ArrowLeft" && frogger.positionX - 60 >= 0) {
        frogger.positionX -= 60
    }


})







