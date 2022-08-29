import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/splash';
import Dashboard from '../screens/dashboard';
import Drawers from './drawer';
import Services from '../screens/services';


const Stack = createStackNavigator();

export default function Stacks() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Services" component={Services} />
            <Stack.Screen name="Drawer" component={Drawers} />
        </Stack.Navigator>
    )
}