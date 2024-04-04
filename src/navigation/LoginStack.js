import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../containers/OnboardingScreen';
import LoginScreen from '../containers/LoginScreen';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const LoginStack = ({ setIdToken }) => (
    <Stack.Navigator
        screenOptions={{
            gestureEnabled: true,
            header: () => null,
        }}
        initialRouteName="Login"
    >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="HomeStack" component={TabNavigation} />

    </Stack.Navigator>
);

export default LoginStack;
