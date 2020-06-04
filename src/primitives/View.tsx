import * as React from "react"
import { View, ViewProperties, ViewStyle } from "react-native"

const defaultStyles: ViewStyle = {}

const ViewWithDefaultStyles: React.FC<ViewProperties> = ({
    style,
    ...props
}) => {
    return <View style={[defaultStyles, style]} {...props} />
}

export default ViewWithDefaultStyles
