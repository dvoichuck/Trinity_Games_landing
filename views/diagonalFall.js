
class diagonalFall {
    size = {width: window.innerWidth, height: window.innerHeight}
    count_elem = 1
    elem;
    position


    getRandomPositionTop() {
        this.position.top = Math.floor(Math.random() * this.size.height);
    }

    getRandomPositionLeft() {
        this.position.left = Math.floor(Math.random() * this.size.width);
    }

    createNewElem(parent_id, elem_id, count_elem) {
        this.count_elem = count_elem
        document.getElementById(elem_id).id = `${elem_id}0`
        let parent = document.getElementById(parent_id);
        let elem = parent.querySelector(`#${elem_id}0`);
        let elem_arr = [elem.id]
        console.log(elem_arr)
        for (let i = 1; i <= this.count_elem; i++) {
            let clone = elem.cloneNode(true);
            console.log(clone)
            clone.id = `${elem_id}${i}`
            parent.appendChild(clone);
            elem_arr.push(clone.id)
        }
        this.elem = elem_arr
    }



    settingElem(elem, count_elem, parent_id, size, speed, position) {
        if (elem) {
            if (count_elem) {
                this.createNewElem(parent_id, elem, count_elem)
            }

            if (size) {
                this.size = size
            }

            if (position.top) {
                this.position.top = position.top
            }
            else {
                this.getRandomPositionTop()
            }
            if (position.left) {
                this.position.left = position.left
            }
            else {
                this.getRandomPositionLeft()
            }

            if (speed) {
                this.speed = speed
            }
            else {
                this.#getSpeed()
            }
        }

    }

    #getSpeed() {
        this.speed = (this.position.left + 1000) / 2
    }

    diagonalFall() {
        $(this.elem).css({display: 'block', top: this.position.top, left: this.position.left, opacity: 1}).animate({
            top: this.position.top + this.position.left,
            left: 0,
            opacity: 0
        }, this.speed)
    }

}

let comet = new diagonalFall()

comet.createNewElem('mainBlock', 'comet', 3)



// setInterval(comet, 3100, "1")
//
// setInterval(comet, 3500, "2")
//
// setInterval(comet, 4000, "3")
//
//
//
// let height = window.innerHeight
// let width = window.innerWidth
// let speed = 0
//
// function comet (arg) {
//     let randomHeight = getRandomInt(height)
//     let randomWidth = getRandomInt(width)
//     let comet = "#comet" + arg
//     if (window.innerWidth > window.innerHeight) {
//     } else {
//         speed = 3000
//         console.log("randomHeight = " + randomHeight + " width = " + width + " height = " + height + " bottom = " + height + " - " + randomHeight)
// c
//
//     }
// }
//
// function cometTop(arg) {
//     let randomHeight = getRandomInt(height)
//     let randomWidth = getRandomInt(width)
//     $(comet).css({display: 'block', top: 0, left: randomWidth, opacity: 0.8}).animate({
//         top: randomWidth,
//         left: 0,
//         opacity: 0
//     }, speed)
// }
//
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
