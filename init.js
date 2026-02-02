
const canvas = document.getElementById("miCanvas")
const ctx = canvas.getContext("2d")
    const frogger = {
        postionX:700,
        postionY:500,
        width:100,
        heigth:100,
}

function drawFrogger() {
    ctx.fillStyle = "green"
     ctx.fillRect(
        frogger.postionX,
        frogger.postionY, 
        frogger.width, 
        frogger.heigth
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