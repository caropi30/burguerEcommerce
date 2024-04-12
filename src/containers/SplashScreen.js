import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import useHandleNavigation from '../hooks/useHandleNavigation'
import helpersStyle from '../constants/helpersStyle'

const {
    COLORS: { ORANGE },
} = helpersStyle

const SplashScreen = () => {
    const [loading, setLoading] = useState(true)
    const { handleGoLogin } = useHandleNavigation()

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        handleGoLogin()
    }, [loading])

    return (
        <View style={styles.splash}>
            <Image
                source={require('../../assets/img/burgerToonLogo.png')}
                style={styles.logo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: ORANGE,
    },
})

export default SplashScreen
