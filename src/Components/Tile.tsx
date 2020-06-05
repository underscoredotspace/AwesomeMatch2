import * as React from "react"
import { Button } from "../primitives"

interface TileProps {
    tile: any
}

const Tile: React.FC<TileProps> = ({ tile }) => (
    <Button
        style={{
            flex: 1,
            marginHorizontal: 2,
            borderColor: "black",
            borderWidth: 2,
        }}
        onPress={() => console.log(`tile ${tile} clicked`)}
    >
        {tile}
    </Button>
)

export default Tile
