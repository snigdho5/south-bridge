import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { Alert, Image, SafeAreaView, StyleSheet, View } from 'react-native';
import BaseView from '../containers/base';
import { app } from '../utils/colors';
import { navigate } from '../utils/config';
import { contactIcon, dashboardIcon, directoriesIcon, logo, logoutIcon, passwordIcon, privacyIcon, profileIcon, subscriptionIcon, tcIcon } from '../utils/images';

const nav = [
  {
    label: "Directories",
    img: directoriesIcon,
    to: 'Directories'
  },
  {
    label: "My Profile",
    img: profileIcon,
    to: 'Profile'
  },
  {
    label: "Subscribe",
    img: subscriptionIcon,
    to: 'Subscription'
  },
  {
    label: "Order History",
    img: passwordIcon,
    to: 'OrderHistories'
  },
  {
    label: "About Us",
    img: contactIcon,
    to: 'Directories'
  },
  {
    label: "Privacy-Policy",
    img: privacyIcon,
    to: 'Directories'
  },
  {
    label: "Terms of Services",
    img: tcIcon,
    to: 'Directories'
  },
  {
    label: "Logout",
    img: logoutIcon,
    to: 'Directories'
  },
]


const CustomSidebarMenu = props => {

  const onClick = (item) => {
    if (item?.label == "Logout") {
      Alert.alert(
        'Confirm',
        'Are you sure you want to logout?',
        [
          { text: 'OK', onPress: () => navigate('Login') },
          { text: 'Cancel', onPress: () => console.log('cancelled') },
        ],
        { cancelable: false },
      )
    } else {
      navigate(item?.to)
    }
  }

  return (
    <BaseView>
      <Image
        source={logo}
        style={styles.logo}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {nav.map((item, index) =>
          <DrawerItem
            key={index}
            icon={({ size }) => (
              <Image
                source={item?.img}
                style={{ height: size, width: size, tintColor: app }}
                resizeMode="contain"
              />
            )}
            label={item?.label}
            labelStyle={{ fontSize: 16, color: app }}
            onPress={() => onClick(item)} />
        )}
      </DrawerContentScrollView>

    </BaseView>
  );
};
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain'

  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 120,
    width: '100%',
    resizeMode: 'contain',
  },
  logoView: {
    alignContent: 'center',
    justifyContent: 'center',
    height: "25%",
    marginTop: 0,
    borderRadius: 5
  },
});

export default CustomSidebarMenu;
