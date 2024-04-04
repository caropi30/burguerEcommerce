import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CartItem from "./CartItem";
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade
} from "rn-placeholder";

const CartItemList = ({ data }) => {
    const renderSkeleton = () => (
        <View>
            <Placeholder
                Animation={Fade}
            >
                <PlaceholderLine width={85} />
            </Placeholder>
        </View>
    );

    if (!data) {
        //return renderSkeleton();
        return <Text>Carrito vacío</Text>
    };

    return (
        data.map(item => <CartItem key={item.id} icon={item.icon} title={item.title} price={item.price} quantityController={false} />)
    )
};

export default CartItemList;