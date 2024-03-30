import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import useFont from '../hooks/useFont';
import helpersStyle from '../constants/helpersStyle';
import { setSubcategories } from '../actions/subcategoriesSlice';
import Card from '../components/Card';
import Header from '../components/Header/Header';
import { useGetCategoriesQuery, useGetComboProductsQuery, useGetIndividualProductsQuery } from '../../src/services/burgersApi';
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade
} from "rn-placeholder";

const {
    COLORS: { WHITE, BLACK, BG_LIGHT_GRAY, BORDER_YELLOW },
    FONT_SIZES: { SMALL, MEDIUM, LARGE, XX_LARGE },
} = helpersStyle;

const HomeScreen = () => {
    const { data, isLoading } = useGetCategoriesQuery();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { fontsLoaded } = useFont();
    const handleCategoryFilter = (title, subcategories) => {
        navigation.navigate('Category', { title, subcategories });
        dispatch(setSubcategories(subcategories));
    };

    const renderSkeleton = () => (
        <View style={styles.container}>
            <Placeholder
                Animation={Fade}
            >
                <PlaceholderLine width={85} />
                <View style={styles.info}>
                    <PlaceholderLine width={85} />
                    <PlaceholderLine width={85} />
                </View>
                <PlaceholderLine width={85} />
                <PlaceholderLine width={85} />
            </Placeholder>
        </View>
    );

    const renderContent = () => (
        <View style={styles.container} >
            <Text style={styles.userTxt}>Hola, Caro</Text>
            <View style={styles.info}>
                <Text style={styles.title}>¿Qué te provoca hoy?</Text>
                <Text style={styles.paragraph}>Escoge entre nuestras opciones individuales y combos</Text>
            </View>
            <>
                {data.map(item => <Card key={item.id} title={item.title} icon={item.icon} onPress={() => handleCategoryFilter(item.title, item.subcategories)} />)}
            </>
        </View >
    );

    return (
        <>
            <Header isHome={true} isLoading={isLoading} />
            {isLoading ? renderSkeleton() : renderContent()}

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: WHITE,
    },
    info: {
        alignItems: 'flex-start',
    },
    userTxt: {
        fontFamily: 'Montserrat-Bold',
        fontSize: LARGE,
        lineHeight: 30,
        marginBottom: 16,
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: MEDIUM,
        lineHeight: 30,
    },
    paragraph: {
        fontFamily: 'Montserrat-Light',
        fontSize: SMALL,
        lineHeight: 19,
    },
});

export default HomeScreen;
