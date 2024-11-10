import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useDispatch } from 'react-redux'
import {
    setItems,
    setAddItem,
    setSubstractItem,
    setRemoveProduct,
    setTotal,
} from '../../actions/cartSlice'
import CartItem from './CartItem'

const CartItemList = ({ data, quantityController }) => {
    const dispatch = useDispatch()
    const renderSkeleton = () => (
        <View>
            <Text>Cargando ...</Text>
        </View>
    )

    if (!data) {
        return <Text>Carrito vacío</Text>
    }

    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <CartItem
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    quantityController={quantityController}
                    radioValue={item.radioValue}
                    addItem={() => dispatch(setAddItem({ id: item.id }))}
                    substractItem={() =>
                        item.quantity > 1
                            ? dispatch(
                                  setSubstractItem({
                                      id: item.id,
                                      price: item.price,
                                  })
                              )
                            : dispatch(setRemoveProduct({ id: item.id }))
                    }
                />
            )}
            keyExtractor={(item) => item.id}
        />
    )
}

export default CartItemList
