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

export default function Forgot() {
    const [phone, setPhone] = useState();

    return (
        <BaseView style={{ paddingHorizontal: 20, alignItems: 'center' }}>
            <Image
                source={logo}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text color={app} size={30} style={styles.heading}>Forgot Password</Text>
            <Input
                value={phone}
                placeholder="Enter Email ID / Mobile Number"
                keyboardType="number-pad"
                setValue={v => setPhone(v)}
            />
            <Text
                color={black + 90}
                style={styles.forgot}
            >
                Please enter your email address or mobile number and we will send you a link to reset the password.
            </Text>

            <Button
                label={"Submit"}
                btnStyle={styles.btn}
                txtStyle={styles.btnTxt}
                onPress={() => navigate('Dashboard')}
            />
            <Text
                color={black + 90}
                style={styles.txt}
                onPress={() => navigate('Login')}
            > Go to Login Screen</Text>
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
        fontWeight: 'bold',
        marginBottom: 30
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