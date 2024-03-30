import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
    const navigation = useNavigation();
    const handleNavigation = () => {
        navigation.navigate('Cart', { screen: 'CartScreen' });
    };
    return (
        <View style={styles.container}>
            <Text>AccountScreen</Text>
            <TouchableOpacity style={styles.btn} onPress={handleNavigation}>
                <Text>Go to</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        padding: 10,
        backgroundColor: 'lightblue',
    },
    radioBtn: {
        backgroundColor: 'lightblue',
    }
});

export default AccountScreen;
