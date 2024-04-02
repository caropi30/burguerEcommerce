import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import helpersStyle from '../../../constants/helpersStyle';
import useFont from '../../../hooks/useFont';

const { COLORS: { ORANGE, BLACK, GRAY }, FONT_SIZES: { SMALL } } = helpersStyle;

const CheckBoxWithText = ({ id, title, value, onValueChange, disabled }) => {
    const { fontsLoaded } = useFont();
    return (
        <View style={styles.container}>
            <Checkbox key={id} style={styles.checkbox} value={!disabled ? value : null} onValueChange={!disabled ? onValueChange : null} color={!disabled ? ORANGE : GRAY} />
            <Text style={styles.checkTxt}>{title}</Text>
        </View>
    );
};

export default CheckBoxWithText;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    checkbox: {
        marginVertical: 8,
    },
    checkTxt: {
        fontFamily: 'Montserrat-Medium',
        fontSize: SMALL,
        color: GRAY,
        textTransform: 'capitalize',
    },
});
