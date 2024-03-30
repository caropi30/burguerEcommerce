import { useSelector } from 'react-redux';

const mapStateToProps = (state) => state;

const useGetProductInfo = () => {
    const productInfo = useSelector(mapStateToProps);
    return productInfo;
}

export default useGetProductInfo;
