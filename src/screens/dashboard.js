import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from '../components/icon'
import Text from '../components/text'
import BaseView from '../containers/base'
import Footer from '../containers/footerDashboard'
import Header from '../containers/header'
import { app } from '../utils/colors'
import { navigate } from '../navigation/routeRef'

export default function Dashboard() {
  return (
    <BaseView>
      <Header
        name={"Dashboard"}
      />
      <Text blackText size={18} style={styles.heading}>Choose Category</Text>
      <TouchableOpacity style={styles.list} onPress={() => navigate('Services')}>
        <Text style={{ fontSize: 17, fontWeight: '800' }}>Custom Related</Text>
        <Icon name="chevron-right" type="Entypo" />
      </TouchableOpacity>
      <Footer />
    </BaseView>
  )
}

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    paddingVertical: 10,
    fontWeight: '500',
  },
  list: {
    backgroundColor: app,
    marginHorizontal: 25,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 76,
    borderRadius: 20,
    elevation: 5,
  }
})