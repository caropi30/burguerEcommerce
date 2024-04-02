import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RadioSelect from "../../RadioSelect";
import RegularButton from "../../RegularButton";
import { RadioButtonGroup, RadioButtonItem } from 'expo-radio-button';
import helpersStyle from '../../../constants/helpersStyle';
import labels from '../../../constants/labels';
import useFont from "../../../hooks/useFont";


const { COLORS: { ORANGE, BLACK, GRAY, BG_LIGHT_GRAY, BORDER_YELLOW }, FONT_SIZES: { X_SMALL, SMALL, X_LARGE } } = helpersStyle;

const { COMBO_DETAIL: { PROTEINA, VEGETALES, SALSA } } = labels;
const vegetales = [
    "Lechuga",
    "tomate",
    "cebolla",
    "pepinillos"
];

const salsas = ['Mayonesa', 'ketchup']

const ComboCard = ({ id, icon }) => {
    const { fontsLoaded } = useFont();
    return (
        <TouchableOpacity style={styles.container}>
            <RadioButtonItem
                key={null}
                value={null}
                label={
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Combo 1</Text>
                        <Text style={styles.emoji}>🍔🍟🥤</Text>
                    </View>
                }
                radioBackground={ORANGE}
                labelStyle={styles.radioLabel}
            />
            <View style={styles.contentContainer}>
                <View style={styles.subtitleContainer}>
                    <FontAwesome name="circle" size={X_SMALL} color={ORANGE} />
                    <Text style={styles.title}>Hamburguesa</Text>
                </View>
                <View styles={styles.subcontentContainer}>
                    <Text>{`\u002E ${PROTEINA}`}: Carne</Text>
                    <Text>{`\u002E ${VEGETALES}`}: {vegetales.join(', ')}</Text>
                    <Text>{`\u002E ${SALSA}`}: {salsas.join(', ')}</Text>
                </View>
                <View style={styles.subtitleContainer}>
                    <FontAwesome name="circle" size={X_SMALL} color={ORANGE} />
                    <Text style={styles.title}>Bebida</Text>
                </View>
                <View>
                    <Text>{`\u002E`} Coca cola</Text>
                </View>
                <View style={styles.subtitleContainer}>
                    <FontAwesome name="circle" size={X_SMALL} color={ORANGE} />
                    <Text style={styles.title}>Papas</Text>
                </View>
                <View>
                    <Text>{`\u002E Tipo`}:  rústicas</Text>
                    <Text>{`\u002E Salsa`}:  ketchup</Text>
                </View>
            </View>
        </TouchableOpacity>)
};

export default ComboCard;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: BG_LIGHT_GRAY,
        padding: 16,
        borderWidth: 1,
        borderColor: BORDER_YELLOW,
        borderRadius: 8,

    },
    titleContainer: {
        flexDirection: 'row',
        paddingLeft: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%'
    },
    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: SMALL,
    },
    subtitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        width: '100%',
        marginTop: 8,
    },
    contentContainer: {
        paddingHorizontal: 16,
    },
    subcontentContainer: {
        paddingLeft: 30,
    },
    emoji: {
        fontSize: X_LARGE,
        elevation: 10
    },
    radioLabel: {
        fontFamily: 'Montserrat-Medium',
        fontSize: SMALL,
        color: GRAY,
        textTransform: 'capitalize',
        paddingLeft: 8,
    },
    radioBtn: {
        borderColor: ORANGE,
        width: 24,
        height: 24,
    },
    radioContainerStyle: {
        gap: 8
    },
});
