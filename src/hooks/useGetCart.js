import { useSelector } from 'react-redux'

const mapStateToProps = (state) => state

const useGetCart = () => useSelector(mapStateToProps)

export default useGetCart
