import React, { useState } from 'react'
import BaseView from '../containers/base'
import Header from '../containers/header'
import Button from '../components/button'
import Text from '../components/text'
import { app, green, white } from '../utils/colors'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox'

const list = [
    { a: '₹112 / Year', b: '₹12/Month billed anually', c: '(ALPS)(102)', d: 'Available Stock: 45' },
    { a: '7 DAY FREE TRIAL', b: '₹14/Month after 1 week', c: '(ALPS)(107)', d: 'Available Stock: 100' },
]

export default function Subscription() {
    const [isChecked, setIsChecked] = useState(0)

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.list}
                onPress={() => setIsChecked(index)}
            >
                <CheckBox
                    value={isChecked === index}
                    boxType='circle'
                    tintColors={{ true: app, false: app }}
                    onValueChange={() => setIsChecked(index)}
                />
                <View>
                    <Text color={app} size={16} style={{
                        fontWeight: 'bold',
                        marginLeft: 15,
                    }}>{item.a}</Text>
                    <Text color={app} size={12} style={{
                        marginLeft: 15,
                        fontWeight: '400'
                    }}>{item.b}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <BaseView>
            <Header name="Subscription" />
            <View style={styles.body}>
                <View style={styles.row}>
                    <View style={styles.row}>
                        <Text color={app} style={styles.text}>
                            Subscription Plan:
                        </Text>
                        <Text style={styles.activeBtn}>
                            Active
                        </Text>
                    </View>
                    <Text color={app} style={styles.text}>
                        Expiry Date: 19th April 2023
                    </Text>
                </View>
                <Text color={app} size={24} style={styles.heading}>
                    Choose Your Plan
                </Text>
                <Text color={app} >
                    Subscription allow to view Directory details and book multiple services
                </Text>
                <FlatList
                    style={{ marginVertical: 10 }}
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}
                />
            </View>
            <Text color={app} style={styles.restoreTxt}>
                Restore purchase
            </Text>
            <Button
                footer
                label={"Continue"}
            />
        </BaseView>
    )
}
const styles = StyleSheet.create({
    body: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    activeBtn: {
        backgroundColor: green,
        padding: 8,
        borderRadius: 5,
        marginHorizontal: 5,
        marginRight: 15
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    text: {
        fontWeight: '700'
    },
    heading: {
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 20
    },
    list: {
        borderRadius: 10,
        elevation: 3,
        marginVertical: 5,
        borderColor: app,
        borderWidth: 1,
        backgroundColor: white,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    restoreTxt: {
        position: 'absolute',
        bottom: 100,
        textAlign: 'center',
        width:'100%'
    }
})