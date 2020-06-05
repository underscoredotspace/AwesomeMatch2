import React from "react"
import { View, Text } from "./primitives"
import { useWindowDimensions } from "react-native"
import { Tile } from "./Components"
import { shuffle } from "./Helpers"
import animals from "./Helpers/animals"

const Main: React.FC = () => {
    const { width } = useWindowDimensions()

    const set = shuffle(
        Object.entries(animals)
            .map(([animalName, animalImageSrc]) => ({
                animalName,
                animalImageSrc,
            }))
            .slice()
    ).slice(0, 8)
    const tiles = shuffle([...set, ...set])

    const rows = [
        tiles.slice(0, 4),
        tiles.slice(4, 8),
        tiles.slice(8, 12),
        tiles.slice(12, 16),
    ]

    return (
        <View style={{ margin: 5 }}>
            <View>
                <Text style={{ fontSize: 20 }}>
                    This is some text in a really nice font
                </Text>
            </View>
            <View style={{ height: width }}>
                {rows.map((row, rowNdx) => (
                    <View
                        style={{
                            flexDirection: "row",
                            width: "100%",
                            flex: 1,
                            paddingVertical: 2,
                        }}
                        key={`row-${rowNdx}`}
                    >
                        {row.map(({ animalName, animalImageSrc }, tileNdx) => (
                            <Tile
                                animalName={animalName}
                                animalImageSrc={animalImageSrc}
                                size={width / 4 - 16}
                                key={`row-${rowNdx}-tile-${tileNdx}`}
                            />
                        ))}
                    </View>
                ))}
            </View>
        </View>
    )
}

export default Main
