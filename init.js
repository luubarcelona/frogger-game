const canvas = document.getElementById("miCanvas")
const ctx = canvas.getContext("2d")
const frogger = {
    positionX:700,
    positionY:500,
    width:80,
    height:80,
    death:false,
}

function drawFrogger() {
    ctx.fillStyle = "green"
    ctx.fillRect(frogger.positionX, frogger.positionY, frogger.width, frogger.height)
}

const speeds = 2
const cars = []


const carTemplate = {
    positionX: -150,
    positionY: 400,
    width: 150,
    height: 70,
    color: "blue", 
}

setInterval(() => {
    cars.push({ ...carTemplate})
}, 2500);


function moveCars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    cars.forEach((carMovement) => {
        carMovement.positionX += speeds
        ctx.fillStyle = carMovement.color

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





function colliding(frogger, cars) {
    const collition = cars.some(car => 
        // retornamos true si hay choque
        frogger.positionX <= car.positionX + car.width &&  
        frogger.positionX + frogger.width >= car.positionX &&
        frogger.positionY <= car.positionY + car.height && 
        frogger.positionY + frogger.height >= car.positionY
    );

    if (collition) {
        frogger.death = true;
    }

    return collition;
}


document.addEventListener("keydown", function(event) {
  if(event.key === "ArrowUp" && frogger.positionY - 100 >= 0) {
      frogger.positionY -= 100
  }

  if(event.key === "ArrowDown" && frogger.positionY + frogger.height + 100 <= canvas.height) {
      frogger.positionY += 100
  }

  if(event.key === "ArrowRight" && frogger.positionX + frogger.width + 100 <= canvas.width) {
      frogger.positionX += 100
  }

  if(event.key === "ArrowLeft" && frogger.positionX - 100 >= 0) {
      frogger.positionX -= 100
  }


})







