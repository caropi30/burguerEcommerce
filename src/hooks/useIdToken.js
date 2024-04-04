import { useSelector } from 'react-redux';

const mapStateToProps = (state) => state;

const useIdToken = () => {
    const idToken = useSelector(mapStateToProps);
    const tokenId = idToken?.idToken?.idToken;
    console.log('tokenId hook', tokenId);
    return tokenId;
}

export default useIdToken;