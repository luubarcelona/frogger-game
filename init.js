const canvas = document.getElementById("miCanvas")
const ctx = canvas.getContext("2d")
const frogger = {
    postionX:700,
    postionY:500,
    width:100,
    height:100, // CORREGIDO
}

function drawFrogger() {
    ctx.fillStyle = "green"
    ctx.fillRect(
        frogger.postionX,
        frogger.postionY, 
        frogger.width, 
        frogger.height
    )
}
drawFrogger()

document.addEventListener("keydown", function(event) {
  if(event.key === "ArrowUp") {
       if(frogger.postionY - 100 >= 0){
        frogger.postionY -= 100
    }
       ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawFrogger()
  }
})

document.addEventListener("keydown", function(event) {
  if(event.key === "ArrowDown") {
       if(frogger.postionY + 200 <= 600){ // ajusté a 100 para coincidir con el movimiento
        frogger.postionY += 100
    }
       ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawFrogger()
  }
})


