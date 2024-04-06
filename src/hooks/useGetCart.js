import { useSelector } from 'react-redux';

const mapStateToProps = (state) => state;

const useGetCart = () => {
    const cart = useSelector(mapStateToProps);
    return cart;
}

export default useGetCart;
