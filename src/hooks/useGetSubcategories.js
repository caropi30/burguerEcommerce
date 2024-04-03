import { useSelector } from 'react-redux'

const mapStateToProps = (state) => state

const useGetSubcategories = () => useSelector(mapStateToProps)

export default useGetSubcategories
