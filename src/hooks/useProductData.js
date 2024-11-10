import { useSelector } from 'react-redux'

const mapStateToProps = (state) => state

const useProductData = () => useSelector(mapStateToProps)

export default useProductData
