import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { RadioButtonGroup } from 'expo-radio-button';
import ComboCard from "./components/ComboCard";
import RegularButton from "../RegularButton";
import helpersStyle from "../../constants/helpersStyle";

const { COLORS: { ORANGE, WHITE } } = helpersStyle;

const ComboDetail = ({ id, icon, data }) => {
    const [current, setCurrent] = useState('');
    return (
        <>
            <ScrollView indicatorStyle="white" contetContainerStyle={styles.container}>
                <View style={styles.container}>
                    <RadioButtonGroup
                        containerStyle={styles.radioContainerStyle}
                        selected={current}
                        onSelected={(value) => setCurrent(value)}
                        radioBackground={ORANGE}
                        radioStyle={styles.radioBtn}
                    >
                        {data?.map((item, index) => <ComboCard />)}
                    </RadioButtonGroup>
                </View>
            </ScrollView>
            <View style={styles.button}>
                <RegularButton title="Agregar al carrito" onPress={() => console.log('Agregar al carrito')} />
            </View>
        </>
    )
};

export default ComboDetail;

const styles = StyleSheet.create({
    container: { flex: 1 },
    radioBtn: {
        borderColor: ORANGE,
        width: 24,
        height: 24,
    },
    radioContainerStyle: {
        gap: 8
    },
    button: {
        paddingBottom: 20,
    }
});
