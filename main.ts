/* Copyright (c) 2020 MTHS All rights reserved
*
* Created by: Mohammed Afheej
* Created on: Sep 2024
* This program shows random number between 0-99
*/

// defining randomNumber
let randomNumber1: number = 0
let randomNumber2: number = 0
randomNumber1 = randint(0, 99)
randomNumber2 = randint(0, 99)

// clearing screen and showing happy face
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// when button a is pressed
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString('#1 : ' + randomNumber1)

    // clear screen and show happy face
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

// when button b is pressed
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString('#2 : ' + randomNumber2)

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
