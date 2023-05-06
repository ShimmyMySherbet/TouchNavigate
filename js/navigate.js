var dragStartX = 0
var dragStartY = 0

function onTouchStart(event) {
    dragStartX = event.changedTouches[0].clientX
    dragStartY = event.changedTouches[0].clientY
}

function onTouchEnd(event) {
    var dragEndX = event.changedTouches[0].clientX

    // coordinate locations as a percentage of screen size
    var startXPercent = dragStartX / window.innerWidth
    var endXPercent = dragEndX / window.innerWidth

    // Tests if the drag coordinates are within back/forward bounds, and the distance is sufficient
    if (startXPercent <= 0.05 && endXPercent > startXPercent && endXPercent - startXPercent > 0.03) {
        history.back()
    } else if (startXPercent >= 0.95 && endXPercent < startXPercent && startXPercent - endXPercent > 0.03) {
        history.forward();
    }
}

document.body.addEventListener('touchstart', onTouchStart)
document.body.addEventListener('touchend', onTouchEnd)