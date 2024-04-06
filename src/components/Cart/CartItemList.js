import React from "react";
import { View, Text, FlatList } from "react-native";
import { setItems, setAddQuentityProduct, setSubstractQuantityProduct, setRemoveProduct, setTotal } from "../../actions/cartSlice";
import CartItem from "./CartItem";
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade
} from "rn-placeholder";

const CartItemList = ({ data, quantityController }) => {
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
        // data.map(item => <CartItem key={item.id} icon={item.icon} title={item.title} price={item.price} quantity={item.quantity} quantityController={quantityController} />)
        <FlatList
            data={data}
            renderItem={({ item }) =>
                <CartItem
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    quantityController={quantityController}
                    radioValue={item.radioValue}
                    addItem={() => { console.log('addItem', item); console.log('item.id', item.id) }}
                />}
            keyExtractor={item => item.id}
        />
    )
};

export default CartItemList;