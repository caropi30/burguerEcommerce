import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import helpersStyle from '../constants/helpersStyle';
import useFont from '../hooks/useFont';
import { setTitle } from '../actions/titleSlice';
import { setProductInfo } from '../actions/productInfoSlice';

const { COLORS: { WHITE, BLACK, ORANGE, BG_LIGHT_ORANGE, BG_LIGHT_GRAY, BORDER_YELLOW }, FONT_SIZES: { SMALL, XX_LARGE } } = helpersStyle;

const Card = ({ id, onPress, icon, title }) => {
    const { fontsLoaded } = useFont();
    const dispatch = useDispatch();

    const handleData = async (param) => {
        await dispatch(setTitle(param.title));
        await dispatch(setProductInfo(param));
        await onPress();
    };

    return (
        <TouchableOpacity style={styles.container} key={id} onPress={() => handleData({ title, id, icon })}>
            <Text style={styles.emoji}>{icon}</Text>
            <Text style={styles.txt}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: BG_LIGHT_ORANGE,
        borderColor: BORDER_YELLOW,
        borderWidth: 1,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
        paddingHorizontal: 32,
        paddingVertical: 8,
    },
    txt: {
        color: BLACK,
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        fontSize: SMALL,
        marginBottom: 12,
        textTransform: 'capitalize',
    },
    emoji: {
        fontSize: XX_LARGE,
        elevation: 10
    },
});

export default Card;
