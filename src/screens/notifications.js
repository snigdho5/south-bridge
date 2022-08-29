import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../components/text'
import { app, white } from '../utils/colors'
import BaseView from '../containers/base'
import Header from '../containers/header'

const list = [
    { a: 'Order placed susccessfully', b: 'Congrats! your order has been susccessfully placed', c: '20th April 2022', d: 'Available Stock: 45' },
    { a: 'Deleted Order!', b: 'Your order has been susccessfully deleted', c: '13 April 2022', d: 'Available Stock: 100' },
    { a: 'New App Update available on the Play Store', b: 'New version of this ap available on the Play Store. Please go and update the app from Play Store', c: '11 April 2022', d: 'Available Stock: 134' },
    { a: 'New Notications arrived', b: 'Please check the directory number abc1123 as soon as possble', c: '5 April 2022', d: 'Available Stock: 45' },
    { a: 'Order placed susccessfully', b: 'Congrats! your order has been susccessfully placed', c: '20th April 2022', d: 'Available Stock: 45' },
    { a: 'Deleted Order!', b: 'Your order has been susccessfully deleted', c: '13 April 2022', d: 'Available Stock: 100' },
    { a: 'New App Update available on the Play Store', b: 'New version of this ap available on the Play Store. Please go and update the app from Play Store', c: '11 April 2022', d: 'Available Stock: 134' },
    { a: 'New Notications arrived', b: 'Please check the directory number abc1123 as soon as possble', c: '5 April 2022', d: 'Available Stock: 45' },
]

export default function Notifications() {
    return (
        <BaseView>
            <Header
                name="Notifications"
            />
            <FlatList
                data={list}
                keyExtractor={item => Math.random().toString()}
                renderItem={({ item }) =>
                    <View style={styles.list}>
                        <Text style={styles.header}>
                            {item.a}
                        </Text>
                        <Text blackText style={styles.txt}>{item.b}</Text>
                        <Text blackText style={[styles.txt, { paddingBottom: 10 }]}>{item.c}</Text>
                    </View>
                }
            />
        </BaseView>
    )
}

const styles = StyleSheet.create({
    list: {
        borderRadius: 10,
        elevation: 3,
        marginVertical: 5,
        borderColor: 'grey',
        borderWidth: .5,
        backgroundColor: white,
        marginHorizontal: 20,
        overflow: 'hidden'
    },
    header: {
        textAlignVertical: 'center',
        backgroundColor: app,
        height: 40,
        paddingLeft: 10
    },
    txt: {
        paddingHorizontal: 10,
        paddingTop: 10
    }
})