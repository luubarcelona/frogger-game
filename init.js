

const canvas = document.getElementById("miCanvas")
const ctx = canvas.getContext("2d")

const speeds = 2;

// Coche 1
const car = {
positionX: 0,
positionY: 400,
width: 150,
height: 70,
color:"red"
}

// Coche 2
const tractor = {
positionX: car.positionX + 330,
positionY: 400,
width: 150,
height: 70,
color:"blue"
}
// Coche 3

const bus = {
positionX: tractor.positionX + 330,
positionY: 400,
width: 150,
height: 70,
color:"magenta"
}

// Coche 4
const scrooter = {
positionX: bus.positionX + 330,
positionY: 400,
width: 150,
height: 70,
color:"red"
}

// Coche 5
const truck = {
positionX: scrooter.positionX + 330,
positionY: 400,
width: 150,
height: 70,
color:"purple"
}



// Rana
const frogger = {
    positionX:700,
    positionY:500,
    width:80,
    height:80
}

function drawFrogger() {
    ctx.fillStyle = "green";
    ctx.fillRect(frogger.positionX, frogger.positionY, frogger.width, frogger.height);
}

function moveCars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Coche 1
    car.positionX += speeds;
    if (car.positionX > canvas.width) {
        car.positionX = -car.width;
    }
    ctx.fillStyle = car.color;
    ctx.fillRect(car.positionX, car.positionY, car.width, car.height);

    // Coche 2
    tractor.positionX += speeds;
    if (tractor.positionX > canvas.width) {
        tractor.positionX = -tractor.width;
    }
    ctx.fillStyle = tractor.color;
    ctx.fillRect(tractor.positionX, tractor.positionY, tractor.width, tractor.height);

    // Coche 3
    bus.positionX += speeds;
    if (bus.positionX > canvas.width) {
        bus.positionX = -bus.width;
    }
    ctx.fillStyle = bus.color;
    ctx.fillRect(bus.positionX, bus.positionY, bus.width, bus.height);

    // Coche 4
    scrooter.positionX += speeds;
    if (scrooter.positionX > canvas.width) {
        scrooter.positionX = -scrooter.width;
    }
    ctx.fillStyle = scrooter.color;
    ctx.fillRect(scrooter.positionX, scrooter.positionY, scrooter.width, scrooter.height);

    // Coche 5
    truck.positionX += speeds;
    if (truck.positionX > canvas.width) {
        truck.positionX = -truck.width;
    }
    ctx.fillStyle = truck.color;
    ctx.fillRect(truck.positionX, truck.positionY, truck.width, truck.height);

    drawFrogger();
    requestAnimationFrame(moveCars);
}

moveCars();
document.addEventListener("keydown", function(event) {
  if(event.key === "ArrowUp" && frogger.positionY - 100 >= 0) {
      frogger.positionY -= 100;
  }

  if(event.key === "ArrowDown" && frogger.positionY + frogger.height + 100 <= canvas.height) {
      frogger.positionY += 100;
  }

  if(event.key === "ArrowRight" && frogger.positionX + frogger.width + 100 <= canvas.width) {
      frogger.positionX += 100;
  }

  if(event.key === "ArrowLeft" && frogger.positionX - 100 >= 0) {
      frogger.positionX -= 100;
  }

})