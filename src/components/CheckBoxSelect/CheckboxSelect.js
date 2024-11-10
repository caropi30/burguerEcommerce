import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CheckBoxWithText from './components/CheckBoxWithText'
import helpersStyle from '../../constants/helpersStyle'
import useFont from '../../hooks/useFont'

const {
    COLORS: { ORANGE },
    FONT_SIZES: { SMALL },
} = helpersStyle

const CheckboxSelect = ({
    title,
    checkboxData,
    checkboxes,
    setCheckboxes,
    selectedBoxes,
    setSelectedBoxes,
}) => {
    const { fontsLoaded } = useFont()
    const toggleCheckbox = (id) => {
        setCheckboxes(
            checkboxes.map((checkbox) => {
                if (checkbox.id === id) {
                    return { ...checkbox, isChecked: !checkbox.isChecked }
                }
                return checkbox
            })
        )
    }

    useEffect(() => {
        setSelectedBoxes(
            checkboxes.filter((checkbox) => checkbox.isChecked === true)
        )
    }, [checkboxes])

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            {checkboxes.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    onPress={() => toggleCheckbox(item.id)}
                >
                    <CheckBoxWithText
                        id={item.id}
                        title={item.title}
                        value={item.isChecked}
                        onValueChange={() => toggleCheckbox(item.id)}
                    />
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default CheckboxSelect

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
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
})
