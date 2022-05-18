
scene.set_background_color(11)
mySprite = sprites.create(img("""
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
"""), SpriteKind.player)
controller.move_sprite(mySprite)

pizza = sprites.create(img("""
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
"""), SpriteKind.food)

def on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    otherSprite.set_position(randint(0,160), randint(0,120))
    info.start_countdown(10)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_overlap)