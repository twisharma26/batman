class Raindrop {
    constructor(x, y) {
        var properties = {
            friction: 0.1,
            restitution: 0.1
        }
        this.body = Bodies.circle(x, y, 10, properties)
        this.radius = 10
        World.add(world, this.body)
    }

    update() {
        if (this.body.position.y > 800) {
            Matter.Body.setPosition(this.body, {x: random(0, 400), y: random(0, 400)})
        }
    }

    display() {
        var pos = this.body.position
        ellipseMode(CENTER)
        fill("blue")
        ellipse(pos.x, pos.y, this.radius, this.radius)
    }

    
}