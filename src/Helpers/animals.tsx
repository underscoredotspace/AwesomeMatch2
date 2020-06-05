import * as React from "react"
import { Image } from "react-native"

const style = (tileSize: number) => ({
    height: tileSize,
    width: tileSize,
})

interface AnimalProps {
    size: number
}

const cat: React.FC<AnimalProps> = ({ size }) => (
    <Image
        source={require("../../assets/animals/blobcat.png")}
        style={style(size)}
    />
)
const dog: React.FC<AnimalProps> = ({ size }) => (
    <Image
        source={require("../../assets/animals/googledog.png")}
        style={style(size)}
    />
)
const bird: React.FC<AnimalProps> = ({ size }) => (
    <Image
        source={require("../../assets/animals/googlebird.png")}
        style={style(size)}
    />
)

const eagle: React.FC<AnimalProps> = ({ size }) => (
    <Image
        source={require("../../assets/animals/blobeagle.png")}
        style={style(size)}
    />
)

const bee: React.FC<AnimalProps> = ({ size }) => (
    <Image
        source={require("../../assets/animals/googlebee.png")}
        style={style(size)}
    />
)

const goat: React.FC<AnimalProps> = ({ size }) => (
    <Image
        source={require("../../assets/animals/blobgoat.png")}
        style={style(size)}
    />
)

const bear: React.FC<AnimalProps> = ({ size }) => (
    <Image
        source={require("../../assets/animals/googlebear.png")}
        style={style(size)}
    />
)

const dove: React.FC<AnimalProps> = ({ size }) => (
    <Image
        source={require("../../assets/animals/googledove.png")}
        style={style(size)}
    />
)

const sheep: React.FC<AnimalProps> = ({ size }) => (
    <Image
        source={require("../../assets/animals/googlesheep.png")}
        style={style(size)}
    />
)

const mouse: React.FC<AnimalProps> = ({ size }) => (
    <Image
        source={require("../../assets/animals/googlemouse.png")}
        style={style(size)}
    />
)

const rabbit: React.FC<AnimalProps> = ({ size }) => (
    <Image
        source={require("../../assets/animals/googlerabbit.png")}
        style={style(size)}
    />
)

const pig: React.FC<AnimalProps> = ({ size }) => (
    <Image
        source={require("../../assets/animals/googlepig.png")}
        style={style(size)}
    />
)

export default [
    cat,
    dog,
    bird,
    eagle,
    bee,
    dove,
    bear,
    goat,
    sheep,
    mouse,
    rabbit,
    pig,
]
