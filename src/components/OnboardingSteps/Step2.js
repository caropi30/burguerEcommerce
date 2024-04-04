import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RegularButton from '../RegularButton';
import Input from '../Input';
import useFont from '../../hooks/useFont';
import labels from '../../constants/labels';
import helpersStyle from '../../constants/helpersStyle';

const { COLORS: { DARK_GRAY, GRAY, ORANGE, BLACK }, FONT_SIZES: { LARGE } } = helpersStyle;

const Step2 = ({ password, handlePassword, handleStep }) => {
    const { fontsLoaded } = useFont();

    return (
        <View style={styles.container}>
            <Input label="¿Cuál será tu contraseña?" onChangeText={(e) => handlePassword(e)} value={password} placeholder="password">
                <Ionicons name="eye-off-outline" size={25} color={ORANGE} />
            </Input>
            <View style={styles.content}>
                <Text style={styles.text}>{`\u002E`} Entre 6 y 8 caractéres.</Text>
                <Text style={styles.text}>{`\u002E`} Usa 1 mayúscula.</Text>
                <Text style={styles.text}>{`\u002E`} No uses caracteres especiales (@-,#.*$).</Text>
            </View>
            <RegularButton title="Crea tu contraseña" onPress={handleStep} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        width: '100%',
    },
    title: {
        fontFamily: 'Monserrat-SemiBold',
        fontSize: LARGE,
        color: DARK_GRAY,
    },
    text: {
        lineHeight: 18,
        fontFamily: 'Montserrat-Light',
    },
    content: {
        marginBottom: 24
    }
});

export default Step2;
