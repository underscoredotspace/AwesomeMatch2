import React from "react"
import { View, Text } from "./primitives"
import { useWindowDimensions, Image } from "react-native"
import { Tile } from "./Components"

const Main: React.FC<{ tiles: typeof Image[] }> = ({ tiles }) => {
    const { width } = useWindowDimensions()

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
                        {row.map((tile, tileNdx) => (
                            <Tile
                                tile={tile}
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
