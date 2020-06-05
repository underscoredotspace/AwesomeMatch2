/* eslint-disable @typescript-eslint/no-var-requires */

const cat = require("../../assets/animals/blobcat.png")
const eagle = require("../../assets/animals/blobeagle.png")
const goat = require("../../assets/animals/blobgoat.png")
const nook = require("../../assets/animals/blobnook.png")
const oro = require("../../assets/animals/bloboro.png")
const bear = require("../../assets/animals/googlebear.png")
const bee = require("../../assets/animals/googlebee.png")
const bird = require("../../assets/animals/googlebird.png")
const chick = require("../../assets/animals/googlechick.png")
const chicken = require("../../assets/animals/googlechicken.png")
const cow = require("../../assets/animals/googlecow.png")
const crab = require("../../assets/animals/googlecrab.png")
const dog = require("../../assets/animals/googledog.png")
const dove = require("../../assets/animals/googledove.png")

const fox = require("../../assets/animals/googlefox.png")

const koala = require("../../assets/animals/googlekoala.png")
const lion = require("../../assets/animals/googlelion.png")
const mouse = require("../../assets/animals/googlemouse.png")
const octopus = require("../../assets/animals/googleoctopus.png")
const penguin = require("../../assets/animals/googlepenguin.png")
const pig = require("../../assets/animals/googlepig.png")
const rabbit = require("../../assets/animals/googlerabbit.png")
const rat = require("../../assets/animals/googlerat.png")
const sheep = require("../../assets/animals/googlesheep.png")
const snake = require("../../assets/animals/googlesnake.png")
const squirrel = require("../../assets/animals/googlesquirrel.png")
const turtle = require("../../assets/animals/googleturtle.png")
const whale = require("../../assets/animals/googlewhale.png")
const panda = require("../../assets/animals/pandablob.png")
const pusheen = require("../../assets/animals/pusheenblob.png")
const reindeer = require("../../assets/animals/reindeerblob.png")

interface Animals {
    [name: string]: NodeRequire
}

const animals: Animals = {
    cat,
    eagle,
    goat,
    nook,
    oro,
    bear,
    bee,
    bird,
    chick,
    chicken,
    cow,
    crab,
    dog,
    dove,
    fox,
    koala,
    lion,
    mouse,
    octopus,
    penguin,
    pig,
    rabbit,
    rat,
    sheep,
    snake,
    squirrel,
    turtle,
    whale,
    panda,
    pusheen,
    reindeer,
}

export default animals
