const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 50;
var raindrops = []
var rainMan, rand, fc, img1, img2, img3, img4, thunder;

function preload() {
    img1 = loadImage("images/thunderbolt/1.png")
    img2 = loadImage("images/thunderbolt/2.png")
    img3 = loadImage("images/thunderbolt/3.png")
    img4 = loadImage("images/thunderbolt/4.png")
}

function setup() {
   createCanvas(400, 800)
   engine = Engine.create(); 
   world = engine.world;

    if (frameCount % 200 === 0) {
        for (var i = 0; i<maxDrops; i++) {
            raindrops.push(new Raindrop(random(0, 400), random(0, 400)))
        }
    }

    rainMan = new Umbrella(200, 400)
   //testdrop = new Raindrop(100, 50)
}

function draw() {
    background(0)
    Engine.update(engine)
    
    rand = Math.round(random(1, 4));
    if(frameCount % 90 === 0) {
        fc = frameCount
        thunder = createSprite(random(10, 380), random(10, 30), 10, 10)
        switch(rand) {
            case 1: thunder.addImage(img1);
            break;
            case 2: thunder.addImage(img2);
            break;
            case 3: thunder.addImage(img3);
            break;
            case 4: thunder.addImage(img4);
            break;
            default: break;
        }
    }

    if (fc + 10 === frameCount && thunder) {
        thunder.destroy()
    } 

    rainMan.display()

    for (var i = 0; i<maxDrops; i++) {
        raindrops[i].display()
        raindrops[i].update()
       
    }
    drawSprites();
}   

