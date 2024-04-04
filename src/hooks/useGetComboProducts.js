import React from "react";
import useGetComboProductsQuery from "../services/burgersApi";

const useGetComboProducts = () => {
    const { data, isError, isFetching, isSuccess } = useGetComboProductsQuery();

    const comboProdutcs = isFetching ? [] : data;

    return {
        comboProdutcs,
        isError,
        isFetching,
        isSuccess,
    }
};

export default useGetComboProducts;