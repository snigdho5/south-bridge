import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Button from '../../components/button'
import Icon from '../../components/icon'
import Input from '../../components/input'
import Text from '../../components/text'
import BaseView from '../../containers/base'
import SocialLogin from '../../containers/socialLogin'
import { app, black } from '../../utils/colors'
import { navigate } from '../../navigation/routeRef'
import { logo } from '../../utils/images'
import Form from '../../components/form'
import { validateLogin } from '../../validation'
import { login } from '../../services/auth'
import { formData } from '../../utils/helper'
import { ToastError } from '../../utils/toast'
import { useAuth } from '../../context/authContext'
import Loader from '../../components/loader'

export default function Login() {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false)
  const [phone, setPhone] = useState(__DEV__ ? "9928185712" : "");
  const [error, setError] = useState({})

  const onLogin = async () => {
    const validate = validateLogin({ phone: phone });
    setError(validate);
    if (Object.values(validate).length < 1) {
      setLoading(true);
      try {
        let res = await login(formData({ phone_number: phone }));
        setUser({ ...res?.data, otp: res?.data?.login_otp });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        ToastError(error?.message, 'Login')
      }
    }
  }

  return (
    <BaseView style={{ paddingHorizontal: 20, alignItems: 'center' }}>
      <Loader visible={loading} />
      <Image
        source={logo}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text color={app} size={30} style={styles.heading}>Log In</Text>
      <Form
        data={{ phone }}
        errors={error}
        onValidate={validateLogin}
        setError={(value) => setError(value)}>
        <Input
          value={phone}
          placeholder={"Phone number"}
          keyboardType="number-pad"
          error={error?.phone}
          setValue={v => setPhone(v)}
          icon="phone"
        />
      </Form>

      <Button
        label={"Log In"}
        btnStyle={styles.btn}
        txtStyle={styles.btnTxt}
        onPress={onLogin}
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
    height: 50,
    marginTop: 30,
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