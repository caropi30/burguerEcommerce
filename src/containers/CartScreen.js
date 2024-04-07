import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header/Header';
import RegularButton from '../components/RegularButton';
import CartItemList from '../components/Cart/CartItemList';
import CartResumen from '../components/Cart/CartResumen';
import helpersStyle from '../constants/helpersStyle';
import labels from '../constants/labels';
import useHandleNavigation from '../hooks/useHandleNavigation';
import useGetCart from '../hooks/useGetCart';
import useGetProductInfo from '../hooks/useGetProductInfo';
import { setTotal as setTotalCart, setClearCart } from '../actions/cartSlice';
import { useDispatch } from 'react-redux';

const { COLORS: { WHITE } } = helpersStyle;

const { CART_SCREEN: { HEADER_CARRITO, HEADER: { CARRITO, PAGO }, BTN_CONTINUE, BTN_PAGAR } } = labels;

const CartScreen = () => {
    const [total, setTotal] = useState(0);
    const [payment, setPayment] = useState(false);
    const { productInfo } = useGetProductInfo();
    console.log('productInfo', productInfo)
    const { cart } = useGetCart();
    console.log('cart cart', cart)
    const { handleGoHome, handleGoSuccess } = useHandleNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTotalCart())
    }, [payment])

    const handleGoBack = () => {
        setPayment(!payment)
    };

    const handleContinue = () => {
        setPayment(true)
    };

    const handlePagar = () => {
        dispatch(setClearCart());
        handleGoSuccess();
    };

    return (
        <>
            <Header isCart={true} title={!payment ? CARRITO : PAGO} goBack={!payment ? handleGoHome : handleGoBack} />
            <View style={styles.container}>
                <View >
                    {!payment ?
                        <CartItemList
                            data={cart.items.length <= 0 ? null : cart.items}
                            quantityController={true}
                        />
                        : <CartResumen data={cart.items} subtotal={cart.total} />
                    }
                </View>
                <View style={styles.paymentBtn}>
                    <RegularButton onPress={!payment ? handleContinue : handlePagar} title={!payment ? BTN_CONTINUE : BTN_PAGAR} primary />
                </View>
            </View>
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
    paymentBtn: {
        backgroundColor: WHITE,
        marginTop: 32,
        paddingBottom: 20,
    }
});

export default CartScreen;
