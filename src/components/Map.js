import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import helpersStyle from '../constants/helpersStyle'
import useIdToken from '../hooks/useIdToken'

const {
    COLORS: { ORANGE },
} = helpersStyle

const Map = ({ latitude, longitude }) => {
    const { address } = useIdToken()
    console.log('address MAP', address)
    const mapPreview = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}
        &zoom=13
        &size=600x300
        &maptype=roadmap
        &markers=color:blue%7Clabel:S%7C${latitude},${longitude}
        &key=AIzaSyC1iu3KVtQ709zrQ1MKLDu5KT3nILs0EVM`

    return (
        <View style={styles.container}>
            {!latitude ? (
                <Text>Mapa no disponible</Text>
            ) : (
                <Image style={styles.map} source={{ uri: mapPreview }} />
            )}
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        borderRadius: 8,
        width: 350,
        height: 300,
    },
})
