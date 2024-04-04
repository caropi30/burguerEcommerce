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

    const handleGoLocation = () => navigation.navigate('Location', { screen: 'LocationScreen' });

    const handleGoOnboarding = () => navigation.navigate('Onboarding', { screen: 'OnboardingScreen' });

    const handleGoLogin = () => navigation.navigate('Login', { screen: 'LoginScreen' });

    return { handleGoAccount, handleGoCategory, handleGoCart, handleGoHome, handleProductDetail, handleGoOnboarding };
};

export default useHandleNavigation;