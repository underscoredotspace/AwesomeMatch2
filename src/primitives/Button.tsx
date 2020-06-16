import React from "react"
import {
    TouchableHighlight,
    TouchableHighlightProperties,
    ViewStyle,
} from "react-native"

const defaultStyles: ViewStyle = {
    justifyContent: "center",
    alignItems: "center",
}

const Button: React.FC<TouchableHighlightProperties> = ({
    style,
    onPress,
    ...props
}) => (
    <TouchableHighlight
        onPress={onPress}
        {...props}
        style={[defaultStyles, style]}
    />
)

export default Button
