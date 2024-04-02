import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import helperStyle from '../../constants/helpersStyle';
import useFont from '../../hooks/useFont';

const { COLORS: { BORDER_YELLOW, BG_LIGHT_ORANGE, ORANGE }, FONT_SIZES: { X_SMALL, SMALL, SMALL_MEDIUM, MEDIUM, LARGE } } = helperStyle;

const CartItem = ({ icon, title, price, quantityController }) => {
    const { fontsLoaded } = useFont();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.priceContent}>
                    <View style={styles.icon}>
                        <Text style={[styles.iconText, icon?.length <= 2 ? styles.iconLarge : styles.iconSmall]}>{icon}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceName}>{title}</Text>
                        <Text style={styles.priceText}>${price}</Text>
                    </View>
                </View>
                {quantityController && (
                    <View>
                        <View style={styles.controller}>
                            <TouchableOpacity>
                                <Text style={styles.controllerItemTxt}>-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.controllerItemTxt}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.controllerItemTxt}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View >
        </View >
    )
}

export default CartItem;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 16,
    },
    content: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        backgroundColor: BG_LIGHT_ORANGE,
        borderWidth: 1,
        borderColor: BORDER_YELLOW,
        borderRadius: 8,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconText: {
        textAlign: 'center',
        elevation: 10,
    },
    iconSmall: {
        fontSize: X_SMALL,
        lineHeight: 20,
    },
    iconLarge: {
        fontSize: LARGE
    },
    priceContent: {
        flexDirection: 'row'
    },
    priceContainer: {
        flexDirection: 'column',
        paddingLeft: 8,
    },
    priceName: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: SMALL_MEDIUM,
        marginBottom: 8
    },
    priceText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: MEDIUM,
    },
    controller: {
        flexDirection: 'row',
        padding: 12,
        borderWidth: 1,
        borderColor: ORANGE,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 144
    },
    controllerItemTxt: {
        fontSize: LARGE,
        fontFamily: 'Montserrat-Medium',
        lineHeight: 22,
    }
});