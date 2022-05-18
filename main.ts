scene.setBackgroundColor(11)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . e e e e e e . . . . . .
    . . . e e e e e e . e . . . . .
    . . . e e d d d e e e e . . . .
    . . . e e d d d d d e e e . . .
    . . . e e 8 d d 8 d d e e . . .
    . . . e d d e d d d . . e . . .
    . . e e d d d d d d . . e . . .
    . . e e . d e e d . . . . . . .
    . . . . . d d d d . . . . . . .
    . . . . . . d d . . . . . . . .
    . . . . a a a a a a . . . . . .
    . . . a a a a a a a a . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
let pizza = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . e e e e . . . . . . .
    . . . . e 5 5 2 5 e . . . . . .
    . . . e 5 5 2 2 2 5 e . . . . .
    . . e 5 7 5 2 2 7 5 7 e . . . .
    . d 5 5 2 5 5 5 5 2 5 5 e . . .
    . . 5 2 2 5 5 5 7 2 2 5 d . . .
    . . 5 5 2 5 7 5 2 2 2 d . . . .
    . . . 5 5 7 5 5 5 2 5 . . . . .
    . . . . 5 5 2 2 2 5 . . . . . .
    . . . . . 7 2 2 2 5 . . . . . .
    . . . . . 5 5 7 5 5 . . . . . .
    . . . . . . 5 5 2 . . . . . . .
    . . . . . . . 7 5 . . . . . . .
    . . . . . . . 5 5 . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Food)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(1)
    otherSprite.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)
})
