import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../containers/HomeScreen';
import CategoryScreen from '../containers/CategoryScreen';
import ProductDetailScreen from '../containers/ProductDetailScreen';
import CartScreen from '../containers/CartScreen';
import Header from '../components/Header/Header';
import AccountScreen from '../containers/AccountScreen';
import OnboardingScreen from '../containers/OnboardingScreen';
import LoginScreen from '../containers/LoginScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => (
    <Stack.Navigator
        screenOptions={{
            gestureEnabled: true,
            header: () => null,
        }}
        initialRouteName="HomeStack"
    >
        <Stack.Screen name="HomeStack" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
);

export default StackNavigation;
