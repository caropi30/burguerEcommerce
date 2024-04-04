import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Input from "../components/Input";
import RegularButton from "../components/RegularButton";
import LinkButton from "../components/LinkButton";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import helpersStyle from "../constants/helpersStyle";
import labels from "../constants/labels";
import useHandleNavigation from "../hooks/useHandleNavigation";
import useGetUser from "../hooks/useGetUser";

const { COLORS: { ORANGE, WHITE } } = helpersStyle;

const LoginScreen = () => {
    const [securePass, setSecurePass] = useState(true)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const { handleGoHome, handleGoOnboarding } = useHandleNavigation();

    const handleCredentials = () => {
        console.log('email', email)
        console.log('password', password)
        handleGoHome()
    }


    return (
        <View style={styles.container}>
            <Text>ACA VA EL LOGO</Text>
            <Input label="¿Cuál es tu email?" onChangeText={(e) => setEmail(e)} value={email} onFocus placeholder='email' isSecure={false}>
                <MaterialCommunityIcons name="email-fast-outline" size={25} color={ORANGE} />
            </Input >
            <Input label="Ingresar contraseña" onChangeText={(e) => setPassword(e)} value={password} placeholder="password" isSecure={securePass}>
                {securePass ?
                    <Ionicons name="eye-off-outline" size={25} color={ORANGE} onPress={() => setSecurePass(!securePass)} />
                    : <Ionicons name="eye-outline" size={25} color={ORANGE} onPress={() => setSecurePass(!securePass)} />}
            </Input>
            <LinkButton title="Regístrate aquí" onPress={handleGoOnboarding} />
            <RegularButton title="Ingresar" onPress={handleCredentials} />
        </View>
    )
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: WHITE
    }
});