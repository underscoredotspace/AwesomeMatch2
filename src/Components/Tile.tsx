import * as React from "react"
import { Button, View, Text } from "../primitives"
import { Image, ImageSourcePropType, StyleSheet, Animated } from "react-native"

interface TileProps {
    animalName: string
    animalImageSrc: ImageSourcePropType
    size: number
    onFlip: () => void
    flipped: boolean
    matched: boolean
}

const Tile: React.FC<TileProps> = ({
    animalImageSrc,
    size,
    onFlip,
    flipped,
    matched,
}) => {
    const frontRotateY = React.useRef(new Animated.Value(0)).current
    const frontOpacity = React.useRef(new Animated.Value(1)).current
    const backRotateY = React.useRef(new Animated.Value(Math.PI)).current
    const [animating, setAnimating] = React.useState(false)

    const tileShared = StyleSheet.create({
        shared: {
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
        },
    })

    const tileStyle = {
        tile: {
            flex: 1,
            marginHorizontal: 4,
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 16,
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
            transform: [{ perspective: 500, rotateY: frontRotateY }],
        },
        front: {
            ...tileShared.shared,
            opacity: frontOpacity,
            backgroundColor: "beige",
            backface: "hidden",
        },
        back: {
            ...tileShared.shared,
            opacity: Animated.subtract(new Animated.Value(1), frontOpacity),
            backgroundColor: "lightsteelblue",
            transform: [{ perspective: 500, rotateY: Math.PI }],
        },
    }

    React.useEffect(() => {
        if (flipped) {
            setAnimating(true)
            Animated.parallel([
                Animated.timing(frontOpacity, {
                    useNativeDriver: true,
                    toValue: 0,
                    duration: 300,
                }),
                Animated.timing(frontRotateY, {
                    useNativeDriver: true,
                    toValue: Math.PI,
                    duration: 300,
                }),
                Animated.timing(backRotateY, {
                    useNativeDriver: true,
                    toValue: Math.PI * 2,
                    duration: 300,
                }),
            ]).start(() => setAnimating(false))
        } else if (!matched) {
            setAnimating(true)
            Animated.parallel([
                Animated.timing(frontOpacity, {
                    useNativeDriver: true,
                    toValue: 1,
                    duration: 300,
                }),
                Animated.timing(frontRotateY, {
                    useNativeDriver: true,
                    toValue: 0,
                    duration: 300,
                }),
                Animated.timing(backRotateY, {
                    useNativeDriver: true,
                    toValue: Math.PI,
                    duration: 300,
                }),
            ]).start(() => setAnimating(false))
        }
    }, [flipped])

    return (
        <Animated.View style={[tileStyle.tile]}>
            <Animated.View style={tileStyle.back}>
                <Image
                    source={animalImageSrc}
                    style={{ width: size, height: size }}
                    resizeMethod="scale"
                />
            </Animated.View>
            <Animated.View style={tileStyle.front}>
                <Button
                    underlayColor="yellow"
                    onPress={() => onFlip()}
                    disabled={animating || flipped || matched}
                    style={{ width: "100%", height: "100%" }}
                >
                    <Text style={{ fontSize: 32 }}>?</Text>
                </Button>
            </Animated.View>
        </Animated.View>
    )
}

export default Tile
