import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import Card from './Card';
import RadioSelect from './RadioSelect';
import CheckboxSelect from './CheckBoxSelect/CheckboxSelect';
import RegularButton from './RegularButton';
import helpersStyle from '../constants/helpersStyle';
import labels from '../constants/labels';
import useFont from '../hooks/useFont';

const { COLORS: { BLACK }, FONT_SIZES: { MEDIUM } } = helpersStyle;

const { PDP: { COMMENT } } = labels;

const ProductDetail = ({ title, icon, radioTitle, checkboxTitle, radioData, checkboxData, secondaryCheckBox, secondaryCheckBoxTitle }) => {

    console.log('ProductDetail', title, icon, radioTitle, checkboxTitle, radioData, 'checkboxData -->', checkboxData, 'secondaryCheckBox -->', secondaryCheckBox, secondaryCheckBoxTitle)
    const { fontsLoaded } = useFont();

    return (
        <ScrollView indicatorStyle='white'>
            <Card itemTitle={title} icon={icon} />
            <Text style={styles.title}>{title}</Text>
            {/* {radioData && <RadioSelect title={radioTitle} radioData={radioData} />} */}
            {checkboxData && <CheckboxSelect title={checkboxTitle} checkboxData={checkboxData} />}
            {secondaryCheckBox && <CheckboxSelect title={secondaryCheckBoxTitle} checkboxData={secondaryCheckBox} />}
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
            <RegularButton title="Añadir al carrito" />
        </ScrollView>
    )
};

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
        marginTop: 10,
        //textTransform: 'capitalize',
    },
    textArea: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: BLACK,
        width: '100%',
        padding: 10,
        marginTop: 4,
    }
});

export default ProductDetail;
