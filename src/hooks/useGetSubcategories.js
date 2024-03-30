import { useSelector } from 'react-redux';

const mapStateToProps = (state) => state;

const useGetSubcategories = () => {
    const subcategories = useSelector(mapStateToProps);
    return subcategories;
}

export default useGetSubcategories;
