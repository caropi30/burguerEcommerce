import { useSelector } from 'react-redux';
import { useGetUserQuery } from '../services/burgersApi';

const mapStateToProps = (state) => state;

const useGetUser = () => {
    const user = useSelector(mapStateToProps);
    return user;
}

export default useGetUser;