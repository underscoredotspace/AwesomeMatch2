import * as React from "react"
import { Button } from "../primitives"
import { Image, ImageSourcePropType } from "react-native"

interface TileProps {
    animalName: string
    animalImageSrc: ImageSourcePropType
    size: number
}

const Tile: React.FC<TileProps> = ({ animalName, animalImageSrc, size }) => (
    <Button
        style={{
            flex: 1,
            marginHorizontal: 2,
            borderColor: "black",
            borderWidth: 2,
        }}
        onPress={() => console.log(`tile ${animalName} clicked`)}
    >
        <Image
            source={animalImageSrc}
            style={{ width: size, height: size }}
            resizeMethod="scale"
        />
    </Button>
)

export default Tile
