import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'
import RegularButton from '../components/RegularButton'
import useHandleNavigation from '../hooks/useHandleNavigation'
import helpersStyle from '../constants/helpersStyle'
import Header from '../components/Header/Header'
import useFont from '../hooks/useFont'
import useIdToken from '../hooks/useIdToken'
import { setClearIdToken } from '../actions/idTokenSlice'

const {
    COLORS: { WHITE, GRAY, DARK_GRAY, BORDER_GRAY },
    FONT_SIZES: { SMALL, MEDIUM },
} = helpersStyle

const AccountScreen = () => {
    const { fontsLoaded } = useFont()
    const { handleGoLogin, handleGoLocation, handleGoHome } =
        useHandleNavigation()
    const { token, address, userData } = useIdToken()
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(setClearIdToken())
        handleGoLogin()
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header isCart title="Mi cuenta" goBack={handleGoHome} />
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <Text style={styles.title}>Información básica</Text>
                    <View style={styles.subcontainerFirtsItem}>
                        <Text style={styles.subcontainerItemsTitle}>
                            Nombre{' '}
                        </Text>
                        <Text style={styles.subcontainerItemsTxt}>
                            {userData.name}{' '}
                        </Text>
                    </View>
                    <View style={styles.subcontainerItems}>
                        <Text style={styles.subcontainerItemsTitle}>
                            Correo{' '}
                        </Text>
                        <Text style={styles.subcontainerItemsTxt}>
                            {token.email}{' '}
                        </Text>
                    </View>
                    <View style={styles.subcontainerItems}>
                        <Text style={styles.subcontainerItemsTitle}>
                            Teléfono{' '}
                        </Text>
                        <Text style={styles.subcontainerItemsTxt}>
                            {userData.phone}{' '}
                        </Text>
                    </View>
                    <View style={styles.subcontainerItems}>
                        <Text style={styles.subcontainerItemsTitle}>
                            Dirección{' '}
                        </Text>
                        <Text style={styles.subcontainerItemsTxt}>
                            {address.street}{' '}
                        </Text>
                    </View>
                </View>
                <View style={styles.btn}>
                    <RegularButton
                        title="Agregar dirección"
                        onPress={handleGoLocation}
                        primary
                    />
                </View>
                <RegularButton
                    title="Cerrar sesión"
                    onPress={onLogout}
                    secondary
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: WHITE,
        width: '100%',
    },
    subcontainer: {
        alignItems: 'flex-start',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: BORDER_GRAY,
    },
    subcontainerFirtsItem: {
        width: '100%',
        paddingVertical: 24,
    },
    subcontainerItems: {
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: BORDER_GRAY,
        paddingVertical: 24,
    },
    subcontainerItemsTitle: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: SMALL,
        color: GRAY,
        marginBottom: 4,
    },
    subcontainerItemsTxt: {
        fontFamily: 'Montserrat-Light',
        fontSize: SMALL,
        color: GRAY,
    },
    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: MEDIUM,
        textAlign: 'left',
        marginBottom: 24,
        color: DARK_GRAY,
    },
    btn: {
        marginTop: 32,
        marginBottom: 16,
        width: '100%',
    },
})

export default AccountScreen
