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
                    drawerIcon: ({size}) => (
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
        </DrawerStack.Navigator>
    )
}