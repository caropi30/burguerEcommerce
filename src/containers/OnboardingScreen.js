import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Image,
    ScrollView,
} from 'react-native'
import { useDispatch } from 'react-redux'
import useFont from '../hooks/useFont'
import labels from '../constants/labels'
import helpersStyle from '../constants/helpersStyle'
import Step1 from '../components/OnboardingSteps/Step1'
import Step2 from '../components/OnboardingSteps/Step2'
import Step3 from '../components/OnboardingSteps/Step3'
import Header from '../components/Header/Header'
import { useRegisterMutation } from '../services/authApi'
import { useSetUserMutation } from '../services/burgersApi'
import useHandleNavigation from '../hooks/useHandleNavigation'
import {
    setIdToken,
    setAddress as setAddressIdToken,
    setUserData,
} from '../actions/idTokenSlice'
import useIdToken from '../hooks/useIdToken'

const {
    COLORS: { DARK_GRAY, WHITE, ORANGE, BLACK },
    FONT_SIZES: { SMALL_MEDIUM, LARGE },
} = helpersStyle

const OnboardingScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [step, setStep] = useState(1)
    const [triggerRegister] = useRegisterMutation()
    console.log('triggerRegister ONBOARDING', triggerRegister)
    const { fontsLoaded } = useFont()
    const dispatch = useDispatch()
    const { token, userData } = useIdToken()

    useEffect(() => {
        console.log('name', name)
        console.log('email', email)
        console.log('phone', phone)
        console.log('password', password)
        console.log('address', address)
    }, [name, email, phone, password, address])

    useEffect(() => {
        console.log('token', token)
        console.log('userData', userData)
    }, [token])

    const { handleGoHome, handleGoLogin } = useHandleNavigation()

    const handleGoBack = () => {
        if (step === 1) {
            handleGoLogin()
        }
        if (step === 2) {
            setStep(1)
        }

        if (step === 3) {
            setStep(2)
        }
    }

    const renderSubtitle = () => {
        if (step === 1) {
            return 'Cuéntanos sobre ti'
        }

        if (step === 2) {
            return 'Asegura tu cuenta'
        }
        if (step === 3) {
            return '¿Dónde quieres recibir tus compras?'
        }
    }

    const renderContent = () => {
        if (step === 1) {
            return (
                <Step1
                    name={name}
                    handleName={setName}
                    email={email}
                    handleEmail={setEmail}
                    phone={phone}
                    handlePhone={setPhone}
                    handleStep={() => setStep(2)}
                />
            )
        }
        if (step === 2) {
            return (
                <Step2
                    password={password}
                    handlePassword={setPassword}
                    handleStep={() => setStep(3)}
                />
            )
        }
        return (
            <Step3
                address={address.street}
                setAddress={setAddress}
                onPress={onSubmit}
            />
        )
    }

    const handleRegisterInfo = async () => {
        console.log('triggerRegister', triggerRegister)
        try {
            const { data } = await triggerRegister()
            console.log('data handleRegisterInfo Onboarding --->', data)
            // dispatch(
            //     setIdToken({
            //         email: data.email,
            //         token: data.idToken,
            //         localId: data.localId,
            //     })
            // )
            // dispatch(setAddressIdToken({ street: address }))
        } catch (error) {
            console.log('error', error)
        }
    }

    // const handleUserInfo = async (name, email, phone) => {
    //     const { data } = await triggerSetUser()
    //     console.log('data handleUserInfo Onboarding --->', data)
    //     // dispatch(
    //     //     setUserData({
    //     //         name,
    //     //         email: data.email,
    //     //         phone,
    //     //     })
    //     // )
    // }

    const onSubmit = async () => {
        dispatch(
            setIdToken({
                // email: data.email,
                // token: data.idToken,
                // localId: data.localId,
                email,
            })
        )
        dispatch(setAddressIdToken({ street: address }))
        dispatch(
            setUserData({
                name,
                email,
                phone,
            })
        )
        console.log('   entre on submit')
        const response = await triggerRegister({ name, email, phone, password })
        console.log('RESPONSE ON SUBMIT', response)
        handleGoHome()
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header
                isCart
                isOnboarding
                title=""
                goBack={
                    step === 1 || step === 2 || step === 3
                        ? handleGoBack
                        : handleGoHome
                }
            />
            <KeyboardAvoidingView style={styles.container}>
                <Image
                    source={require('../../assets/img/burgerToonLogo.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>¡Te damos la bienvenida!</Text>
                <Text style={styles.subtitle}>{renderSubtitle()}</Text>
                {renderContent()}
            </KeyboardAvoidingView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        paddingTop: 32,
        backgroundColor: WHITE,
        width: '100%',
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: LARGE,
        color: DARK_GRAY,
        marginBottom: 16,
    },
    subtitle: {
        fontFamily: 'Montserrat-Light',
        fontSize: SMALL_MEDIUM,
        marginBottom: 40,
        width: '100%',
    },
    logo: {
        width: 100,
        height: 119,
        marginBottom: 16,
    },
})

export default OnboardingScreen
