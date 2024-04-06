import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RegularButton from '../components/RegularButton';
import useHandleNavigation from '../hooks/useHandleNavigation';
import helpersStyle from '../constants/helpersStyle';

const { COLORS: { WHITE, ORANGE } } = helpersStyle;

const SuccessScreen = () => {
    const { handleGoLogin, handleGoLocation } = useHandleNavigation();

    return (
        <View style={styles.container}>
            <Text>Cerrar sesión</Text>
            <View style={styles.btn}>
                <RegularButton title="Agregar dirección" onPress={handleGoLocation} primary />
            </View>
            <RegularButton title="Cerrar sesión" onPress={handleGoLogin} secondary />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: ORANGE,
    },
    btn: {
        marginVertical: 16,
        width: '100%',
    },
});

export default SuccessScreen;
