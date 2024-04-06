import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import helpersStyle from "../constants/helpersStyle";
import useIdToken from "../hooks/useIdToken";

const { COLORS: { ORANGE } } = helpersStyle;

const Map = ({ latitude, longitude }) => {
    const { addressIdToken } = useIdToken();
    console.log('addressIdToken mapa', addressIdToken)
    console.log('addressIdToken.latitude', addressIdToken.latitude)

    const mapPreview =
        `https://maps.googleapis.com/maps/api/staticmap?center=${addressIdToken.latitude},${addressIdToken.longitude}
        &zoom=13
        &size=600x300
        &maptype=roadmap
        &markers=color:blue%7Clabel:S%7C${addressIdToken.latitude},${addressIdToken.longitude}
        &key=AIzaSyC1iu3KVtQ709zrQ1MKLDu5KT3nILs0EVM`;

    return (
        <View style={styles.container} >
            {latitude ? <Image style={styles.map} source={{ uri: mapPreview }} /> : <Text>Mapa no disponible</Text>}
        </View>
    );
};

export default Map;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        borderRadius: 8,
        width: 350,
        height: 300,
    }
});