import { useSelector } from 'react-redux'

const mapStateToProps = (state) => state

const useGetProduct = () => useSelector(mapStateToProps)

export default useGetProduct
