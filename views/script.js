document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.slider', {
        loop: true,
        autoplay: true,
        interval: 7000,
    });
});

$(function() {
    $.scrollify({
        section:".allBlock",
        sectionName:false,
        interstitialSection:"#firstBlock,#footer",
        scrollSpeed: window.innerHeight / 2,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
    });
});

