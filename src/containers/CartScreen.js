import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header/Header';
import RegularButton from '../components/RegularButton';
import CartItem from '../components/Cart/CartItem';
import CartItemList from '../components/Cart/CartItemList';
import CartResumen from '../components/Cart/CartResumen';
import helpersStyle from '../constants/helpersStyle';
import labels from '../constants/labels';
import useHandleNavigation from '../hooks/useHandleNavigation';

const { COLORS: { WHITE } } = helpersStyle;

const { CART_SCREEN: { HEADER_CARRITO, HEADER: { CARRITO, PAGO }, BTN_CONTINUE, BTN_PAGAR } } = labels;

const CartScreen = () => {
    const [payment, setPayment] = useState(false);
    const { handleGoHome } = useHandleNavigation();
    const navigation = useNavigation();
    const handleNavigation = () => {
        navigation.navigate('HomeStack', { screen: 'HomeScreen' });
    };

    const handleGoBack = () => {
        setPayment(!payment)
    };

    const handleContinue = () => {
        setPayment(true)
    };

    const handlePagar = () => {
        handleGoHome();
    };

    useEffect(() => {
        console.log('payment', payment)
    }, [payment]);

    return (
        <>
            <Header isCart={true} title={!payment ? CARRITO : PAGO} goBack={!payment ? handleGoHome : handleGoBack} />
            <ScrollView style={styles.container}>
                {!payment ? <CartItemList /> : <CartResumen />}
                <RegularButton onPress={!payment ? handleContinue : handlePagar} title={!payment ? BTN_CONTINUE : BTN_PAGAR} />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        paddingHorizontal: 16,
        paddingTop: 32,
    },
});

export default CartScreen;
