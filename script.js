setInterval(comet, 3000, "1")

setInterval(comet, 3500, "2")

setInterval(comet, 4000, "3")

function comet (arg) {
    let randomWidth = getRandomInt(window.innerWidth)
    let height = window.innerHeight
    let speed = 0
    if (randomWidth < window.innerWidth / 2) {
        speed = randomWidth * 2.5
    }
    else {
        speed = randomWidth
    }
    let comet = "#comet" + arg
    if (window.innerWidth / 10 * 8 < randomWidth) {
        randomWidth -= window.innerWidth / 15.0
    }
    if (randomWidth < height) {
        height = randomWidth;
        $(comet).css({display: 'block', top: 0, left: randomWidth, opacity: 0.8}).animate({top: height, left: 0, opacity: 0}, speed)
    }
    else {
        $(comet).css({display: 'block', top: 0, left: randomWidth, opacity: 1}).animate({top: window.innerHeight, left: randomWidth / 2 - window.innerWidth / 10, opacity: 0}, speed)
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

    $(function() {
    var sldr = $('.sldr'),
    sldrContent = sldr.html(),
    slideWidth = $('.sl_ctr').outerWidth(),
    slideCount = $('.sldr img').length,
    prv_b = $('.prv_b'),
    nxt_b = $('.nxt_b'),
    sldrInterval = 3300,
    animateTime = 1000,
    course = 1,
    margin = - slideWidth;
    $('.sldr img:last').clone().prependTo('.sldr');$('.sldr img').eq(1).clone().appendTo('.sldr');$('.sldr').css('margin-left',-slideWidth);function nxt_bSlide(){interval=window.setInterval(animate,sldrInterval)}function animate(){if(margin==-slideCount*slideWidth-slideWidth){sldr.css({'marginLeft':-slideWidth});margin=-slideWidth*2}else if(margin==0&&course==-1){sldr.css({'marginLeft':-slideWidth*slideCount});margin=-slideWidth*slideCount+slideWidth}else{margin=margin-slideWidth*(course)}sldr.animate({'marginLeft':margin},animateTime)}function sldrStop(){window.clearInterval(interval)}prv_b.click(function(){if(sldr.is(':animated')){return false}var course2=course;course=-1;animate();course=course2});nxt_b.click(function(){if(sldr.is(':animated')){return false}var course2=course;course=1;animate();course=course2});sldr.add(nxt_b).add(prv_b).hover(function(){sldrStop()},nxt_bSlide);nxt_bSlide()});