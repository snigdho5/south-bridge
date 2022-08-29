import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomSidebarMenu from './SideMenu';
import Dashboard from '../screens/dashboard';
import { deviceWidth } from '../utils/constants';
import { Image } from 'react-native';
import { dashboardIcon } from '../utils/images';
import { app } from '../utils/colors';
import Text from '../components/text';
import Services from '../screens/services';
import Directories from '../screens/directories';
import Notifications from '../screens/notifications';
import Profile from '../screens/profile';
import Subscription from '../screens/subscription';
import OrderHistories from '../screens/orderHistories';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import OTP from '../screens/auth/otp';
import Forgot from '../screens/auth/forgot';
import updateProfile from '../screens/auth/updateProfile';

const Drawer = createDrawerNavigator();
const DrawerStack = createStackNavigator();

export default function Drawers() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: deviceWidth / 1.25,
                },
            }}
            drawerContent={(props) => <CustomSidebarMenu {...props} />}>
            <Drawer.Screen
                name="Drawers"
                component={DrawerStacks}
                options={{
                    drawerLabel: () => (
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: app }}>Dashboard</Text>
                    ),
                    drawerIcon: ({ size }) => (
                        <Image
                            source={dashboardIcon}
                            style={{ height: size, width: size, tintColor: app, }}
                            resizeMode="contain"
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

function DrawerStacks() {
    return (
        <DrawerStack.Navigator screenOptions={{ headerShown: false }}>
            <DrawerStack.Screen name="Dashboard" component={Dashboard} />
            <DrawerStack.Screen name="Services" component={Services} />
            <DrawerStack.Screen name="Directories" component={Directories} />
            <DrawerStack.Screen name="Notifications" component={Notifications} />
            <DrawerStack.Screen name="Profile" component={Profile} />
            <DrawerStack.Screen name="UpdateProfile" component={updateProfile} />
            <DrawerStack.Screen name="Subscription" component={Subscription} />
            <DrawerStack.Screen name="OrderHistories" component={OrderHistories} />
            <DrawerStack.Screen name="Login" component={Login} />
            <DrawerStack.Screen name="Register" component={Register} />
            <DrawerStack.Screen name="Forgot" component={Forgot} />
            <DrawerStack.Screen name="OTP" component={OTP} />
        </DrawerStack.Navigator>
    )
}