namespace SpriteKind {
    export const Note = SpriteKind.create()
}
function spawnNote () {
    noteList = [assets.image`myImage3`, assets.image`myImage4`, assets.image`myImage5`]
    note = sprites.create(noteList[randint(0, 2)], SpriteKind.Note)
}
function levelSelect (level: number, diff: number) {
    spawnNote()
}
let note: Sprite = null
let noteList: Image[] = []
let levelList = [[215], [0], [100]]
game.splash("Rhythm Madness")
tiles.setCurrentTilemap(tilemap`level1`)
let speed = 50
let mySprite = sprites.create(img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite, 200, 0)
mySprite.y = 105
info.setScore(0)
levelSelect(game.askForNumber("Songs 1-3", 1), game.askForNumber("Difficulty?"))
