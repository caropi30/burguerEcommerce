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

const { COLORS: { DARK_GRAY, ORANGE }, FONT_SIZES: { LARGE } } = helpersStyle;

const Step3 = ({ address, setAddress, house, setHouse, onPress }) => {
    const { fontLoaded } = useFont();

    return (
        <View style={styles.container}>
            <Input label="¿Cuál es tu dirección?" onChangeText={(e) => setAddress(e)} value={address} placeholder="address" >
                <Octicons name="location" size={25} color={ORANGE} />
            </Input>
            <Input label="Casa o depto" onChangeText={(e) => setHouse(e)} value={house} placeholder="number">
                <Entypo name="home" size={25} color={ORANGE} />
            </Input>
            <RegularButton title="Crea tu contraseña" onPress={onPress} primary />
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
