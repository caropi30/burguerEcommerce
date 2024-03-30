import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButtonGroup, RadioButtonItem } from 'expo-radio-button';
import helpersStyle from '../constants/helpersStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import useFont from '../hooks/useFont';
import useFilterProductDetail from '../hooks/useFilterProductDetail';

const { COLORS: { ORANGE, BLACK, GRAY }, FONT_SIZES: { SMALL } } = helpersStyle;

const RadioSelect = ({ title, data }) => {
    console.log('RadioSelect', title, data)
    const { fontsLoaded } = useFont();
    const [current, setCurrent] = useState('test2');
    const { isFetching } = useFilterProductDetail();
    return (
        <View>
            <View style={styles.titleContainer}>
                <FontAwesome name="circle" size={20} color={ORANGE} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <RadioButtonGroup
                containerStyle={styles.radioContainerStyle}
                selected={current}
                onSelected={(value) => setCurrent(value)}
                radioBackground={ORANGE}
                radioStyle={styles.radioBtn}
            >
                {data?.map((item, index) => <RadioButtonItem key={index} value={item.value} label={item.label} labelStyle={styles.radioLabel} />)}
            </RadioButtonGroup>
        </View>
    );
};

export default RadioSelect;

const styles = StyleSheet.create({
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
    radioLabel: {
        fontFamily: 'Montserrat-Medium',
        fontSize: SMALL,
        color: GRAY,
        // textTransform: 'capitalize',
    },
    radioBtn: {
        borderColor: ORANGE,
        width: 24,
        height: 24,
    },
    radioContainerStyle: {
        gap: 8
    }
});
