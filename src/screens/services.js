import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from '../components/icon'
import Text from '../components/text'
import BaseView from '../containers/base'
import Footer from '../containers/footerDashboard'
import Header from '../containers/header'
import { app } from '../utils/colors'
import { deviceWidth } from '../utils/constants'
import CheckBox from '@react-native-community/checkbox'
import Button from '../components/button'

export default function Services() {
    return (
        <BaseView>
            <Header
                name={"ServicesList"}
            />
            <Text blackText size={18} style={styles.heading}>List of Services</Text>
            <View style={styles.list}>
                <View style={styles.row}>
                    <CheckBox
                        // value={}
                        boxType='square'
                        style={styles.checkbox}
                        tintColors={{ true: app, false: app }}
                    // onValueChange={(newValue) => this.onCheckClick(index)}
                    />
                    <Text size={20} blackText style={{ paddingRight: 10 }}>Next</Text>
                </View>
                <Button
                    label={"View Details"}
                />
            </View>
            <TouchableOpacity style={styles.footer}>
                <Text size={20} style={{ paddingRight: 10 }}>Next</Text>
                <Icon name="arrow-collapse-right" type="MaterialCommunityIcons" />
            </TouchableOpacity>
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
        marginHorizontal: 25,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        // height: 76,
        borderRadius: 20,
        borderColor: app,
        borderWidth: 1
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        height: 70,
        width: deviceWidth,
        backgroundColor: app,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})