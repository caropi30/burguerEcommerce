import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../containers/OnboardingScreen';
import LoginScreen from '../containers/LoginScreen';
import SplashScreen from '../containers/SplashScreen';
import TabNavigation from './TabNavigation';
import StackNavigation from './StackNavigation';


const Stack = createNativeStackNavigator();

const LoginStack = ({ setIdToken }) => (
    <Stack.Navigator
        screenOptions={{
            gestureEnabled: true,
            header: () => null,
        }}
        initialRouteName="Splash"
    >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="HomeStack" component={TabNavigation} />

    </Stack.Navigator>
);

export default LoginStack;
