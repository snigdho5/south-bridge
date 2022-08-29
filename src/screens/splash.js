import { Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { splash } from '../utils/images';
import BaseView from '../containers/base';
import { deviceHeight, deviceWidth } from '../utils/constants';

export default function Splash({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Drawer");
        }, 2000);
    })
    return (
        <BaseView>
            <Image
                source={splash}
                style={styles.container}
            />
        </BaseView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height:deviceHeight
    }
});

