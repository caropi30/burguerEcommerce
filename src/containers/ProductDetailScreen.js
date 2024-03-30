import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProductDetail from '../components/ProductDetail';
import Header from '../components/Header/Header';
import RegularButton from '../components/RegularButton';
import helpersStyle from '../constants/helpersStyle';
import useFilterProductDetail from '../hooks/useFilterProductDetail';
import { render } from 'react-dom';

const { COLORS: { WHITE } } = helpersStyle;

const ProductDetailScreen = () => {
    const { filteredProductDetail, isFetching } = useFilterProductDetail();
    console.log('isFetching PDP', isFetching)
    console.log('filteredProductDetail PDP', filteredProductDetail)
    const productInfoDetail = filteredProductDetail[0];
    const navigation = useNavigation();

    const handleNavigation = () => navigation.navigate('Cart', { screen: 'CartScreen' });

    const handleGoBack = () => navigation.navigate('Category', { screen: 'CategoryScreen', });

    const productInfoDetailId = productInfoDetail?.id;

    const renderTypeInfo = () => {
        console.log('productInfoDetailId renderTypeInfo --->', productInfoDetailId)

        if (productInfoDetailId === 'hamburguesa') {
            return (
                <ProductDetail
                    title={productInfoDetail.title}
                    icon={productInfoDetail.icon}
                    radioData={productInfoDetail?.items?.proteinas}
                    checkboxData={productInfoDetail?.items?.salsas}
                    secondaryCheckBox={productInfoDetail?.items?.vegetales}
                    secondaryCheckBoxTitle=""
                />
            );
        }

        if (productInfoDetailId === 'bebidas') {
            return <ProductDetail title={productInfoDetail?.title} icon={productInfoDetail?.icon} checkboxData={productInfoDetail?.items?.bebidas} />;
        }

        if (productInfoDetailId === 'papas') {
            return <ProductDetail title={productInfoDetail.title} icon={productInfoDetail.icon} checkboxData={productInfoDetail?.items?.tipo} secondaryCheckBox={productInfoDetail?.items?.tamanos} />;
        }

        return <Text>No hay información</Text>

    };

    const renderSkeleton = () => {
        return <Text>Loading...</Text >
    };

    return (
        <>
            <Header isHome={false} goBack={handleGoBack} isLoading={isFetching} />
            {!isFetching ? <View style={styles.container}>{renderTypeInfo()}</View>
                : renderSkeleton()}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        padding: 16,
    },
});

export default ProductDetailScreen;
