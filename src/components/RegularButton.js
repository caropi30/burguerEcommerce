import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import helpersStyle from "../constants/helpersStyle";
import useFont from "../hooks/useFont";

const { COLORS: { ORANGE, WHITE, GRAY_MEDIUM } } = helpersStyle;

const RegularButton = ({ onPress, title, disabled, price, primary, secondary }) => {
    const { fontsLoaded } = useFont();

    const colorButtonStyle = (primary, secondary, disabled) => {
        if (primary) return [styles.btnPrimary];
        if (secondary) return styles.btnSecondary;
        if (disabled) return styles.btnDisabled;
    };

    const colorButtonTextStyle = (primary, secondary, disabled) => {
        if (primary) return styles.btnPrimaryTxt;
        if (secondary) return styles.btnSecondaryTxt;
        if (disabled) return styles.btnDisabledTxt;

    };

    return (
        <TouchableOpacity style={colorButtonStyle(primary, secondary, disabled)} onPress={onPress} >
            <Text style={colorButtonTextStyle(primary, secondary, disabled)}>{title} {price && `$${price}`}</Text>
        </TouchableOpacity >
    );
};

export default RegularButton;

const styles = StyleSheet.create({
    btnPrimary: {
        backgroundColor: ORANGE,
        padding: 10,
        borderRadius: 50,
        width: '100%',
        paddingVertical: 14,
        marginTop: 0,
    },
    btnSecondary: {
        backgroundColor: WHITE,
        borderWidth: 2,
        borderColor: ORANGE,
        color: ORANGE,
        padding: 10,
        borderRadius: 50,
        width: '100%',
        paddingVertical: 14,
        marginTop: 0,
    },
    btnPrimaryTxt: {
        color: WHITE,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
    },
    btnSecondaryTxt: {
        color: ORANGE,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
    },
    btnDisabled: {
        backgroundColor: GRAY_MEDIUM,
        padding: 10,
        borderRadius: 50,
        width: '90%',
        paddingVertical: 14,
        marginTop: 0,
    },
});