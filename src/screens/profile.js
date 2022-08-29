import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Text from '../components/text'
import BaseView from '../containers/base'
import Header from '../containers/header'
import { app, green, white } from '../utils/colors'

const list = [
    { a: 'Name: Pratik Ghosh', b: '102', c: '(ALPS)(102)', d: 'Available Stock: 45' },
    { a: 'Company Name: Lee & Nee Softwares (Exports) Ltd', b: '107', c: '(ALPS)(107)', d: 'Available Stock: 100' },
    { a: 'Email: Pratik.lnsel@gmail.com', b: '311', c: '(ALPS)(311)', d: 'Available Stock: 134' },
    { a: 'Address: SDF Building, 4th Floor, Software Technology Park, GP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091', b: '102', c: '(ALPS)(102)', d: 'Available Stock: 45' },
    { a: 'Country: India', b: '107', c: '(ALPS)(107)', d: 'Available Stock: 100' },
    { a: 'State: West bengal', b: '311', c: '(ALPS)(311)', d: 'Available Stock: 134' },
    { a: 'City: Kolkata', b: '102', c: '(ALPS)(102)', d: 'Available Stock: 45' },
    { a: 'Pincode: 700091', b: '107', c: '(ALPS)(107)', d: 'Available Stock: 100' },
    { a: 'IEC No. FGRTERT3123123: ', b: '311', c: '(ALPS)(311)', d: 'Available Stock: 134' },
    { a: 'GSTIN: RUWORUWOE4124234283402934', b: '107', c: '(ALPS)(107)', d: 'Available Stock: 100' },
    { a: 'PAN NO. UEEOUQOEQW11232', b: '311', c: '(ALPS)(311)', d: 'Available Stock: 134' },
    { a: 'Role: Transporter(International)', b: '311', c: '(ALPS)(311)', d: 'Available Stock: 134' },
]

export default function Profile() {

    const renderItem = ({ item }) => (
        <View style={styles.list}>
            <Text color={app} size={17} style={{ fontWeight: '500', padding: 10 }}>{item.a}</Text>
        </View>
    )


    return (
        <BaseView>
            <Header name="Profile" />
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
                <FlatList
                    style={{ marginTop: 15, marginBottom: 100 }}
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}
                    showsVerticalScrollIndicator={false}
                />
            </View>
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
        width: '100%'
    }
})