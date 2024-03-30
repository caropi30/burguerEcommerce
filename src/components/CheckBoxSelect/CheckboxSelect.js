import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import CheckBoxWithText from './components/CheckBoxWithText';
import helpersStyle from '../../constants/helpersStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import useFont from '../../hooks/useFont';

const { COLORS: { ORANGE, BLACK, GRAY }, FONT_SIZES: { SMALL } } = helpersStyle;

const CheckboxSelect = ({ title, checkboxData }) => {
    console.log('CheckboxSelect', checkboxData)
    const { fontsLoaded } = useFont();
    const [current, setCurrent] = useState('test2');
    const [isChecked, setChecked] = useState(false);


    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <FontAwesome name="circle" size={20} color={ORANGE} />
                <Text style={styles.title}>{title}</Text>
            </View>
            {/* {checkboxData?.map(item => <Checkbox key={item.id} style={styles.checkbox} value={isChecked} onValueChange={setChecked} color={ORANGE} />)} */}
            {checkboxData?.map(item => <CheckBoxWithText key={item} title={item} isChecked={isChecked} setChecked={setChecked} />)}
        </View>
    );
};

export default CheckboxSelect;

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
        paddingLeft: 8,
    },
    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: SMALL,
        marginBottom: 18,
    },
});
