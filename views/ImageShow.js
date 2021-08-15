import React, { useEffect, useRef } from 'react'
import { Image, View, Animated } from 'react-native'
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers'
import img from './tmp.jpg'

const ImageShow = () => {

    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        console.log('ImageShow')
        Animated.timing(
            fadeAnim, {
            toValue: 1,
            duration: 3000,
        }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View
        style={{ opacity: fadeAnim}}>
            <Image style={{
                width: '100%',
                height: '100%',
            }}
                source={img}
            />
        </Animated.View>
    )
}

export default ImageShow
