import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Text from '../components/text'
import BaseView from '../containers/base'
import Header from '../containers/header'
import { app, black, gray, white } from '../utils/colors'

const list = [
    { a: 'Custom Related\nService 1\nService 2\nService 3', b: '₹112', c: '(ALPS)(102)', d: 'Available Stock: 45' },
    { a: 'GST Services\nService 1\nService 2', b: '₹11', c: '(ALPS)(107)', d: 'Available Stock: 100' },
    { a: 'DGFT Services\nService 1\nService 2\nService 3\nService 4\nService 5\nService 6', b: '₹234', c: '(ALPS)(311)', d: 'Available Stock: 134' },
    { a: 'Statutory Support\nService 7', b: '₹100', c: '(ALPS)(102)', d: 'Available Stock: 45' },
    { a: 'Others with an inquiry form\nService 1\nService 2', b: 'Sandip Marda', c: '(ALPS)(107)', d: 'Available Stock: 100' },
    { a: 'GST Services\nService 1\nService 2', b: '₹232', c: '(ALPS)(311)', d: 'Available Stock: 134' },
    { a: 'DGFT Services\nService 3', b: '₹99', c: '(ALPS)(102)', d: 'Available Stock: 45' },
    { a: 'Statutory Support\nService 1\nService 2', b: '₹878', c: '(ALPS)(107)', d: 'Available Stock: 100' },
    { a: 'Business promotion\nService 5\nService 2\nService 4\nService 3\nService 2', b: '₹500', c: '(ALPS)(311)', d: 'Available Stock: 134' },
    { a: 'Business promotion\nService 3', b: '₹643', c: '(ALPS)(107)', d: 'Available Stock: 100' },
    { a: 'Custom Related\nService 1\nService 2', b: '₹999', c: '(ALPS)(311)', d: 'Available Stock: 134' },
]

export default function OrderHistories() {

    const renderItem = ({ item }) => (
        <View style={styles.list}>
            <View style={styles.row}>
                <Text color={black + 90} style={{ fontWeight: 'bold' }}>{'Order Info: '}</Text>
                <Text color={black + 70} style={{ fontWeight: '500' }}>{item.a}</Text>
            </View>
            <View style={styles.row}>
                <Text color={black + 90} style={{ fontWeight: 'bold' }}>{'Placed On: '}</Text>
                <Text color={black + 70} style={{ fontWeight: '500' }}>{'13 April 2022'}</Text>
            </View>
            <View style={styles.row}>
                <Text color={black + 90} style={{ fontWeight: 'bold' }}>{'Amount: '}</Text>
                <Text color={black + 70} style={{ fontWeight: '500' }}>{item.b}</Text>
            </View>
        </View>
    )

    return (
        <BaseView>
            <Header name="Order History" />

            <FlatList
                style={styles.flatlist}
                data={list}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
                showsVerticalScrollIndicator={false}
            />

        </BaseView>
    )
}
const styles = StyleSheet.create({
    flatlist: {
        marginTop: 15,
        marginHorizontal: 20
    },
    list: {
        borderRadius: 10,
        elevation: 3,
        marginVertical: 5,
        borderColor: app,
        borderWidth: 1,
        backgroundColor: white,
        alignItems: 'center',
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginVertical:5
    }
})