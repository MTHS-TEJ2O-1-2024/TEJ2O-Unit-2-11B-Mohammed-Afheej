/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mohammed Afheej
 * Created on: Oct 2024
 * This program shows a random number from 0 to 99
*/

// defining randomNumber
let randomNumber1: number = 0
let randomNumber2: number = 0

// clearing screen and showing happy face
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// when button a is pressed
input.onButtonPressed(Button.A, function () {
    randomNumber1 = randint(0, 99)
    basic.clearScreen()
    basic.showString('#1: ' + randomNumber1)

    // clear screen and show happy face
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

// when button b is pressed
input.onButtonPressed(Button.B, function () {
    randomNumber2 = randint(0, 99)
    basic.clearScreen()
    basic.showString('#2: ' + randomNumber2)

    // clear screen and show happy face
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

input.onGesture(Gesture.Shake, function () {
    // clearing screen
    basic.clearScreen()

    // if randomNumber1 < randomNumber2
    if (randomNumber1 < randomNumber2) {
        basic.showString(randomNumber1 + "<" + randomNumber2)
    }
    // if randomNumber1 > randomNumber2
    else {
        basic.showString(randomNumber1 + ">" + randomNumber2)
    }

    // clearScreen and show happy face
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
