import React from "react";
import { useNavigation } from '@react-navigation/native';

const useHandleNavigation = () => {
    const navigation = useNavigation();

    const handleGoHome = () => {
        navigation.navigate('HomeStack', { screen: 'HomeScreen' });
    };

    const handleGoCategory = () => navigation.navigate('Category', { screen: 'CategoryScreen' });

    const handleGoCart = () => navigation.navigate('Cart', { screen: 'CartScreen', });

    const handleProductDetail = () => navigation.navigate('ProductDetail', { screen: 'ProductDetailScreen' });

    const handleGoAccount = () => navigation.navigate('Account', { screen: 'AccountScreen' });

    return { handleGoAccount, handleGoCategory, handleGoCart, handleGoHome, handleProductDetail };
};

export default useHandleNavigation;