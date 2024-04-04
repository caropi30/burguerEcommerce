import { useFonts } from 'expo-font';

const useFont = () => {
    const [fontsLoaded] = useFonts({
        'Montserrat-Black': require('../../assets/fonts/Montserrat-Black.ttf'),
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Light': require('../../assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Thin': require('../../assets/fonts/Montserrat-Thin.ttf'),
        'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    });

    return {
        fontsLoaded,
    };
};

export default useFont;
