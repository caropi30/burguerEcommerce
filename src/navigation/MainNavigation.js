import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './LoginStack';
import TabNavigation from './TabNavigation';
import useIdToken from '../hooks/useIdToken';

const MainNavigation = () => {
    const { token } = useIdToken();
    return (
        <NavigationContainer>
            {token ? <LoginStack /> : <TabNavigation />}
        </NavigationContainer>
    )
};

export default MainNavigation;