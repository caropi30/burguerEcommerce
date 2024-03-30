import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import helpersStyle from '../../../constants/helpersStyle';
import useFont from '../../../hooks/useFont';
import { useNavigation, useRoute } from '@react-navigation/native';

const {
    COLORS: { ORANGE, WHITE, BLACK, BORDER_GRAY, GRAY, BG_LIGHT_ORANGE },
    FONT_SIZES: { SMALL, MEDIUM, LARGE, XX_LARGE },
} = helpersStyle;

const LocationButton = ({ isHome, goBack, isCart, title }) => {
    const { fontsLoaded } = useFont();
    const navigation = useNavigation();
    const route = useRoute();
    console.log('route', route);

    return (
        <View style={styles.container}>
            {!isHome ?
                <TouchableOpacity style={styles.btnArrow} onPress={goBack}>
                    <Feather name="arrow-left" size={24} color={ORANGE} style={styles.icon} />
                </TouchableOpacity> : null
            }
            {!isCart ?
                <View style={isHome && styles.isHomeStyle}>
                    <TouchableOpacity style={styles.btnLocation}>
                        <Entypo name="location" size={24} color={ORANGE} />
                        <View style={styles.btnLocationHome}>
                            <View>
                                <Text style={styles.btnLocationTxt}>Entregar en</Text>
                                <Text style={styles.btnLocationSecondary}>Agrega tu dirección</Text>
                            </View>
                            {isHome && <Ionicons name="add-circle-outline" size={24} color={BLACK} style={styles.btnAdd} />}
                        </View>
                    </TouchableOpacity>
                </View> : <Text style={styles.cartTitle}>{title}</Text>
            }
        </View>
    )
};

export default LocationButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 16,
        backgroundColor: WHITE,


    },
    btnArrow: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ORANGE,
        padding: 5,
    },
    btnCart: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ORANGE,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ORANGE,
        elevation: 7,
        padding: 5,
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
