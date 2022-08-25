const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
size = 4
let y  = 60
let y2 = 60
let y3 = 60
let y4 = 60
let y5 = 300
let Imagex = 40
let Imagey = 25
let boundry = 500
let sizeIncurmits  = 20

const img = new Image();
function DrawImageDog() {
    ctx.imageSmoothingEnabled = false;
    img.onload = () => {
  ctx.drawImage(img, Imagex, Imagey, 50, 50);
    };
    img.src = 'dog.png';
  window.requestAnimationFrame(DrawImageDog);

}



// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
      if (event.code === "KeyC") {


    }
    // Alert the key name and key code on keydown
    if (event.code === "ArrowLeft") {
        Imagex = Imagex + -49
        ctx.clearRect(0, 0, canvas.width, canvas.height);

    }
    if (event.code === "ArrowRight") {
      Imagex = Imagex + 50.5
      ctx.clearRect(0, 0, canvas.width, canvas.height);

  }
  if (event.code === "ArrowDown") {
    Imagey = Imagey + 60
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}
if (event.code === "ArrowUp") {
  Imagey = Imagey + -59
  ctx.clearRect(0, 0, canvas.width, canvas.height);


}
  }, false);


function DrawGrid() {
  ctx.fillRect(20 + sizeIncurmits,25,size,size);
ctx.fillRect(70 +sizeIncurmits, 25,size,size);
ctx.fillRect(120 + sizeIncurmits,25,size,size);
ctx.fillRect(170 + sizeIncurmits,25,size,size);
ctx.fillRect(220 + sizeIncurmits,25,size,size);
ctx.fillRect(270 + sizeIncurmits,25,size,size);
ctx.fillRect(320 + sizeIncurmits,25,size,size);

ctx.fillRect(20 + sizeIncurmits,25 + y,size,size);
ctx.fillRect(70 +sizeIncurmits, 25 + y,size,size);
ctx.fillRect(70 +sizeIncurmits, 25 + y,size,size);
ctx.fillRect(120 + sizeIncurmits,25 + y,size,size);
ctx.fillRect(170 + sizeIncurmits,25 + y,size,size);
ctx.fillRect(170 + sizeIncurmits,25 + y,size,size);
ctx.fillRect(220 + sizeIncurmits,25 + y,size,size);
ctx.fillRect(270 + sizeIncurmits,25 + y,size,size);
ctx.fillRect(320 + sizeIncurmits,25 + y,size,size);

ctx.fillRect(20 + sizeIncurmits,25 + y + y2,size,size);
ctx.fillRect(70 +sizeIncurmits, 25 + y + y2,size,size);
ctx.fillRect(70 +sizeIncurmits, 25 + y + y2,size,size);
ctx.fillRect(120 + sizeIncurmits,25 + y+ y2,size,size);
ctx.fillRect(170 + sizeIncurmits,25 + y+ y2,size,size);
ctx.fillRect(170 + sizeIncurmits,25 + y+ y2,size,size);
ctx.fillRect(220 + sizeIncurmits,25 + y+ y2,size,size);
ctx.fillRect(270 + sizeIncurmits,25 + y+ y2,size,size);
ctx.fillRect(320 + sizeIncurmits,25 + y+ y2,size,size);


ctx.fillRect(20 + sizeIncurmits,25 + y + y2 + y3,size,size);
ctx.fillRect(70 +sizeIncurmits, 25 + y + y2 + y3,size,size);
ctx.fillRect(70 +sizeIncurmits, 25 + y + y2 + y3,size,size);
ctx.fillRect(120 + sizeIncurmits,25 + y+ y2 + y3,size,size);
ctx.fillRect(170 + sizeIncurmits,25 + y+ y2 + y3,size,size);
ctx.fillRect(170 + sizeIncurmits,25 + y+ y2 + y3,size,size);
ctx.fillRect(220 + sizeIncurmits,25 + y+ y2 + y3,size,size);
ctx.fillRect(270 + sizeIncurmits,25 + y+ y2 + y3,size,size);
ctx.fillRect(320 + sizeIncurmits,25 + y+ y2 + y3,size,size);


ctx.fillRect(20 + sizeIncurmits,25 + y + y2 + y3 + y4,size,size);
ctx.fillRect(70 +sizeIncurmits, 25 + y + y2 + y3 + y4,size,size);
ctx.fillRect(120 + sizeIncurmits,25 + y+ y2 + y3 + y4,size,size);
ctx.fillRect(170 + sizeIncurmits,25 + y+ y2 + y3 + y4,size,size);
ctx.fillRect(220 + sizeIncurmits,25 + y+ y2 + y3 + y4,size,size);
ctx.fillRect(270 + sizeIncurmits,25 + y+ y2 + y3 + y4,size,size);
ctx.fillRect(320 + sizeIncurmits,25 + y+ y2 + y3 + y4,size,size);


ctx.fillRect(20 + sizeIncurmits,25 + y5,size,size);
ctx.fillRect(70 +sizeIncurmits, 25 + y5,size,size);
ctx.fillRect(120 + sizeIncurmits,25 + y5,size,size);
ctx.fillRect(170 + sizeIncurmits,25 + y5,size,size);
ctx.fillRect(220 + sizeIncurmits,25 + y5,size,size);
ctx.fillRect(270 + sizeIncurmits,25 + y5,size,size);
ctx.fillRect(320 + sizeIncurmits,25 + y5,size,size);
window.requestAnimationFrame(DrawGrid);
}

function Start() {
  DrawImageDog();
  DrawGrid();

}

Start();