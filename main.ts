radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Duck)
    iAmDuck = true
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("DUCK")
    if (iAmDuck) {
        iAmDuck = false
        basic.clearScreen()
    }
})
let iAmDuck = false
basic.clearScreen()
radio.setGroup(1)
iAmDuck = false
