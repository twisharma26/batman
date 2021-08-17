class Umbrella {
    constructor(x, y) {
        var properties = {
            isStatic: true
        }
        this.image = loadImage("images/Walking Frame/walking_1.png")
        this.body = Bodies.circle(x, y, 50, properties)
        this.radius = 10
        World.add(world, this.body)
    }

    display() {
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, 500, 500)
    }
}