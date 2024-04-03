import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import helpersStyle from '../constants/helpersStyle'
import useFont from '../hooks/useFont'

const {
    COLORS: { ORANGE, WHITE, GRAY_MEDIUM },
} = helpersStyle

const RegularButton = ({ onPress, title, disabled, price }) => {
    const { fontsLoaded } = useFont()
    return (
        <TouchableOpacity
            style={!disabled ? styles.btnCart : styles.btnDisabled}
            onPress={onPress}
        >
            <Text style={styles.btnCartTxt}>
                {title} {price && `$${price}`}
            </Text>
        </TouchableOpacity>
    )
}

export default RegularButton

const styles = StyleSheet.create({
    btnCart: {
        backgroundColor: ORANGE,
        padding: 10,
        borderRadius: 50,
        width: '100%',
        paddingVertical: 14,
        marginTop: 32,
    },
    btnCartTxt: {
        color: WHITE,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
    },
    btnDisabled: {
        backgroundColor: GRAY_MEDIUM,
        padding: 10,
        borderRadius: 50,
        width: '90%',
        paddingVertical: 14,
        marginTop: 32,
    },
})
