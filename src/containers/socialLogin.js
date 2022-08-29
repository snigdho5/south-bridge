import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { fb, google } from '../utils/images'

export default function SocialLogin() {
    return (
        <View style={styles.row}>
            <TouchableOpacity onPress={() => Toast.show('Currently under development. Coming Soon!', Toast.LONG)}>
                <Image
                    style={{ width: 40, height: 40, marginStart: 0, marginTop: 20 }}
                    source={fb}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Toast.show('Currently under development. Coming Soon!', Toast.LONG)}>
                <Image
                    style={{ width: 40, height: 40, marginStart: 10, marginTop: 20 }}
                    source={google}
                />
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    }
})