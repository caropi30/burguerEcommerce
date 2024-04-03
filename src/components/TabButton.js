import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade,
} from 'rn-placeholder'
import helpersStyle from '../constants/helpersStyle'
import useFont from '../hooks/useFont'

const {
    FONT_SIZES: { SMALL_MEDIUM },
} = helpersStyle

const TabButton = ({ onPress, children, title }) => {
    const { fontsLoaded } = useFont()

    const renderSkeleton = () => {
        ;<Placeholder
            Animation={Fade}
            Right={(props) => <PlaceholderMedia isRound />}
        >
            <PlaceholderLine width={10} style={styles.skeletonHeight} />
        </Placeholder>
    }

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
        fontFamily: 'Montserrat-Bold',
    },
})
