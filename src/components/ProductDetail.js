import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import Card from './Card'
import RadioSelect from './RadioSelect'
import CheckboxSelect from './CheckBoxSelect/CheckboxSelect'
import RegularButton from './RegularButton'
import helpersStyle from '../constants/helpersStyle'
import labels from '../constants/labels'
import useFont from '../hooks/useFont'

const {
    COLORS: { BLACK },
    FONT_SIZES: { MEDIUM },
} = helpersStyle

const {
    PDP: { COMMENT, BTN_CART },
} = labels

const ProductDetail = ({
    cardTitle,
    title,
    icon,
    radioTitle,
    checkboxTitle,
    radioData,
    checkboxData,
    secondaryCheckBox,
    secondaryCheckBoxTitle,
    price,
}) => {
    const { fontsLoaded } = useFont()

    return (
        <>
            <ScrollView indicatorStyle="white">
                <Card title={cardTitle} icon={icon} />
                <Text style={styles.title}>{title}</Text>
                {radioData && (
                    <RadioSelect
                        radioTitle={radioTitle}
                        radioData={radioData}
                    />
                )}
                {checkboxData && (
                    <CheckboxSelect
                        title={checkboxTitle}
                        checkboxData={checkboxData}
                    />
                )}
                {secondaryCheckBox && (
                    <CheckboxSelect
                        title={secondaryCheckBoxTitle}
                        checkboxData={secondaryCheckBox}
                    />
                )}
                <Text style={styles.textComment}>{COMMENT}</Text>
                <TextInput
                    placeholder="Añadir comentario"
                    placeholderTextColor={BLACK}
                    autoCapitalize="words"
                    caretHidden
                    inputMode="text"
                    maxLength={140}
                    multiline
                    numberOfLines={3}
                    style={styles.textArea}
                />
            </ScrollView>
            <RegularButton title={BTN_CART} price={price} />
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: MEDIUM,
        fontFamily: 'Montserrat-Bold',
        marginTop: 16,
        marginBottom: 26,
        textTransform: 'capitalize',
    },
    textComment: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10,
        marginTop: 16,
        fontFamily: 'Montserrat-SemiBold',
        // textTransform: 'capitalize',
    },
    textArea: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: BLACK,
        width: '100%',
        height: 100,
        padding: 10,
        marginTop: 4,
    },
})

export default ProductDetail
