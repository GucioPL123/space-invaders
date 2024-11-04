input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.AB, function () {
    shoot = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
    shoot.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (shoot.isTouching(Enemy)) {
            game.addScore(1)
        }
        if (shoot.get(LedSpriteProperty.Y) <= 0) {
            shoot.delete()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, -1)
})
let EnemyFire: game.LedSprite = null
let shoot: game.LedSprite = null
let Enemy: game.LedSprite = null
let Player: game.LedSprite = null
game.setScore(0)
Player = game.createSprite(2, 4)
Enemy = game.createSprite(0, -4)
basic.forever(function () {
    Enemy.move(1)
    basic.pause(100)
    Enemy.ifOnEdgeBounce()
    EnemyFire = game.createSprite(Enemy.get(LedSpriteProperty.X), Enemy.get(LedSpriteProperty.Y))
    shoot.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        EnemyFire.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
        if (EnemyFire.isTouching(Player)) {
            game.addScore(-1)
        }
        if (EnemyFire.get(LedSpriteProperty.Y) <= 4) {
            EnemyFire.delete()
        }
    }
})
