import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import useFont from '../hooks/useFont';
import labels from '../constants/labels';
import helpersStyle from '../constants/helpersStyle';
import Step1 from '../components/OnboardingSteps/Step1';
import Step2 from '../components/OnboardingSteps/Step2';
import Step3 from '../components/OnboardingSteps/Step3';
import Header from '../components/Header/Header';
import { useRegisterMutation } from '../services/authApi';
import { useSetUserMutation } from '../services/burgersApi';
import useHandleNavigation from '../hooks/useHandleNavigation';
import { setIdToken, setAddress as setAddressIdToken } from '../actions/idTokenSlice';
import useIdToken from '../hooks/useIdToken';
import { deleteSession, insertSession } from '../db';


const { COLORS: { DARK_GRAY, WHITE, ORANGE, BLACK }, FONT_SIZES: { SMALL_MEDIUM, LARGE } } = helpersStyle;

const OnboardingScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [house, setHouse] = useState('');
    const [step, setStep] = useState(1)
    const [triggerRegister] = useRegisterMutation();
    const [triggerSetUser] = useSetUserMutation();
    const { fontsLoaded } = useFont();
    const dispatch = useDispatch();
    const { name: nombre, token, email: correo, address: direccion } = useIdToken();
    console.log('OnboardingScreen ----->',)
    console.log('nombre', nombre)
    console.log('token', token)
    console.log('correo', correo)
    console.log('direccion', direccion)

    useEffect(() => {
        console.log('OnboardingScreen USE EFFECT ----->',)
        console.log('name', name)
        console.log('email', email)
        console.log('phone', phone)
        console.log('password', password)
        console.log('address', address)
        console.log('house', house)

    }, [name, email, phone, password, address, house]);

    useEffect(() => {
        console.log('nombre', nombre)
        console.log('token', token)
        console.log('correo', correo)
        console.log('direccion', direccion)
    }, [nombre, token, correo, direccion]);

    const { handleGoHome, handleGoLogin } = useHandleNavigation();

    const handleGoBack = () => {
        if (step === 1) {
            handleGoLogin();
        }
        if (step === 2) {
            setStep(1);
        };

        if (step === 3) {
            setStep(2);
        };
    };

    const renderSubtitle = () => {
        if (step === 1) {
            return 'Cuéntanos sobre ti';
        }

        if (step === 2) {
            return 'Asegura tu cuenta';
        }
        if (step === 3) {
            return '¿Dónde quieres recibir tus compras?';
        }
    };

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
            );
        }
        if (step === 2) {
            return (
                <Step2
                    password={password}
                    handlePassword={setPassword}
                    handleStep={() => setStep(3)}
                />
            );
        }
        return (
            <Step3
                address={address.street}
                setAddress={setAddress}
                house={house}
                setHouse={setHouse}
                onPress={onSubmit}
            />
        );
    };

    const handleRegisterInfo = async () => {
        try {
            const { data } = await triggerRegister({ email, password });
            insertSession({ email: data.email, token: data.idToken });
            deleteSession();
            dispatch(setIdToken({
                name: name,
                email: data.email,
                password: password,
                token: data.idToken,
                address: address,
                phone: phone
            }));
            dispatch(setAddressIdToken({ street: address }));
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleUserInfo = async (name, email, phone) => {
        console.log('name handleUserInfo', name)
        const { data } = await triggerSetUser({
            name,
            email,
            phone,
            password,
            token,
            address,
        });
        console.log('data handleUserInfo', data)
    };

    const onSubmit = async () => {
        await handleRegisterInfo();
        await handleUserInfo(name, email, phone);
        handleGoHome();
    };


    return (
        <>
            <Header isCart={true} isOnboarding={true} title='' goBack={step == 1 || step === 2 || step === 3 ? handleGoBack : handleGoHome} />
            <KeyboardAvoidingView style={styles.container}>
                <Image source={require('../../assets/img/burgerToonLogo.png')} style={styles.logo} />
                <Text style={styles.title}>¡Te damos la bienvenida!</Text>
                <Text style={styles.subtitle}>{renderSubtitle()}</Text>
                {renderContent()}
            </KeyboardAvoidingView>
        </>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        paddingTop: 32,
        backgroundColor: WHITE
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
    logo: {
        width: 100,
        height: 119,
        marginBottom: 16
    }
});

export default OnboardingScreen;
