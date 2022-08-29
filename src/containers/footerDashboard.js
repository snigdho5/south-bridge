import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { app, white } from '../utils/colors';
import { navigate } from '../utils/config';
import Text from '../components/text';
import Icon from '../components/icon';
import { deviceWidth } from '../utils/constants';

const nav = [
  {
    label: "Notifications",
    to: "Notifications",
    iconName: "bell",
    iconType: "FontAwesome5"
  },
  {
    label: "Directories",
    to: "Directories",
    iconName: "store-mall-directory",
    iconType: "MaterialIcons"
  },
  {
    label: "Profile",
    to: "Profile",
    iconName: "user",
  },
  {
    label: "Subscribe",
    to: "Subscription",
    iconName: "subscriptions",
    iconType: "MaterialIcons"
  },

]

export default function Footer() {
  return (
    <View style={styles.footer}>
      <FlatList
        data={nav}
        keyExtractor={() => Math.random().toString()}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) =>
          <TouchableOpacity style={styles.box} onPress={() => navigate(item?.to)}>
            <Icon
              name={item?.iconName}
              type={item?.iconType}
            />
            <Text style={{ color: 'white' }}>{item?.label}</Text>
          </TouchableOpacity>
        }
      />
    </View>
  )
}
const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    width: deviceWidth,
    height: 63,
    paddingTop: 1,
    backgroundColor: white,
    bottom: 0,
    elevation: 5,
  },
  box: {
    width: '24.5%',
    height: 60,
    backgroundColor: app,
    justifyContent: 'center',
    alignItems: 'center'
  }
});