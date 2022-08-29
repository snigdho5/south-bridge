import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Text from '../components/text'
import { app, white } from '../utils/colors'
import CheckBox from '@react-native-community/checkbox'
import Button from '../components/button'

export default function ServiceList({onPress}) {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <View style={styles.list}>
            <View style={styles.row}>
                <CheckBox
                    value={isChecked}
                    boxType='square'
                    tintColors={{ true: app, false: app }}
                    onValueChange={() => {
                        setIsChecked(!isChecked)
                        onPress()
                    }}
                />
                <Text size={16} blackText style={{ paddingLeft: 5 }}>Next</Text>
            </View>
            <Button
                label={"View Details"}
                btnStyle={{ alignSelf: 'flex-end', marginBottom: 0 }}
            />
        </View>

    )
}
const styles = StyleSheet.create({
    list: {
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 20,
        borderColor: app,
        borderWidth: 1,
        backgroundColor: white,
        elevation: 5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})