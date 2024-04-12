import { useSelector } from 'react-redux'

const mapStateToProps = (state) => state

const useGetProductInfo = () => useSelector(mapStateToProps)

export default useGetProductInfo
