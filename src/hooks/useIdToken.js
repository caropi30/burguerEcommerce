import { useSelector } from 'react-redux';

const mapStateToProps = (state) => state;

const useIdToken = () => {
    const idToken = useSelector(mapStateToProps);
    const tokenId = idToken?.idToken?.idToken;
    const addressIdToken = idToken?.idToken?.address;
    const name = tokenId?.name;
    const email = tokenId?.email;
    const token = tokenId?.token;
    const localId = tokenId?.localId;
    const address = tokenId?.address;
    const phone = tokenId?.phone;

    return { name, email, token, localId, address, phone, addressIdToken };

}

export default useIdToken;