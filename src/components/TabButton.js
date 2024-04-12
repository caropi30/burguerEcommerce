import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import helpersStyle from '../constants/helpersStyle'
import useFont from '../hooks/useFont'

const {
    FONT_SIZES: { SMALL_MEDIUM },
} = helpersStyle

const TabButton = ({ onPress, children, title }) => {
    const { fontsLoaded } = useFont()

    const renderSkeleton = () => <Text>Cargando...</Text>

    const renderContent = () => (
        <TouchableOpacity style={styles.btnTab} onPress={onPress}>
            {children}
            <Text style={styles.btnTabTxt}>{title}</Text>
        </TouchableOpacity>
    )

    return fontsLoaded ? renderContent() : renderSkeleton()
}

export default TabButton

const styles = StyleSheet.create({
    btnTab: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    btnTabTxt: {
        fontSize: SMALL_MEDIUM,
        fontFamily: 'Montserrat-SemiBold',
    },
})
