import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { RadioButtonGroup, RadioButtonItem } from 'expo-radio-button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ComboCard from "./components/ComboCard";
import RegularButton from "../RegularButton";
import helpersStyle from "../../constants/helpersStyle";
import labels from "../../constants/labels";

const { COLORS: { ORANGE, BLACK, GRAY, BG_LIGHT_GRAY, BORDER_YELLOW }, FONT_SIZES: { X_SMALL, SMALL, X_LARGE } } = helpersStyle;

const { COMBO_DETAIL: { PROTEINA, VEGETALES, SALSA } } = labels;

const ComboDetail = ({ id, icon, data, isFetching }) => {
    const [current, setCurrent] = useState('');
    console.log('current', current)
    return (
        <>
            {isFetching ? <Text>Cargando...</Text> : (
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
                                {data?.map((item, index) => {
                                    return (
                                        <ComboCard
                                            key={item.id}
                                            id={item.id}
                                            icon={item.icon}
                                            value={item.id}
                                            title={item.title}
                                            burgerTitle={item.items.hamburguesa.name}
                                            burgerProtein={item.items.hamburguesa.proteina}
                                            burgerVegatables={item.items.hamburguesa.vegetales}
                                            drinkFlavors={item.items.bebida.brand}
                                            drinkTitle={item.items.bebida.name}
                                            chipsTitle={item.items.papas.name}
                                            chipsType={item.items.papas.tipo}
                                            chipsSauce={item.items.papas.salsa}
                                        />
                                    )
                                }
                                )}
                            </RadioButtonGroup>
                        </View>
                    </ScrollView>
                    <View style={styles.button}>
                        <RegularButton title="Agregar al carrito" onPress={() => console.log('Agregar al carrito')} />
                    </View>
                </>
            )}

        </>
    )
};

export default ComboDetail;

const styles = StyleSheet.create({
    container: { flex: 1 },
    cardContainer: {
        width: '100%',
        backgroundColor: BG_LIGHT_GRAY,
        padding: 16,
        borderWidth: 1,
        borderColor: BORDER_YELLOW,
        borderRadius: 8,

    },
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
