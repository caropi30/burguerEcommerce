import { useSelector } from 'react-redux'

const mapStateToProps = (state) => state

const useIdToken = () => {
    const idToken = useSelector(mapStateToProps)
    // console.log('useIdToken idToken HOOK', idToken)
    const token = idToken?.idToken?.idToken
    console.log('useIdToken token HOOK', token)
    const address = idToken?.idToken?.address
    console.log('useIdToken address HOOK', address)
    const userData = idToken?.idToken?.userData
    console.log('useIdToken userData HOOK', userData)

    return {
        token,
        address,
        userData,
    }
}

export default useIdToken
