import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import BaseView from '../../containers/base';
import Header from '../../containers/header';
import Input from '../../components/input';
import Button from '../../components/button';
import Picker from '../../components/picker';
import { app, black, white } from '../../utils/colors';
import Text from '../../components/text';

const list = ["Exporters/Traders", "Importers/Traders", "Transporters", "Custom Brokers", "CFS"];


export default function UpdateProfile() {
  const [catSelected, setCatSelected] = useState();
  const [data, setData] = useState({
    fullName: 'Pratik Ghosh',
    company: 'Lee & Nee Softwares (Exports) Ltd',
    email: 'Pratik.lnsel@gmail.com',
    address: 'SDF Building, 4th Floor, Software Technology Park, GP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091',
    country: 'India',
    state: 'West Bengal',
    city: 'Kolkata',
    pin: '700091',
    IEC: 'FGRTERT3123123',
    gstin: 'RUWORUWOE4124234283402934',
    pan: 'SASAEWEWEWE423432',
  });

  const updateData = (key, value) => {
    setData({
      ...data,
      [key]: value
    })
  }

  return (
    <BaseView>
      <Header name="Edit Profile" />
      <KeyboardAvoidingView keyboardVerticalOffset={20} behavior="height">
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.body}>
          <Input
            label="Name:"
            value={data?.fullName}
            setValue={v => updateData('fullName', v)}
          />
          <Input
            label={"Company Name:"}
            value={data?.company}
            setValue={v => updateData('company', v)}
          />
          <Input
            label={"Email Address:"}
            value={data?.email}
            setValue={v => updateData('email', v)}
          />
          <Input
            label={"Address:"}
            value={data?.address}
            setValue={v => updateData('address', v)}
          />
          <Input
            label={"Country:"}
            value={data?.country}
            setValue={v => updateData('country', v)}
          />
          <Input
            label={"State:"}
            value={data?.state}
            setValue={v => updateData('state', v)}
          />
          <Input
            label={"City:"}
            value={data?.city}
            setValue={v => updateData('city', v)}
          />
          <Input
            label={"Pincode:"}
            value={data?.pin}
            setValue={v => updateData('pin', v)}
          />
          <Input
            label={"IEC No.:"}
            value={data?.IEC}
            setValue={v => updateData('IEC', v)}
          />
          <Input
            label={"GSTIN:"}
            value={data?.gstin}
            setValue={v => updateData('gstin', v)}
          />
          <Input
            label={"Pan No.:"}
            value={data?.pan}
            setValue={v => updateData('pan', v)}
          />
          <Text color={black + 90} size={16} style={styles.label}>
            Roll Type:
          </Text>
          <Picker
            style={styles.card}
            list={list}
            catSelected={catSelected}
            setCatSelected={setCatSelected}
          />
          <Button
            label={"Update"}
            btnStyle={styles.btn}
            txtStyle={styles.btnTxt}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </BaseView>
  )
}
const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingBottom: 100
  },
  btn: {
    width: '100%',
    height: 50,
    marginVertical: 20
  },
  btnTxt: {
    fontSize: 20
  },
  card: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: app,
  },
  label: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    marginTop: 15
  }
})