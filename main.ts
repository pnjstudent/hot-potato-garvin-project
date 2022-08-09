let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(5, 25)
    basic.showIcon(IconNames.Chessboard)
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.ForeverInBackground)
    while (timer > 0) {
        timer += -1
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.pause(1000)
    }
    music.stopAllSounds()
    basic.showIcon(IconNames.Ghost)
})
