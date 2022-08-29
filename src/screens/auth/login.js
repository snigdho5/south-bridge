import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Button from '../../components/button'
import Icon from '../../components/icon'
import Input from '../../components/input'
import Text from '../../components/text'
import BaseView from '../../containers/base'
import SocialLogin from '../../containers/socialLogin'
import { app, black } from '../../utils/colors'
import { navigate } from '../../utils/config'
import { logo } from '../../utils/images'

export default function Login() {
  const [phone, setPhone] = useState();

  return (
    <BaseView style={{ paddingHorizontal: 20, alignItems: 'center' }}>
      <Image
        source={logo}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text color={app} size={30} style={styles.heading}>Log In</Text>
      <Input
        value={phone}
        keyboardType="number-pad"
        setValue={v => setPhone(v)}
        icon="phone"
      />
      <Text
        color={black + 90}
        style={styles.forgot}
        onPress={() => navigate('Forgot')}
      > Forgot Password?</Text>

      <Button
        label={"Log In"}
        btnStyle={styles.btn}
        txtStyle={styles.btnTxt}
        onPress={()=>navigate('Dashboard')}
      />
      <SocialLogin />
      <Text
        color={black + 90}
        style={styles.txt}
        onPress={() => navigate('Register')}
      > Do not have an account ?</Text>
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