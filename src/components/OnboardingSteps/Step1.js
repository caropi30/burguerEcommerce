import React from 'react'
import { View, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Input from '../Input'
import useFont from '../../hooks/useFont'
import labels from '../../constants/labels'
import helpersStyle from '../../constants/helpersStyle'
import RegularButton from '../RegularButton'

const {
    COLORS: { DARK_GRAY, ORANGE },
    FONT_SIZES: { SMALL, LARGE },
} = helpersStyle

const Step1 = ({
    name,
    handleName,
    email,
    handleEmail,
    phone,
    handlePhone,
    handleStep,
}) => {
    const { fontLoaded } = useFont()

    return (
        <>
            <View style={styles.container}>
                <Input
                    label="¿Cómo te llamas?"
                    onChangeText={(e) => handleName(e)}
                    value={name}
                    onFocus
                    placeholder="name"
                >
                    <AntDesign name="user" size={25} color={ORANGE} />
                </Input>
                <Input
                    label="¿Cuál es tu email?"
                    onChangeText={(e) => handleEmail(e)}
                    value={email}
                    onFocus
                    placeholder="email"
                >
                    <MaterialCommunityIcons
                        name="email-fast-outline"
                        size={25}
                        color={ORANGE}
                    />
                </Input>
                <Input
                    label="¿Cuál es tu teléfono?"
                    onChangeText={(e) => handlePhone(e)}
                    value={phone}
                    onFocus
                    placeholder="phone"
                >
                    <SimpleLineIcons
                        name="screen-smartphone"
                        size={25}
                        color={ORANGE}
                    />
                </Input>
            </View>
            <RegularButton title="Continuar" onPress={handleStep} primary />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        width: '100%',
    },
    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: SMALL,
        color: DARK_GRAY,
        textAlign: 'left',
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '100%',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
    },
})

export default Step1
