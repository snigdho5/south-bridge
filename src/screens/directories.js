import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { ActionSheetIOS, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import BaseView from '../containers/base'
import DirectoryList from '../containers/directory/directoryList'
import DirectorySearch from '../containers/directory/directorySearch'
import Header from '../containers/header'
import { app, white } from '../utils/colors'

export default function Directories() {

    return (
        <BaseView>
            <Header
                name={"Directories"}
            />
            <DirectorySearch />
            <DirectoryList />
        </BaseView>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: '80%',
        height: 50
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    card: {
        elevation: 3,
        backgroundColor: white,
        padding: 5,
        margin: 5
    }
})