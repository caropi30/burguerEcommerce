import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import useFont from '../hooks/useFont'
import labels from '../constants/labels'
import helpersStyle from '../constants/helpersStyle'

const {
    COLORS: { DARK_GRAY },
    FONT_SIZES: { SMALL },
} = helpersStyle

const Input = ({
    label,
    children,
    onChangeText,
    value,
    placeholder,
    isError,
    isSecure,
}) => {
    const { fontLoaded } = useFont()
    const navigation = useNavigation()
    const handleNavigation = () => {
        navigation.navigate('HomeStack', { screen: 'HomeScreen' })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>
            <View style={styles.input}>
                <TextInput
                    onChangeText={onChangeText}
                    secureTextEntry={isSecure}
                    value={value}
                    placeholder={placeholder}
                />
                {children}
            </View>
            {isError ? <Text style={styles.error}>{isError}</Text> : null}
        </View>
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
        marginBottom: 4,
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '100%',
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
    },
})

export default Input
