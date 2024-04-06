import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { RadioButtonGroup } from 'expo-radio-button';
import { useDispatch } from 'react-redux';
import ComboCard from "./components/ComboCard";
import helpersStyle from "../../constants/helpersStyle";
import { setItems } from "../../actions/cartSlice";

const { COLORS: { ORANGE, BG_LIGHT_GRAY, BORDER_YELLOW } } = helpersStyle;

const ComboDetail = ({ id, icon, data, isFetching, setPrice }) => {
    const [current, setCurrent] = useState('');
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();

    return (
        <>
            {isFetching ? <Text>Cargando...</Text> : (
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
                                        onPress={() => {
                                            {
                                                dispatch(setItems({
                                                    title: item.title,
                                                    id: item.id,
                                                    icon: item.icon,
                                                    price: item.precio,
                                                    quantity: quantity,
                                                }))
                                                setPrice(item.precio);
                                            }
                                        }}
                                    />
                                )
                            }
                            )}
                        </RadioButtonGroup>
                    </View>
                </ScrollView>
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
