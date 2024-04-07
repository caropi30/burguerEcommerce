import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './LoginStack';
import TabNavigation from './TabNavigation';
import useIdToken from '../hooks/useIdToken';
import { getSession } from '../db';
import { useDispatch } from 'react-redux';
import { setIdToken } from '../actions/idTokenSlice';

const MainNavigation = () => {
    const { token } = useIdToken();
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const session = await getSession()
            console.log(session.rows._array[0])
            if (session.rows.length) {
                const { email, idToken, localId } = session.rows._array[0];
                dispatch(setIdToken({ email: email, token: idToken, localId: localId }));
            }
        })()
    }, []);

    return (
        <NavigationContainer>
            {token ? <LoginStack /> : <TabNavigation />}
        </NavigationContainer>
    )
};

export default MainNavigation;