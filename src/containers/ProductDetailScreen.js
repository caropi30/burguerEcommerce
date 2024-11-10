import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import ProductDetail from '../components/ProductDetail'
import Header from '../components/Header/Header'
import helpersStyle from '../constants/helpersStyle'
import useFilterProductDetail from '../hooks/useFilterProductDetail'
import useHandleNavigation from '../hooks/useHandleNavigation'
import labels from '../constants/labels'
import { setItems } from '../actions/cartSlice'
import RegularButton from '../components/RegularButton'
import randomId from '../utils/randomId'

const {
    COLORS: { WHITE },
} = helpersStyle

const {
    CATEGORIES,
    PDP: { HAMBURGUESA, BEBIDAS, PAPAS },
    PRODUCT_TYPE: { INDIVIDUALES },
} = labels

const ProductDetailScreen = () => {
    const [title, setTitle] = useState('')
    const [icon, setIcon] = useState('')
    const [id, setId] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [checkboxes, setCheckboxes] = useState([])
    const [selectedBoxes, setSelectedBoxes] = useState([])
    const [secondarySelectedBoxes, setSecondarySelectedBoxes] = useState([])
    const [secondaryCheckboxes, setSecondaryCheckboxes] = useState([])
    const [radioValue, setRadioValue] = useState('')
    const { filteredProductDetail, isFetching } = useFilterProductDetail()
    const { handleGoCategory, handleGoCart } = useHandleNavigation()

    const productInfoDetail = filteredProductDetail[0]
    const productInfoDetailHamburguesa =
        productInfoDetail?.id === CATEGORIES.HAMBURGUESA
    const productInfoDetailBebidas =
        productInfoDetail?.id === CATEGORIES.BEBIDAS
    const productInfoDetailPapas = productInfoDetail?.id === CATEGORIES.PAPAS
    const dispatch = useDispatch()

    useEffect(() => {
        if (productInfoDetailHamburguesa) {
            setTitle(productInfoDetail?.title)
            setIcon(productInfoDetail?.icon)
            setId(productInfoDetail?.id)
            setPrice(productInfoDetail?.precio)
            setCheckboxes(productInfoDetail?.items?.salsas || [])
            setSecondaryCheckboxes(productInfoDetail?.items?.vegetales || [])
            setQuantity(quantity)
        }
        if (productInfoDetailBebidas) {
            setTitle(productInfoDetail?.title)
            setIcon(productInfoDetail?.icon)
            setId(productInfoDetail?.id)
            setPrice(productInfoDetail?.precio)
            setQuantity(quantity)
        } else if (productInfoDetailPapas) {
            setPrice(productInfoDetail?.precio)
            setTitle(productInfoDetail?.title)
            setIcon(productInfoDetail?.icon)
            setId(productInfoDetail?.id)
            setCheckboxes(productInfoDetail?.items?.salsas || [])
            setQuantity(quantity)
        }
    }, [productInfoDetail])

    const handleCart = () => {
        dispatch(
            setItems({
                title,
                id: randomId(),
                icon,
                price,
                quantity,
                radioValue,
                selectedBoxes,
                secondarySelectedBoxes,
            })
        )
        handleGoCart()
    }

    const handleGoBack = () => handleGoCategory({ title: INDIVIDUALES })

    const renderTypeInfo = () => {
        if (productInfoDetailHamburguesa) {
            return (
                <ProductDetail
                    cardTitle={productInfoDetail?.title}
                    title={HAMBURGUESA.TITLE}
                    icon={productInfoDetail.icon}
                    radioTitle={HAMBURGUESA.RADIO_TITLE}
                    radioData={productInfoDetail?.items?.proteinas}
                    radioValue={radioValue}
                    setRadioValue={setRadioValue}
                    checkboxTitle={HAMBURGUESA.CHECKBOX_TITLE}
                    checkboxData={productInfoDetail?.items?.salsas}
                    checkboxes={checkboxes}
                    setCheckboxes={setCheckboxes}
                    selectedBoxes={selectedBoxes}
                    setSelectedBoxes={setSelectedBoxes}
                    secondaryCheckBoxTitle={
                        HAMBURGUESA.SECONDARY_CHECKBOX_TITLE
                    }
                    secondaryCheckBox={productInfoDetail?.items?.vegetales}
                    secondaryCheckboxes={secondaryCheckboxes}
                    setSecondaryCheckboxes={setSecondaryCheckboxes}
                    secondarySelectedBoxes={secondarySelectedBoxes}
                    setSecondarySelectedBoxes={setSecondarySelectedBoxes}
                    price={productInfoDetail?.precio}
                />
            )
        }

        if (productInfoDetailBebidas) {
            return (
                <ProductDetail
                    cardTitle={productInfoDetail?.title}
                    title={BEBIDAS.TITLE}
                    icon={productInfoDetail?.icon}
                    radioTitle={BEBIDAS.RADIO_TITLE}
                    radioData={productInfoDetail?.items?.bebidas}
                    radioValue={radioValue}
                    setRadioValue={setRadioValue}
                    price={productInfoDetail?.precio}
                />
            )
        }

        if (productInfoDetailPapas) {
            return (
                <ProductDetail
                    cardTitle={productInfoDetail.title}
                    title={PAPAS.TITLE}
                    icon={productInfoDetail.icon}
                    radioTitle={PAPAS.RADIO_TITLE}
                    radioData={productInfoDetail?.items?.tipos}
                    radioValue={radioValue}
                    setRadioValue={setRadioValue}
                    checkboxTitle={PAPAS.CHECKBOX_TITLE}
                    checkboxes={checkboxes}
                    setCheckboxes={setCheckboxes}
                    selectedBoxes={selectedBoxes}
                    setSelectedBoxes={setSelectedBoxes}
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
                <>
                    <View style={styles.container}>{renderTypeInfo()}</View>
                    <View style={styles.paymentBtn}>
                        <RegularButton
                            title="Agregar al carrito"
                            price={price}
                            onPress={handleCart}
                            primary
                        />
                    </View>
                </>
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
    paymentBtn: {
        marginTop: 0,
        paddingHorizontal: 16,
        paddingBottom: 20,
        backgroundColor: WHITE,
    },
})

export default ProductDetailScreen
