radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Duck)
    iAmDuck = 1
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("DUCK")
    if (iAmDuck) {
        iAmDuck = 0
        basic.clearScreen()
    }
})
let iAmDuck = 0
radio.setGroup(23)
iAmDuck = 0
basic.forever(function () {
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    if (iAmDuck) {
        basic.showLeds(`
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.pause(5000)
})
