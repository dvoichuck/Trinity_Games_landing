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



// $(function() {
//     $.scrollify({
//         section: ".allBlock",
//         sectionName:false,
//         scrollSpeed: 1100,
//         after: function(i) {
//                   if(i===2) {
//                       $.scrollify.setOptions({
//                           easing: "easeOutExpo"
//                       });
//                   }
//         }
//     });
//
//     $(".scroll,.scroll-btn").click(function(e) {
//         e.preventDefault();
//
//         $.scrollify.next();
//     });
//
//     var hasHovered = false;
//     $(".coffee").on("mouseenter focus", function() {
//         if (hasHovered === false) {
//             ga("send", "event", "Coffee", "hover", "Buy me a coffee");
//             hasHovered = true;
//         }
//     });
// });


//
$.scrollify({
    section : "section",
    sectionName : false,
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: false,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
});