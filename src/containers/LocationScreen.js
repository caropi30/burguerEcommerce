import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useHandleNavigation from '../hooks/useHandleNavigation';
import Header from '../components/Header/Header';
import RegularButton from '../components/RegularButton';
import Input from '../components/Input';
import Map from '../components/Map';
import * as Location from 'expo-location';
import useIdToken from '../hooks/useIdToken';
import helpersStyle from '../constants/helpersStyle';
import { setAddress as setAddressIdToken } from '../actions/idTokenSlice';

const { COLORS: { ORANGE, WHITE, GRAY, BLACK } } = helpersStyle;

const LocationScreen = () => {
    const [location, setLocation] = useState({ latitude: '', longitude: '' });
    const [errrMsg, setErrMsg] = useState(null);
    const [address, setAddress] = useState(direccion);
    const { address: direccion, addressIdToken } = useIdToken();
    const dispatch = useDispatch();

    const { handleGoHome } = useHandleNavigation();

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permiso para acceder a location: DENEGADO');
            }

            let location = await Location.getCurrentPositionAsync();
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            });
        })()
    }, []);

    useEffect(() => {
        (async () => {
            if (location.latitude || direccion) {
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}
                &key=AIzaSyC1iu3KVtQ709zrQ1MKLDu5KT3nILs0EVM`);
                const data = await response.json();
            }
        })();
    }, [location, address]);


    const geocode = async () => {
        const geocodedLocation = await Location.geocodeAsync(address);

        setLocation({
            latitude: geocodedLocation[0].latitude,
            longitude: geocodedLocation[0].longitude
        });

        dispatch(setAddressIdToken({
            street: address,
            latitude: geocodedLocation[0].latitude,
            longitude: geocodedLocation[0].longitude
        }));

    };

    return (
        <>
            <Header isCart={true} title='Mi dirección' goBack={handleGoHome} />
            <View style={styles.container}>
                <Map longitude={location.longitude} latitude={location.latitude} />
                <View style={styles.address}>
                    <Text style={styles.btnLocationTxt}>Dirección registrada</Text>
                    {addressIdToken.street ? <Text style={styles.btnLocationSecondary} >{addressIdToken.street}</Text>
                        : <Text style={styles.btnLocationSecondary} >No existe registro de dirección</Text>}
                </View>
                <View style={styles.inputs}>
                    <Input label="¿Cuál es tu dirección?" onChangeText={(e) => setAddress(e)} value={address} placeholder="address">
                        <Ionicons name="location-outline" size={25} color={ORANGE} placeholder="Dirección" />
                    </Input>
                </View>
                <View style={styles.btn}>
                    <RegularButton title="Confirmar dirección" primary onPress={geocode} />
                </View>
            </View >
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        alignItems: 'center',
        padding: 16,
        paddingTop: 32
    },
    inputs: {
        marginTop: 20,
        width: '100%'
    },
    btn: {
        marginVertical: 16,
        width: '100%',
    },
    text: {
        fontFamily: 'Montserrat-Light',
        fontSize: 16,
    },
    address: {
        marginTop: 16,
        width: '100%',
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
});

export default LocationScreen;
