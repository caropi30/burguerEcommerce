import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from '../components/Card';
import RegularButton from '../components/RegularButton';
import ComboDetail from '../components/ComboDetail/ComboDetail';
import { useRoute } from '@react-navigation/native';
import useFont from '../hooks/useFont';
import Header from '../components/Header/Header';
import useHandleNavigation from '../hooks/useHandleNavigation';
import useGetSubcategories from '../hooks/useGetSubcategories';
import { useGetComboProductsQuery } from '../services/burgersApi';
import helpersStyle from '../constants/helpersStyle';
import labels from '../constants/labels';

const { COLORS: { WHITE } } = helpersStyle;

const { PRODUCT_TYPE: { INDIVIDUALES } } = labels;

const CategoryScreen = () => {
    const [price, setPrice] = useState(0)
    console.log('price categoryScreen', price)
    const { handleGoHome, handleProductDetail, handleGoCart } = useHandleNavigation();
    const { subcategories } = useGetSubcategories();
    const { data: comboData, isError, isFetching: isFetchingComboData, isSuccess } = useGetComboProductsQuery();
    const { fontsLoaded } = useFont();
    const route = useRoute();
    const data = route?.params?.subcategories;
    const title = route?.params?.title;

    const comboPaymentButton = `Añadir al carrito ${price !== 0 ? `$${price}` : ''}`;

    return (
        <>
            <Header isHome={false} goBack={handleGoHome} />
            <View style={styles.container}>
                <Text style={styles.title}>{route?.params?.title}</Text>
                {title === INDIVIDUALES ? (
                    <FlatList
                        data={subcategories}
                        renderItem={({ item }) => (
                            <Card id={item.id} title={item.title} icon={item.icon} price={item.price} onPress={handleProductDetail} />
                        )}
                        keyExtractor={(item) => item.id}
                    />
                ) : <>
                    <ComboDetail data={comboData} isFetching={isFetchingComboData} setPrice={setPrice} />
                    <View style={styles.paymentBtn}>
                        <RegularButton title={comboPaymentButton} onPress={handleGoCart} primary />
                    </View>
                </>}
            </View>
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
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 30,
        marginBottom: 16,
        alignSelf: 'flex-start',
        textTransform: 'capitalize',
    },
    paymentBtn: {
        marginTop: 0,
        paddingHorizontal: 16,
        paddingBottom: 20,
        backgroundColor: WHITE,
    }
});

export default CategoryScreen;
