import React from "react"
import { SafeAreaView } from "react-native"
import Main from "./src/index"
import { shuffle } from "./src/Helpers"
import animals from "./src/Helpers/animals"

const App = () => {
    const set = shuffle(
        animals.map((animal) => animal({ size: 32 })).slice()
    ).slice(0, 8)
    const tiles = shuffle([...set, ...set])

    return (
        <SafeAreaView>
            <Main tiles={tiles} />
        </SafeAreaView>
    )
}

export default App
