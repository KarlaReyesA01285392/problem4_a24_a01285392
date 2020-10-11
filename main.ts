input.onGesture(Gesture.Shake, function () {
    for (let counter = 0; counter <= 15; counter++) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Surprised)
            basic.clearScreen()
            basic.pause(500)
        }
    }
})
let counter = 0
basic.forever(function () {
	
})
