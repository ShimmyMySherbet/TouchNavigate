var dragStartX = 0
var dragStartY = 0

function initTouchNavigation() {
    document.body.addEventListener('touchstart', touchStart)
    document.body.addEventListener('touchend', touchEnd)
}

function touchStart(event) {
    dragStartX = event.changedTouches[0].clientX
    dragStartY = event.changedTouches[0].clientY
}

function touchEnd(event) {
    var endX = event.changedTouches[0].clientX

    // coordinate locations as a percentage of screen size
    var startXPercent = dragStartX / window.innerWidth
    var endXPercent = endX / window.innerWidth

    if (
        startXPercent <= 0.05 &&
        endXPercent > startXPercent &&
        endXPercent - startXPercent > 0.03
    ) {
        handleGoBack();
    } else if (
        startXPercent >= 0.95 &&
        endXPercent < startXPercent &&
        startXPercent - endXPercent > 0.03
    ) {
        handleGoForward();
    }
}

function handleGoForward() {
    history.forward();
}

function handleGoBack() {
    history.back()
}


initTouchNavigation();