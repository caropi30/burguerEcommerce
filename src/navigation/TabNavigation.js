import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import useHandleNavigation from '../hooks/useHandleNavigation';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import StackNavigation from './StackNavigation';
import HomeScreen from '../containers/HomeScreen';
import AccountScreen from '../containers/AccountScreen';
import helpersStyle from '../constants/helpersStyle';
import TabButton from '../components/TabButton';


const { COLORS: { ORANGE } } = helpersStyle;

const Tab = createBottomTabNavigator();

const TabNavigation = () => {


    const renderHomeIcon = () => (
        <TabButton title="Inicio">
            <Ionicons name="home-outline" size={25} color={ORANGE} />
        </TabButton>

    );


    const renderUserIcon = () => (
        <TabButton title="Cuenta">
            <AntDesign name="user" size={25} color={ORANGE} />
        </TabButton>
    );

    return (
        <Tab.Navigator
            screenOptions={{
                gestureEnabled: true,
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={StackNavigation}
                options={({ route }) => ({
                    tabBarShowLabel: false,
                    header: () => null,
                    tabBarIcon: renderHomeIcon,
                    tabBarStyle: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                        console.log(routeName)
                        if (routeName === 'ProductDetail' || routeName === 'Cart' || routeName === 'Category' || routeName === 'Onboarding' || routeName === 'Login') {
                            return { display: "none" }
                        }
                        return null
                    })(route),
                })}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    header: () => null,
                    tabBarShowLabel: false,
                    tabBarIcon: renderUserIcon,
                    tabBarStyle: { display: "none" },
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;