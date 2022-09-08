import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/splash';
import Dashboard from '../screens/dashboard';
import Drawers from './drawer';
import Services from '../screens/services';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import Forgot from '../screens/auth/forgot';
import OTP from '../screens/auth/otp';
import { useAuth } from '../context/authContext';


const Stack = createStackNavigator();

export default function Stacks() {
    const { user } = useAuth();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user?.otp && user?.otp_verified != 1 ?
                <Stack.Screen name="OTP" component={OTP} />
                :
                <>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Forgot" component={Forgot} />
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="Services" component={Services} />
                </>
            }
        </Stack.Navigator>
    )
}