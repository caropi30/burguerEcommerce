import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RadioButtonGroup, RadioButtonItem } from 'expo-radio-button'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import helpersStyle from '../constants/helpersStyle'
import useFont from '../hooks/useFont'
import useFilterProductDetail from '../hooks/useFilterProductDetail'

const {
    COLORS: { ORANGE, BLACK, GRAY },
    FONT_SIZES: { SMALL },
} = helpersStyle

const RadioSelect = ({ radioTitle, radioData }) => {
    const { fontsLoaded } = useFont()
    const [current, setCurrent] = useState('')
    const { isFetching } = useFilterProductDetail()

    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{radioTitle}</Text>
            </View>
            <RadioButtonGroup
                containerStyle={styles.radioContainerStyle}
                selected={current}
                onSelected={(value) => setCurrent(value)}
                radioBackground={ORANGE}
                radioStyle={styles.radioBtn}
            >
                {radioData?.map((item, index) => (
                    <RadioButtonItem
                        key={item}
                        value={item}
                        label={<Text style={styles.radioLabel}>{item}</Text>}
                        labelStyle={styles.radioLabel}
                    />
                ))}
            </RadioButtonGroup>
        </View>
    )
}

export default RadioSelect

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
        paddingLeft: 8,
    },
    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: SMALL,
        marginBottom: 18,
    },
    radioLabel: {
        fontFamily: 'Montserrat-Medium',
        fontSize: SMALL,
        color: GRAY,
        textTransform: 'capitalize',
        paddingLeft: 8,
    },
    radioBtn: {
        borderColor: ORANGE,
        width: 24,
        height: 24,
    },
    radioContainerStyle: {
        gap: 8,
    },
})
