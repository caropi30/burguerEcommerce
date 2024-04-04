import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import helpersStyle from "../constants/helpersStyle";
import useFont from "../hooks/useFont";

const { COLORS: { ORANGE, WHITE, GRAY_MEDIUM } } = helpersStyle;

const LinkButton = ({ onPress, title, buttonStyle, textStyle }) => {
    const { fontsLoaded } = useFont();
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={[textStyle, styles.btnTxt]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default LinkButton;

const styles = StyleSheet.create({
    btnTxt: {
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
    },
});