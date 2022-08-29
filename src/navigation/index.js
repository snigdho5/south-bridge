import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './stacks';
import { navigationRef } from '../utils/config';

export default function Navigation() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stacks />
        </NavigationContainer>
    )
}