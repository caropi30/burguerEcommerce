import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import helpersStyle from '../constants/helpersStyle'
import useFont from '../hooks/useFont'

const {
    COLORS: { WHITE, ORANGE },
} = helpersStyle

const SucessScreen = () => {
    const { fontsLoaded } = useFont()
    return (
        <View style={styles.container}>
            <Text>Success</Text>
        </View>
    )
}

export default SucessScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: ORANGE,
    },
})
