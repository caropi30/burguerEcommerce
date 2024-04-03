import React from 'react'
import useGetProductInfo from './useGetProductInfo'
import { useGetIndividualProductsQuery } from '../services/burgersApi'

const useFilterProductDetail = () => {
    const { productInfo } = useGetProductInfo()
    const { data, isFetching } = useGetIndividualProductsQuery()

    const filteredProductDetail = isFetching
        ? []
        : data.filter((product) => product.id === productInfo.id)

    return {
        filteredProductDetail,
        isFetching,
    }
}

export default useFilterProductDetail
