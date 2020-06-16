import React, { useState, useEffect } from "react"
import { View, Text } from "./primitives"
import { useWindowDimensions, ImageSourcePropType } from "react-native"
import { Tile } from "./Components"

interface Animal {
    animalName: string
    animalImageSrc: ImageSourcePropType
}

const Main: React.FC<{
    rows: Animal[][]
}> = ({ rows }) => {
    const { width } = useWindowDimensions()
    const [selected, setSelected] = useState<[number, number][]>([])
    const [matched, setMatched] = useState<[number, number][]>([])

    function onFlip(row: number, col: number) {
        if (selected.length < 2) {
            setSelected([...selected, [row, col]])
        }
    }

    useEffect(() => {
        console.log(selected)
        if (selected.length <= 1) {
            return
        }

        if (selected.length === 2) {
            const [[r1, c1], [r2, c2]] = selected
            if (rows[r1][c1].animalName === rows[r2][c2].animalName) {
                setMatched([...matched, [r1, c1], [r2, c2]])
            }
            setTimeout(() => {
                setSelected([])
            }, 1000)
        }
    }, [selected])

    return (
        <View
            style={{
                margin: 16,
                justifyContent: "space-between",
            }}
        >
            <View>
                <Text style={{ fontSize: 20 }}>
                    Tap two cards and see if they match!
                </Text>
            </View>
            <View style={{ height: width - 32 }}>
                {rows.map((row, rowNdx) => (
                    <View
                        style={{
                            flexDirection: "row",
                            width: "100%",
                            flex: 1,
                            paddingVertical: 4,
                        }}
                        key={`row-${rowNdx}`}
                    >
                        {row.map(({ animalName, animalImageSrc }, colNdx) => (
                            <Tile
                                animalName={animalName}
                                animalImageSrc={animalImageSrc}
                                size={width / 6}
                                key={`row-${rowNdx}-tile-${colNdx}`}
                                onFlip={() => onFlip(rowNdx, colNdx)}
                                flipped={
                                    !!selected.find(
                                        ([r, c]) => r === rowNdx && c === colNdx
                                    )
                                }
                                matched={
                                    !!matched.find(
                                        ([r, c]) => r === rowNdx && c === colNdx
                                    )
                                }
                            />
                        ))}
                    </View>
                ))}
            </View>
        </View>
    )
}

export default Main
