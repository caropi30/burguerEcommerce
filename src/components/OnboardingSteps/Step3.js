import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RegularButton from '../RegularButton';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Input from '../Input';
import useFont from '../../hooks/useFont';
import labels from '../../constants/labels';
import helpersStyle from '../../constants/helpersStyle';

const { COLORS: { DARK_GRAY, GRAY, ORANGE, BLACK }, FONT_SIZES: { LARGE } } = helpersStyle;

const Step3 = () => {
    const { fontLoaded } = useFont();
    const navigation = useNavigation();
    const handleNavigation = () => {
        navigation.navigate('HomeStack', { screen: 'HomeScreen' });
    };
    return (
        <View style={styles.container}>
            <Input label="¿Cuál es tu dirección?" onChangeText={() => { }} value="" >
                <Octicons name="location" size={25} color={ORANGE} />
            </Input>
            <Input label="Casa o depto" onChangeText={() => { }} value="">
                <Entypo name="home" size={25} color={ORANGE} />
            </Input>
            <RegularButton title="Crea tu contraseña" onPress={handleNavigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        width: '100%',
    },
    title: {
        fontFamily: 'Monserrat-SemiBold',
        fontSize: LARGE,
        color: DARK_GRAY,
    },
    text: {
        lineHeight: 18,
        fontFamily: 'Montserrat-Light',
    }
});
export default Step3;
