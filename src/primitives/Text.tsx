import * as React from "react"
import { Text, TextProperties, TextStyle } from "react-native"

const defaultStyles: TextStyle = {
    fontFamily: "Press Start 2P",
}

const TextWithDefaultStyles: React.FC<TextProperties> = ({
    style,
    ...props
}) => <Text style={[defaultStyles, style]} {...props} />

export default TextWithDefaultStyles
