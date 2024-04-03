import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import ProductDetail from '../components/ProductDetail'
import Header from '../components/Header/Header'
import helpersStyle from '../constants/helpersStyle'
import useFilterProductDetail from '../hooks/useFilterProductDetail'
import useGetTitle from '../hooks/useGetTitle'
import labels from '../constants/labels'

const {
    COLORS: { WHITE },
} = helpersStyle

const {
    CATEGORIES,
    PDP: { HAMBURGUESA, BEBIDAS, PAPAS },
    PRODUCT_TYPE: { INDIVIDUALES },
} = labels

const ProductDetailScreen = () => {
    const { title } = useGetTitle()
    const { filteredProductDetail, isFetching } = useFilterProductDetail()
    const productInfoDetail = filteredProductDetail[0]
    const navigation = useNavigation()
    const route = useRoute()

    const handleNavigation = () =>
        navigation.navigate('Cart', { screen: 'CartScreen' })

    const handleGoBack = () =>
        navigation.navigate('Category', {
            screen: 'CategoryScreen',
            title: INDIVIDUALES,
        })

    const productInfoDetailId = productInfoDetail?.id

    const renderTypeInfo = () => {
        if (productInfoDetailId === CATEGORIES.HAMBURGUESA) {
            return (
                <ProductDetail
                    cardTitle={productInfoDetail?.title}
                    title={HAMBURGUESA.TITLE}
                    icon={productInfoDetail.icon}
                    radioTitle={HAMBURGUESA.RADIO_TITLE}
                    radioData={productInfoDetail?.items?.proteinas}
                    checkboxTitle={HAMBURGUESA.CHECKBOX_TITLE}
                    checkboxData={productInfoDetail?.items?.salsas}
                    secondaryCheckBoxTitle={
                        HAMBURGUESA.SECONDARY_CHECKBOX_TITLE
                    }
                    secondaryCheckBox={productInfoDetail?.items?.vegetales}
                    price={productInfoDetail?.precio}
                />
            )
        }

        if (productInfoDetailId === CATEGORIES.BEBIDAS) {
            return (
                <ProductDetail
                    cardTitle={productInfoDetail?.title}
                    title={BEBIDAS.TITLE}
                    icon={productInfoDetail?.icon}
                    radioTitle={BEBIDAS.RADIO_TITLE}
                    radioData={productInfoDetail?.items?.bebidas}
                    price={productInfoDetail?.precio}
                />
            )
        }

        if (productInfoDetailId === CATEGORIES.PAPAS) {
            return (
                <ProductDetail
                    cardTitle={productInfoDetail.title}
                    title={PAPAS.TITLE}
                    icon={productInfoDetail.icon}
                    radioTitle={PAPAS.RADIO_TITLE}
                    radioData={productInfoDetail?.items?.tipos}
                    checkboxTitle={PAPAS.CHECKBOX_TITLE}
                    checkboxData={productInfoDetail?.items?.salsas}
                    price={productInfoDetail?.precio}
                />
            )
        }

        return <Text>No hay información</Text>
    }

    const renderSkeleton = () => <Text>Cargando...</Text>

    return (
        <>
            <Header
                isHome={false}
                goBack={handleGoBack}
                isLoading={isFetching}
            />
            {!isFetching ? (
                <View style={styles.container}>{renderTypeInfo()}</View>
            ) : (
                renderSkeleton()
            )}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE,
        padding: 16,
    },
})

export default ProductDetailScreen
