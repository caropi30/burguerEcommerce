import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header/Header';
import RegularButton from '../components/RegularButton';
import helpersStyle from '../constants/helpersStyle';

const { COLORS: { WHITE } } = helpersStyle;

const CartScreen = () => {
    const navigation = useNavigation();
    const handleNavigation = () => {
        navigation.navigate('HomeStack', { screen: 'HomeScreen' });
    };

    const handleContinue = () => {
        console.log('continue shopping')
    };

    return (
        <>
            <Header isCart={true} title="Carrito" />
            <View style={styles.container}>
                <Text>CartScreen</Text>
                <RegularButton onPress={handleNavigation} title="Continuar" />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
    },
});

export default CartScreen;
