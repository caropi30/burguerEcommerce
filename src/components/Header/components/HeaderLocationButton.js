import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import LocationButton from '../../LocationButton';
import helpersStyle from '../../../constants/helpersStyle';
import useFont from '../../../hooks/useFont';
import { useNavigation, useRoute } from '@react-navigation/native';

const {
    COLORS: { ORANGE, WHITE, BLACK, BORDER_GRAY, GRAY, BG_LIGHT_ORANGE },
    FONT_SIZES: { SMALL, MEDIUM, LARGE, XX_LARGE },
} = helpersStyle;

const HeaderLocationButton = ({ isHome, goBack, isCart, title }) => {
    const { fontsLoaded } = useFont();
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.container}>
            {!isHome ?
                <TouchableOpacity style={styles.btnArrow} onPress={goBack}>
                    <Feather name="arrow-left" size={22} color={ORANGE} style={styles.icon} />
                </TouchableOpacity> : null
            }
            {!isCart ?
                <LocationButton /> : <Text style={styles.cartTitle}>{title}</Text>
            }
        </View>
    )
};

export default HeaderLocationButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 16,
        backgroundColor: WHITE,
        alignItems: 'center',


    },
    btnArrow: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 28,
        height: 28,
        backgroundColor: WHITE,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ORANGE,
    },
    btnCart: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: ORANGE,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ORANGE,
        elevation: 7,
    },
    btnLocation: {
        flexDirection: 'row',
        gap: 8,
    },
    btnLocationHome: {
        flexDirection: 'row',
        gap: 30,
    },
    btnAdd: {
        alignSelf: 'center',
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
    isHomeStyle: {
        backgroundColor: BG_LIGHT_ORANGE,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    cartTitle: {
        color: BLACK,
        fontFamily: 'Montserrat-Bold',
        fontSize: LARGE,

    }
});
