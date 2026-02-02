const canvas = document.getElementById("miCanvas")
const ctx = canvas.getContext("2d")
const frogger = {
    positionX:700,
    positionY:500,
    width:80,
    height:80,
    }

function drawFrogger() {
    ctx.fillStyle = "green"
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
    color: "yellow",

}

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

setInterval(() => {
    logs.push({ ...logsTemplate })
}, 2500); 

function moveCars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    for (let i = 0; i < cars.length; i++) {
        cars[i].positionX += speeds

        if (cars[i].positionX  > canvas.width) {
            cars.splice(i, 1)
            i--
            continue
        }

        ctx.fillStyle = cars[i].color
        ctx.fillRect(cars[i].positionX, cars[i].positionY, cars[i].width, cars[i].height)
    }

    for (let i = 0; i < logs.length; i++) {
        logs[i].positionX -= speeds

        if (logs[i].positionX + logs[i].width < 0) {
            logs.splice(i, 1)
            i--
            continue
        }
        ctx.fillStyle = logs[i].color
        ctx.fillRect(logs[i].positionX, logs[i].positionY, logs[i].width, logs[i].height)
    }
drawFrogger()    
    requestAnimationFrame(moveCars)
}
moveCars()

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