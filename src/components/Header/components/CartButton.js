import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import helpersStyle from '../../../constants/helpersStyle'
import useHandleNavigation from '../../../hooks/useHandleNavigation'

const {
    COLORS: { ORANGE, WHITE, BLACK, GRAY },
} = helpersStyle

const CartButton = () => {
    const { handleGoCart } = useHandleNavigation()

    return (
        <TouchableOpacity style={styles.btnCart} onPress={handleGoCart}>
            <Ionicons
                name="cart-outline"
                size={24}
                color={WHITE}
                style={styles.icon}
            />
        </TouchableOpacity>
    )
}

export default CartButton

const styles = StyleSheet.create({
    btnCart: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: 45,
        backgroundColor: ORANGE,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: ORANGE,
        elevation: 7,
    },
    btnLocation: {
        flexDirection: 'row',
        gap: 8,
    },
    btnLocationTxt: {
        color: GRAY,
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
    },
    btnLocationSecondary: {
        color: BLACK,
        fontFamily: 'Montserrat-Bold',
    },
})
