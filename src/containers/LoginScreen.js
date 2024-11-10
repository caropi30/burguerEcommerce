import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Input from '../components/Input'
import RegularButton from '../components/RegularButton'
import { useLoginMutation } from '../services/authApi'
import helpersStyle from '../constants/helpersStyle'
import labels from '../constants/labels'
import useHandleNavigation from '../hooks/useHandleNavigation'
import useFont from '../hooks/useFont'
import { setIdToken, setClearIdToken } from '../actions/idTokenSlice'
import useIdToken from '../hooks/useIdToken'
import { useGetUserQuery } from '../services/burgersApi'

const {
    COLORS: { ORANGE, WHITE },
} = helpersStyle

const LoginScreen = () => {
    const { user } = useGetUserQuery()
    console.log('LoginScreen user ----->', user)
    const { fontsLoaded } = useFont()
    const [errorMsg, setErrorMsg] = useState(null)
    const [securePass, setSecurePass] = useState(true)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const { handleGoHome, handleGoOnboarding } = useHandleNavigation()
    const dispatch = useDispatch()
    const [triggerLogin] = useLoginMutation()
    const { token, userData } = useIdToken()
    console.log('LoginScreen  token----->', token)
    console.log('LoginScreen  userData----->', userData)
    const handleCredentials = async () => {
        const { data } = await triggerLogin({ email, password })
        console.log('LoginScreen ----->')
        console.log('LoginScreen data  ----->', data)
        dispatch(
            setIdToken({
                email: data.email,
                token: data.idToken,
                localId: data.localId,
            })
        )

        if (token?.token) {
            handleGoHome()
        } else {
            setErrorMsg('Credenciales incorrectas')
        }
    }

    const renderContent = () => (
        <View style={styles.container}>
            <Image
                source={require('../../assets/img/burgerToonLogo.png')}
                style={styles.logo}
            />
            <Input
                label="¿Cuál es tu email?"
                onChangeText={(e) => setEmail(e)}
                value={email}
                onFocus
                placeholder="email"
                isSecure={false}
            >
                <MaterialCommunityIcons
                    name="email-fast-outline"
                    size={25}
                    color={ORANGE}
                />
            </Input>
            <Input
                label="Ingresar contraseña"
                onChangeText={(e) => setPassword(e)}
                value={password}
                placeholder="password"
                isSecure={securePass}
            >
                {securePass ? (
                    <Ionicons
                        name="eye-off-outline"
                        size={25}
                        color={ORANGE}
                        onPress={() => setSecurePass(!securePass)}
                    />
                ) : (
                    <Ionicons
                        name="eye-outline"
                        size={25}
                        color={ORANGE}
                        onPress={() => setSecurePass(!securePass)}
                    />
                )}
            </Input>
            {errorMsg && <Text style={styles.erroMsg}>{errorMsg}</Text>}
            <RegularButton
                title="Ingresar"
                onPress={handleCredentials}
                primary
            />
            <View style={styles.btnContainer}>
                <RegularButton
                    title="Regístrate aquí"
                    onPress={handleGoOnboarding}
                    secondary
                />
            </View>
        </View>
    )

    return fontsLoaded && renderContent()
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: WHITE,
    },
    splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: ORANGE,
    },
    btnContainer: {
        backgroundColor: WHITE,
        width: '100%',
        marginTop: 16,
    },
    erroMsg: {
        color: ORANGE,
        fontFamily: 'Montserrat-Light',
        marginBottom: 16,
    },
    logo: {
        width: 100,
        height: 119,
        marginBottom: 16,
    },
})
