import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import helpersStyle from "../constants/helpersStyle";
import useHandleNavigation from "../hooks/useHandleNavigation";

const {
    COLORS: { ORANGE, WHITE, BLACK, BORDER_GRAY, GRAY, BG_LIGHT_ORANGE },
    FONT_SIZES: { SMALL, MEDIUM, LARGE, XX_LARGE },
} = helpersStyle;

const LocationButton = () => {
    const { handleGoOnboarding } = useHandleNavigation();
    return (
        <TouchableOpacity style={styles.btnLocation} onPress={handleGoOnboarding}>
            <Entypo name="location" size={24} color={ORANGE} />
            <View style={styles.btnLocationHome}>
                <View>
                    <Text style={styles.btnLocationTxt}>Entregar en</Text>
                    <Text style={styles.btnLocationSecondary}>Agrega tu dirección</Text>
                </View>
                <MaterialCommunityIcons name="pencil-outline" size={24} color={BLACK} style={styles.btnAdd} />
            </View>
        </TouchableOpacity>
    );
};

export default LocationButton;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: BG_LIGHT_ORANGE,
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
        backgroundColor: BG_LIGHT_ORANGE,
        borderRadius: 8,
        padding: 8,
    },
    btnLocationHome: {
        flexDirection: 'row',
        gap: 30,
        justifyContent: 'space-between',
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