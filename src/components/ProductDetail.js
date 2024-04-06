import React from 'react';
import { Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import Card from './Card';
import RadioSelect from './RadioSelect';
import CheckboxSelect from './CheckBoxSelect/CheckboxSelect';
import RegularButton from './RegularButton';
import helpersStyle from '../constants/helpersStyle';
import labels from '../constants/labels';
import useFont from '../hooks/useFont';
import useHandleNavigation from '../hooks/useHandleNavigation';

const { COLORS: { BLACK }, FONT_SIZES: { MEDIUM } } = helpersStyle;

const { PDP: { COMMENT, BTN_CART } } = labels;

const ProductDetail = ({
    cardTitle,
    title,
    icon,
    radioTitle,
    checkboxTitle,
    radioData,
    radioValue,
    setRadioValue,
    checkboxData,
    checkboxes,
    setCheckboxes,
    selectedBoxes,
    setSelectedBoxes,
    secondaryCheckBox,
    secondaryCheckBoxTitle,
    secondaryCheckboxes,
    setSecondaryCheckboxes,
    secondarySelectedBoxes,
    setSecondarySelectedBoxes,
    price }) => {
    const { fontsLoaded } = useFont();
    const { handleGoCart } = useHandleNavigation();

    return (
        <ScrollView indicatorStyle='white'>
            <Card title={cardTitle} icon={icon} />
            <Text style={styles.title}>{title}</Text>
            {radioData && <RadioSelect
                radioTitle={radioTitle}
                radioData={radioData}
                radioValue={radioValue}
                setRadioValue={setRadioValue} />}
            {checkboxes && <CheckboxSelect
                title={checkboxTitle}
                checkboxData={checkboxData}
                checkboxes={checkboxes}
                setCheckboxes={setCheckboxes}
                selectedBoxes={selectedBoxes}
                setSelectedBoxes={setSelectedBoxes} />}
            {secondaryCheckboxes && <CheckboxSelect
                title={secondaryCheckBoxTitle}
                checkboxData={secondaryCheckBox}
                checkboxes={secondaryCheckboxes}
                setCheckboxes={setSecondaryCheckboxes}
                selectedBoxes={secondarySelectedBoxes}
                setSelectedBoxes={setSecondarySelectedBoxes} />}
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
        marginTop: 16,
        fontFamily: 'Montserrat-SemiBold',
        //textTransform: 'capitalize',
    },
    textArea: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: BLACK,
        width: '100%',
        height: 100,
        padding: 10,
        marginTop: 4,
    }
});

export default ProductDetail;
