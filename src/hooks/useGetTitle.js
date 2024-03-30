import { useSelector } from 'react-redux';

const mapStateToProps = (state) => {
    const { title } = state;
    return title;
};

const useGetTitle = () => useSelector(mapStateToProps);

export default useGetTitle;
