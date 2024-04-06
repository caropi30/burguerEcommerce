import { useSelector } from 'react-redux';

const mapStateToProps = (state) => state;

const useGetProduct = () => {
    const product = useSelector(mapStateToProps);
    return product;
}

export default useGetProduct;
