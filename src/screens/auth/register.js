import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native'
import Button from '../../components/button'
import Icon from '../../components/icon'
import Input from '../../components/input'
import Text from '../../components/text'
import BaseView from '../../containers/base'
import SocialLogin from '../../containers/socialLogin'
import { app, black } from '../../utils/colors'
import { navigate } from '../../utils/config'
import { logo } from '../../utils/images'

export default function Register() {
  const [phone, setPhone] = useState();

  return (
    <BaseView>
      <KeyboardAvoidingView keyboardVerticalOffset={20}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20, alignItems: 'center' }}>
          <Text color={app} size={30} style={styles.heading}>Registration</Text>
          <Input
            value={phone}
            placeholder="Full Name"
            setValue={v => setPhone(v)}
          />
          <Input
            value={phone}
            placeholder="Company Name"
            setValue={v => setPhone(v)}
          />
          <Input
            value={phone}
            placeholder="Email Address"
            keyboardType="email-address"
            setValue={v => setPhone(v)}
          />
          <Input
            value={phone}
            placeholder="Phone Number"
            keyboardType="number-pad"
            setValue={v => setPhone(v)}
          />
          <Input
            value={phone}
            placeholder="Address"
            setValue={v => setPhone(v)}
          />
          <Input
            value={phone}
            placeholder="Country"
            setValue={v => setPhone(v)}
          />
          <Input
            value={phone}
            placeholder="State"
            setValue={v => setPhone(v)}
          />
          <Input
            value={phone}
            placeholder="City"
            setValue={v => setPhone(v)}
          />
          <Input
            value={phone}
            placeholder="Pincode"
            setValue={v => setPhone(v)}
          />
          <Input
            value={phone}
            placeholder="IEC No."
            setValue={v => setPhone(v)}
          />
          <Input
            value={phone}
            placeholder="GSTIN"
            setValue={v => setPhone(v)}
          />
          <Input
            value={phone}
            placeholder="Pan No."
            setValue={v => setPhone(v)}
          />
          <Button
            label={"Register"}
            btnStyle={styles.btn}
            txtStyle={styles.btnTxt}
            onPress={() => navigate('Dashboard')}
          />
          <Text
            color={black + 90}
            style={{paddingBottom:20}}
            onPress={() => navigate('Login')}
          >Go to Login Screen</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </BaseView>
  )
}
const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 120,
    marginTop: 20
  },
  heading: {
    textAlign: "center",
    fontWeight: 'bold'
  },
  btn: {
    width: '100%',
    height: 50
  },
  btnTxt: {
    fontSize: 20
  },
  forgot: {
    alignSelf: 'flex-end',
    marginVertical: 10
  },
  txt: {
    position: 'absolute',
    bottom: 20
  }
})