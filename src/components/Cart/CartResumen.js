import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LocationButton from '../LocationButton'
import useFont from '../../hooks/useFont'
import helpersStyle from '../../constants/helpersStyle'
import labels from '../../constants/labels'
import CartItem from './CartItem'

const {
    COLORS: { WHITE, ORANGE, BG_LIGHT_ORANGE },
    FONT_SIZES: { SMALL, MEDIUM, LARGE },
} = helpersStyle

const {
    CART_SCREEN: {
        RESUMEN_PEDIDO: { TITLE, SUBTOTAL, ENVIO, TOTAL },
        TAX,
    },
} = labels

const CartResumen = ({ data, subtotal }) => {
    const { fontsLoaded } = useFont()
    return (
        <>
            <LocationButton />
            <ScrollView>
                <Text style={styles.title}>{TITLE}</Text>
                <View style={styles.listItems}>
                    {/* <CartItem icon="🍔" title="Hamburguesa" price="10.00" quantityController={false} />
                    <CartItem icon="🍔" title="Hamburguesa" price="10.00" quantityController={false} /> */}
                    {data?.map((item) => (
                        <CartItem
                            icon={item.icon}
                            title={item.title}
                            radioValue={item.radioValue}
                            price={item.price}
                            quantityController={false}
                        />
                    ))}
                </View>
                <View style={styles.paymentInfo}>
                    <View style={styles.paymentInfoItem}>
                        <Text style={styles.paymentInfoTxtBold}>
                            {SUBTOTAL}
                        </Text>
                        <Text style={styles.paymentInfoTxtRegular}>
                            ${subtotal}
                        </Text>
                    </View>
                    <View style={styles.paymentInfoItem}>
                        <Text style={styles.paymentInfoTxtBold}>{ENVIO}</Text>
                        <Text style={styles.paymentInfoTxtRegular}>${TAX}</Text>
                    </View>
                    <View style={styles.paymentInfoItem}>
                        <Text style={styles.paymentInfoTxtBold}>{TOTAL}</Text>
                        <Text style={styles.paymentInfoTxtBold}>
                            ${subtotal + TAX}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default CartResumen

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // }
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: MEDIUM,
        marginTop: 24,
    },
    listItems: {
        marginTop: 24,
        marginBottom: 16,
    },
    paymentInfo: {
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: BG_LIGHT_ORANGE,
        borderRadius: 8,
    },
    paymentInfoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    paymentInfoTxtBold: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: MEDIUM,
    },
    paymentInfoTxtRegular: {
        fontFamily: 'Montserrat-Light',
        fontSize: MEDIUM,
    },
})
