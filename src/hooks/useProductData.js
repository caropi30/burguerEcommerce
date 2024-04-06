import { useSelector } from 'react-redux';

const mapStateToProps = (state) => state;

const useProductData = () => {
    const productData = useSelector(mapStateToProps);
    return productData;
}

export default useProductData;
