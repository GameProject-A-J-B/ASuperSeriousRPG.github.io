const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ground = new Image ();
ground.src = '../../tilesets/Cave.png'

const tileSize = 16;
const tileOutputSize = 1.5;
const updatedTileSize = tileSize * tileOutputSize;

const tileCol = 32;
const tileRow = 32;

const mapCols = 32;
const mapRows = 32;

const mapHeight = mapRows * tileSize;
const mapWidth = mapCols * tileSize;

const layerOneMap = [                                           
                   538, 285, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 
                   538, 285, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 318, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   538, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 285, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 452, 569, 569, 
                   569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 452, 452, 452, 452, 452, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 
                   569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 452, 452, 452, 452, 452, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569, 569
                  ]

let sourceX = 0;
let sourceY = 0;

function draw () {

   let mapIndex = 0;

    for (let col = 0; col < mapHeight; col += tileSize) {
       for (let row = 0; row < mapWidth; row += tileSize) {
          let tileVal = layerOneMap[mapIndex];
          if(tileVal !=0) {
             tileVal -= 1;
             sourceY = Math.floor(tileVal / tileCol) * tileSize;
             sourceX = (tileVal % tileCol) * tileSize;
             ctx.drawImage(ground, sourceX, sourceY, tileSize, tileSize, row * tileOutputSize, col * tileOutputSize, updatedTileSize, updatedTileSize);
          }
          mapIndex ++;
       }
    }
 }

 class Character {
   constructor(name, img, strength, health, x, y, sx, sy) {
       this.img = img;
       this.name = name,
       this.strength = strength,
       this.health = health,
       this.x = x,
       this.y = y,
       this.sx = sx,
       this.sy = sy
   }
 
   draw = () => {
       ctx.drawImage(this.img, this.sx, this.sy, 70, 65, this.x, this.y, canvas.width/ 13, canvas.height/ 13);
   }
 }

 class Dragon {
   constructor(name, img, strength, health, x, y, sx, sy) {
       this.img = img;
       this.name = name,
       this.strength = strength,
       this.health = health,
       this.x = x,
       this.y = y,
       this.sx = sx,
       this.sy = sy
   }
 
   draw = () => {
       ctx.drawImage(this.img, 70, 65, this.x, this.y);
   }
 }
 

// warrior image
let character = new Image();
character.src = "../../../images/warrior.png";

// dragin image
let dragon = new Image();
dragon.src = "../../emenies/Bone_Dragon.png";

// INSTANCES OF CLASSES
let newWarrior = new Character( 'Warrior', character, canvas.height / 2, 100 , canvas.width / 5.5, canvas.height / 1.45, 0, 0);

let defaultPos = 1011;
let currentPos = defaultPos;

function animate() {
   requestAnimationFrame(animate);
   // WATCH OUT FOR CLEAR
   ctx.clearRect(0,0,canvas.width, canvas.height)
   draw();
   console.log("animate");
   newWarrior.draw();
   ctx.drawImage(dragon, canvas.width / 7, canvas.height / 4, 250, 150)
}

window.onload = animate;

window.onkeydown = function (e) {
 
   console.log(e.key);
   // MOVEMENT OF THE MAIN CHARACTER
   if (e.key === "ArrowLeft") {
     if (layerOneMap[currentPos - 1] === 452) {
       newWarrior.x -= 23;
       currentPos -= 1;
     }
   }
   if (e.key === "ArrowRight") {
     if (layerOneMap[currentPos + 1] === 452) {
       newWarrior.x += 23;
       currentPos += 1;
     }
   }
   if (e.key === "ArrowUp") {
     if (layerOneMap[currentPos - 32] === 452) {
       newWarrior.y -= 23;
       currentPos -= 32;
     }   
   }
   if (e.key === "ArrowDown") {
     if (layerOneMap[currentPos + 32] === 452) {
       newWarrior.y += 23;
       currentPos += 32;
     }
   }
   console.log(currentPos)
   if (currentPos <= 512) {
      window.location.href = "../Boss Room/Boss.html";
   } 
};