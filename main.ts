let Go = 0
let distance = 0
input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P2, 0)
    Go = 1
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P2, 90)
    Go = 1
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P2, 180)
    Go = 0
})
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (distance <= 20) {
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.showIcon(IconNames.No)
        servos.P2.stop()
    } else {
        pins.servoWritePin(AnalogPin.P2, 180)
        basic.showIcon(IconNames.Heart)
        servos.P2.stop()
    }
})
