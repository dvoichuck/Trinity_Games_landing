
class diagonalFall {
    #width = window.innerWidth
    #height = window.innerHeight
    constructor(speed, time, position, div) {
        this.speed = speed
        this.time = time
        this.position = position
        this.div = div
    }
    getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    #getRandomTop() {
        this.position.top = getRandomInt(this.position.top)
    }
}










setInterval(comet, 3100, "1")

setInterval(comet, 3500, "2")

setInterval(comet, 4000, "3")



let height = window.innerHeight
let width = window.innerWidth
let speed = 0

function comet (arg) {
    let randomHeight = getRandomInt(height)
    let randomWidth = getRandomInt(width)
    let comet = "#comet" + arg
    if (window.innerWidth > window.innerHeight) {
    } else {
        speed = 3000
        console.log("randomHeight = " + randomHeight + " width = " + width + " height = " + height + " bottom = " + height + " - " + randomHeight)
        $(comet).css({display: 'block', top: randomHeight, right: 0, opacity: 1}).animate({
            top: width + randomHeight,
            right: width,
            opacity: 0
        }, speed)

    }
}

function cometTop(arg) {
    let randomHeight = getRandomInt(height)
    let randomWidth = getRandomInt(width)
    $(comet).css({display: 'block', top: 0, left: randomWidth, opacity: 0.8}).animate({
        top: randomWidth,
        left: 0,
        opacity: 0
    }, speed)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
