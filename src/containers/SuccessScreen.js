import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinkButton from '../components/LinkButton';
import useHandleNavigation from '../hooks/useHandleNavigation';
import helpersStyle from '../constants/helpersStyle';
import useFont from '../hooks/useFont';

const { COLORS: { WHITE, ORANGE }, FONT_SIZES: { MEDIUM, X_SMALL_LARGE } } = helpersStyle;

const SuccessScreen = () => {
    const { fontsLoaded } = useFont();
    const { handleGoHome, } = useHandleNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.icon}>🎉</Text>
            <Text style={styles.title}>¡Listo!</Text>
            <Text style={styles.subtitle}>Recibimos su pago exitosamente</Text>
            <LinkButton title="Volver al inicio" onPress={handleGoHome} secondary />
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
    icon: {
        fontSize: 200,
        textAlign: 'center',
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: X_SMALL_LARGE,
        color: WHITE,
        marginTop: 16,
    },
    subtitle: {
        fontFamily: 'Montserrat-Medium',
        color: WHITE,
        fontSize: MEDIUM,
        marginBottom: 32,
        marginTop: 16,
    },
});

export default SuccessScreen;
