import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import helpersStyle from '../../constants/helpersStyle';
import useFont from '../../hooks/useFont';
import CartButton from './components/CartButton';
import LocationButton from './components/HeaderLocationButton';
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade
} from "rn-placeholder";

const {
    COLORS: { ORANGE, WHITE, BLACK, BORDER_GRAY, GRAY },
} = helpersStyle;

const Header = ({ isHome, isLoading, goBack, isCart, title, isOnboarding }) => {
    const { fontsLoaded } = useFont();

    const headerSkeleton = () => {
        return (
            <View style={styles.container}>
                <View style={styles.skeletonSubcontainer}>
                    <Placeholder
                        Animation={Fade}
                        Right={props => (
                            <PlaceholderMedia
                                isRound={true}
                            />
                        )}
                    >
                        <PlaceholderLine width={85} style={styles.skeletonHeight} />
                    </Placeholder>
                </View>
            </View>
        )
    };

    const renderContent = () => (
        <View style={styles.container}>
            <View style={!isOnboarding ? styles.subcontainer : styles.subcontainerOnboarding}>
                <LocationButton isHome={isHome} goBack={goBack} isCart={isCart} title={title} />
                {!isCart && < CartButton />}
            </View>
        </View>);

    return (
        <>
            {isLoading ? headerSkeleton() : renderContent()}
        </>
    )
};

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: WHITE,
        paddingHorizontal: 16,
        paddingTop: 16,

    },
    subcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingTop: 40,
        paddingBottom: 24,
        backgroundColor: WHITE,
        borderBottomWidth: 1,
        borderBottomColor: BORDER_GRAY,
    },
    subcontainerOnboarding: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingTop: 40,
        paddingBottom: 24,
        backgroundColor: WHITE,
    },
    skeletonSubcontainer: {
        width: '100%',
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: WHITE,
        borderBottomWidth: 1,
        borderBottomColor: BORDER_GRAY,
    },
    skeletonHeight: {
        height: 50,
    },
    txt: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 2,
        textAlign: 'center',
        paddingTop: 30,
    },
    btnArrow: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ORANGE,
        padding: 5,
    },
    btnCart: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ORANGE,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: ORANGE,
        elevation: 7,
        padding: 5,
    },
    btnLocation: {
        flexDirection: 'row',
        gap: 8,
        //alignItems: 'center',
    },
    btnLocationTxt: {
        color: GRAY,
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
    },
    btnLocationSecondary: {
        color: BLACK,
        fontFamily: 'Montserrat-Bold',
    }
});
