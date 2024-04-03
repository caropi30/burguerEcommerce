import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import useFont from '../hooks/useFont'
import labels from '../constants/labels'
import helpersStyle from '../constants/helpersStyle'
import Step1 from '../components/OnboardingSteps/Step1'
import Step2 from '../components/OnboardingSteps/Step2'
import Step3 from '../components/OnboardingSteps/Step3'
import Header from '../components/Header/Header'
import { useRegisterMutation } from '../services/authApi'
import useHandleNavigation from '../hooks/useHandleNavigation'

const {
    COLORS: { DARK_GRAY, WHITE, ORANGE, BLACK },
    FONT_SIZES: { SMALL_MEDIUM, LARGE },
} = helpersStyle

const OnboardingScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [step, setStep] = useState(1)
    const [triggerRegister] = useRegisterMutation()
    const { fontsLoaded } = useFont()
    const navigation = useNavigation()
    const { handleGoHome } = useHandleNavigation()

    const handleGoBack = () => {
        if (step === 2) {
            setStep(1)
        }

        if (step === 3) {
            setStep(2)
        }
    }

    const onSubmit = async () => {
        const { data } = await triggerRegister({ name, email, phone, password })
        console.log('data id token', data.idToken)
    }

    useEffect(() => {
        console.log('name', name)
        console.log('email', email)
        console.log('phone', phone)
        console.log('password', password)
    }, [email, name, phone, password])

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
                    // handleStep={() => setStep(3)}
                    handleStep={onSubmit}
                />
            )
        }
        // return <Step3 />;
        return <Text>Bienvenido</Text>
    }

    return (
        <>
            <Header
                isCart
                title=""
                goBack={step === 2 || step === 3 ? handleGoBack : handleGoHome}
            />
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.title}>¡Te damos la bienvenida!</Text>
                <Text style={styles.subtitle}>Cuéntanos sobre ti</Text>
                {renderContent()}
                {/* < Step3 /> */}
            </KeyboardAvoidingView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: WHITE,
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
    },
})

export default OnboardingScreen
