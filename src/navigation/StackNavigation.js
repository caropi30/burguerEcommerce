import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../containers/HomeScreen';
import CategoryScreen from '../containers/CategoryScreen';
import ProductDetailScreen from '../containers/ProductDetailScreen';
import CartScreen from '../containers/CartScreen';
import AccountScreen from '../containers/AccountScreen';
import OnboardingScreen from '../containers/OnboardingScreen';
import LoginScreen from '../containers/LoginScreen';
import LocationScreen from '../containers/LocationScreen';
import SuccessScreen from '../containers/SuccessScreen';
import LoginStack from './LoginStack';
import SplashScreen from '../containers/SplashScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => (
    <Stack.Navigator
        screenOptions={{
            gestureEnabled: true,
            header: () => null,
        }}
        initialRouteName="Splash"
    >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="HomeStack" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    </Stack.Navigator>
);

export default StackNavigation;
