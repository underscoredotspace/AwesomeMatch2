import React from "react"
import { View, Text } from "./primitives"
import { useWindowDimensions } from "react-native"

export default () => {
    const { width } = useWindowDimensions()
    const rows = [
        ["a", "b", "c", "d"],
        ["e", "f", "g", "h"],
        ["i", "j", "k", "l"],
        ["m", "n", "o", "p"],
    ]
    return (
        <>
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
                            width,
                            flex: 1,
                            paddingVertical: 2,
                        }}
                        key={`row-${rowNdx}`}
                    >
                        {row.map((tile, tileNdx) => (
                            <View
                                key={`tile-${rowNdx}-${tileNdx}`}
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderColor: "black",
                                    borderWidth: 2,
                                    marginHorizontal: 2,
                                }}
                            >
                                <Text>{tile}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        </>
    )
}
