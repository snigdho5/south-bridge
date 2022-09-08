import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native'
import Button from '../../components/button'
import Text from '../../components/text'
import BaseView from '../../containers/base'
import { app } from '../../utils/colors'
import { navigate } from '../../navigation/routeRef'
import { logo } from '../../utils/images'
import OtpInputs from 'react-native-otp-inputs'
import { useAuth } from '../../context/authContext'
import { login_otp, otp_verify, resend_otp } from '../../services/auth'
import { fcmToken, formData } from '../../utils/helper'
import { ToastError, ToastSuccess } from '../../utils/toast'
import Loader from '../../components/loader'

export default function OTP() {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(false)

  const handleOtp = async (code) => {
    if (code.length == 4) {
      try {
        setLoading(true)
        let res;
        if (user?.login_otp) res = await login_otp(formData({ phone: user?.phone, otp: code, fcm_token: await fcmToken() }));
        else res = await otp_verify(formData({ phone: user?.phone, otp: code }));
        setLoading(false)
        ToastSuccess(res?.message ?? "Successfully Logged In!", 'OTP');
        if (user?.login_otp) setUser(res);
        else setUser(res?.data);
      } catch (error) {
        setLoading(false)
        console.log(error)
        ToastError(error?.message, 'OTP');
      }
    }
  }

  const resendOtp = async () => {
    try {
      setLoading(true)
      let res = await resend_otp(formData({ phone: user?.phone, full_name: user?.full_name }));
      setLoading(false)
      ToastSuccess(res?.message, 'OTP');
    } catch (error) {
      setLoading(false)
      ToastError(error?.message, 'OTP');
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
      <Text color={app} size={30} style={styles.heading}>One Time Password</Text>
      <OtpInputs
        handleChange={handleOtp}
        numberOfInputs={4}
        style={styles.otp}
        inputContainerStyles={styles.cell}
        inputStyles={styles.cellTxt}
        textBreakStrategy='highQuality'

      />

      <Button
        label={"Resend"}
        btnStyle={styles.btn}
        txtStyle={styles.btnTxt}
        onPress={resendOtp}
      />
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
  otp: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 100
  },
  cell: {
    borderColor: app,
    borderWidth: 1,
    borderRadius: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})