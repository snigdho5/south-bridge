import React from 'react';
import Stacks from './stacks';
import Drawers from './drawer';
import { useAuth } from '../context/authContext';
import { navigationRef } from '../navigation/routeRef';
import { NavigationContainer } from '@react-navigation/native';

export default function Navigation() {
    const { user } = useAuth();

    return (
        <NavigationContainer
            ref={navigationRef}
        >
            {
                user?.otp_verified == 1
                    ?
                    <Drawers />
                    :
                    <Stacks />
            }
        </NavigationContainer>
    )
}