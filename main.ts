function base () {
    for (let index = 0; index < 4; index++) {
        builder.place(RAIL)
        builder.move(FORWARD, 1)
    }
}
player.onChat("mr", function () {
    builder.teleportTo(pos(0, 0, 0))
    base()
    subir(20)
    avanzar(10)
    player.say("bajar")
    bajar(10)
    avanzar(40)
    subir(10)
    player.say("bajar")
    avanzar(10)
    bajar(20)
    builder.place(RAIL)
    base()
})
player.onChat("2", function () {
    builder.turn(LEFT_TURN)
    for (let index = 0; index < 4; index++) {
        builder.place(REDSTONE_BLOCK)
        builder.move(UP, 1)
        builder.place(RAIL)
        builder.move(DOWN, 1)
        builder.move(FORWARD, 1)
    }
})
function bajar (altura: number) {
    for (let index = 0; index < altura; index++) {
        builder.move(DOWN, 1)
        builder.place(REDSTONE_BLOCK)
        builder.move(UP, 1)
        builder.place(RAIL)
        builder.move(DOWN, 1)
        builder.move(FORWARD, 1)
    }
}
function subir (altura: number) {
    for (let index = 0; index < altura; index++) {
        builder.place(REDSTONE_BLOCK)
        builder.move(UP, 1)
        builder.place(RAIL)
        builder.move(FORWARD, 1)
    }
}
function avanzar (num: number) {
    builder.turn(LEFT_TURN)
    for (let index = 0; index < num; index++) {
        builder.place(REDSTONE_BLOCK)
        builder.move(UP, 1)
        builder.place(RAIL)
        builder.move(DOWN, 1)
        builder.move(FORWARD, 1)
    }
}
player.onTravelled(RIDING, function () {
    mobs.spawn(FIREWORKS_ROCKET, player.position())
})
player.onChat("run", function () {
	
})
