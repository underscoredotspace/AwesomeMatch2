import React from "react"
import { SafeAreaView } from "react-native"
import Main from "./src/index"
import { shuffle } from "./src/Helpers"
import animals from "./src/Helpers/animals"

const App = () => {
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
        <SafeAreaView>
            <Main rows={rows} />
        </SafeAreaView>
    )
}

export default App
