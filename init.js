const canvas = document.getElementById("miCanvas")
const ctx = canvas.getContext("2d")
const frogger = {
    positionX:700,
    positionY:540,
    width:50,
    height:50,
}

function drawFrogger() {
    ctx.fillStyle = "red"
    ctx.fillRect(frogger.positionX, frogger.positionY, frogger.width, frogger.height)
}

const speeds = 2
const cars = []
const logs = []

const logsTemplate = {
    positionX: 1630,
    positionY: 200,
    width: 150,
    height: 70,
    color: "red",

}

const carTemplate = {
    positionX: -150,
    positionY: 470,
    width: 120,
    height: 60,
    color: "blue", 
}

function colliding(frogger, cars) {
    const collition = cars.some(car => 
        frogger.positionX <= car.positionX + car.width &&  
        frogger.positionX + frogger.width >= car.positionX &&
        frogger.positionY <= car.positionY + car.height && 
        frogger.positionY + frogger.height >= car.positionY
    )
    return collition
}






setInterval(() => {
    cars.push({ ...carTemplate})
}, 2500);

setInterval(() => {
    logs.push({ ...logsTemplate })
}, 2500); 

function moveCars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    for (let i = 0; i < cars.length; i++) {
        cars[i].positionX += speeds

        ctx.fillRect(carMovement.positionX, carMovement.positionY, carMovement.width, carMovement.height)
    })
    drawFrogger()
    if (colliding(frogger, cars)) {
    console.log("¡Rana atropellada!");

    // aquí podrías reiniciar la rana o detener el juego
}
    requestAnimationFrame(moveCars)
}
moveCars()

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
