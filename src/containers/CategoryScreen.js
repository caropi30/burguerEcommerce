import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from '../components/Card';
import ComboCard from '../components/ComboDetail/components/ComboCard';
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
    const { handleGoHome, handleProductDetail } = useHandleNavigation();
    const { subcategories } = useGetSubcategories();
    const { data: comboData, isError, isFetching, isSuccess } = useGetComboProductsQuery();
    console.log('comboData', comboData)
    const { fontsLoaded } = useFont();
    const route = useRoute();
    console.log('route category', route.params.title)
    const data = route?.params?.subcategories;
    const title = route?.params?.title;


    const handleNavigation = async () => {
        await navigation.navigate('ProductDetail');
    };

    return (
        <>
            <Header isHome={false} goBack={handleGoHome} />
            <View style={styles.container}>
                <Text style={styles.title}>{route?.params?.title}</Text>
                {title === INDIVIDUALES ?
                    <FlatList
                        data={subcategories}
                        renderItem={({ item }) => (
                            <Card id={item.id} title={item.title} icon={item.icon} onPress={handleProductDetail} />)}
                        keyExtractor={(item) => item.id}

                    /> : <ComboDetail data={comboData} />
                }
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
});

export default CategoryScreen;
