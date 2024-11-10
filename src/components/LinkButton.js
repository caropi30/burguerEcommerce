import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import helpersStyle from '../constants/helpersStyle'
import useFont from '../hooks/useFont'

const {
    COLORS: { ORANGE, WHITE, GRAY_MEDIUM },
    FONT_SIZES: { SMALL },
} = helpersStyle

const LinkButton = ({ onPress, title, buttonStyle, textStyle }) => {
    const { fontsLoaded } = useFont()
    return (
        <View style={styles.container}>
            <Ionicons name="arrow-back-sharp" size={24} color={WHITE} />
            <TouchableOpacity style={buttonStyle} onPress={onPress}>
                <Text style={[textStyle, styles.btnTxt]}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LinkButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    btnTxt: {
        fontFamily: 'Montserrat-Bold',
        fontSize: SMALL,
        color: WHITE,
        textDecorationLine: 'underline',
        textDecorationColor: WHITE,
        textAlign: 'center',
    },
})
