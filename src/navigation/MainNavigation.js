import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './LoginStack';
import TabNavigation from './TabNavigation';
// import useGetIdToken from '../hooks/useGetIdToken';
import { useSelector } from 'react-redux';

const MainNavigation = () => {
    const idToken = useSelector(state => state.idToken);
    console.log('idToken', idToken);
    return (
        <NavigationContainer>
            {idToken ? <TabNavigation /> : <LoginStack />}
        </NavigationContainer>
    )
};

export default MainNavigation;