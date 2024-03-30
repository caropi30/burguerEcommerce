import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import helpersStyle from '../../../constants/helpersStyle';
import useFont from '../../../hooks/useFont';

const { COLORS: { ORANGE, BLACK, GRAY }, FONT_SIZES: { SMALL } } = helpersStyle;

const CheckBoxWithText = ({ id, title, isChecked, setChecked }) => {
    const { fontsLoaded } = useFont();
    return (
        <View style={styles.container}>
            <Checkbox key={id} style={styles.checkbox} value={isChecked} onValueChange={setChecked} color={ORANGE} />
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
        textTransform: 'capitalize',
    },
});
