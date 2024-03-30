import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Card from '../components/Card';
import { useRoute } from '@react-navigation/native';
import useFont from '../hooks/useFont';
import Header from '../components/Header/Header';
import useHandleNavigation from '../hooks/useHandleNavigation';
import useGetSubcategories from '../hooks/useGetSubcategories';
import helpersStyle from '../constants/helpersStyle';

const { COLORS: { WHITE } } = helpersStyle;

const CategoryScreen = () => {
    const { handleGoHome, handleProductDetail } = useHandleNavigation();
    const { subcategories } = useGetSubcategories();
    console.log('subcategories en category', subcategories)
    const { fontsLoaded } = useFont();
    const route = useRoute();
    const data = route?.params?.subcategories;
    console.log('data category', data)

    const handleNavigation = async () => {
        await navigation.navigate('ProductDetail', {
            screen: 'ProductDetailScreen',
        });
    };

    return (
        <>
            <Header isHome={false} goBack={handleGoHome} />
            <View style={styles.container}>
                <Text style={styles.title}>{route?.params?.title}</Text>
                <FlatList
                    data={subcategories}
                    renderItem={({ item }) => (
                        <Card id={item.id} title={item.title} icon={item.icon} onPress={handleProductDetail} />)}
                    keyExtractor={(item) => item.id}

                />
            </View></>
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
    },
});

export default CategoryScreen;
